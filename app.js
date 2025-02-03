// Get references to HTML elements
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Firebase reference to the messages collection
const messagesRef = database.ref('messages');

// Function to add a new message
const addMessage = (message, sender) => {
  // Create message element
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  
  if (sender === 'user') {
    messageElement.classList.add('sent');
  } else {
    messageElement.classList.add('received');
  }

  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the latest message
};

// Function to send a message to Firebase
const sendMessage = (message) => {
  if (message.trim()) {
    // Push the message to Firebase Realtime Database
    messagesRef.push({
      username: "User",  // You can replace this with a dynamic user name later
      text: message,
      timestamp: Date.now(),
    });
    
    // Clear the input field
    chatInput.value = '';
  }
};

// Event listener for send button
sendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message !== "") {
    sendMessage(message);  // Send message to Firebase
  }
});

// Listen for new messages added to Firebase
messagesRef.on('child_added', (snapshot) => {
  const messageData = snapshot.val();
  addMessage(messageData.text, 'received');
});

// Optional: Allow pressing Enter to send the message
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});
