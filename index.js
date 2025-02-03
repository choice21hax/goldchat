// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyABD17kQs_kwDr8T2L9yy-2TYA6hppOUM8",
    authDomain: "gold-chat-temp.firebaseapp.com",
    projectId: "gold-chat-temp",
    storageBucket: "gold-chat-temp.firebasestorage.app",
    messagingSenderId: "433358835569",
    appId: "1:433358835569:web:6ceeac56c6a24cd6b4b0d0",
    measurementId: "G-V6V5BWKMB0"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const analytics = getAnalytics(app);

// Get references to HTML elements
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Firebase reference to the messages collection
const messagesRef = database.ref('messages');

// Function to add a new message to the chat
const addMessage = (message, sender) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  
  if (sender === 'sent') {
    messageElement.classList.add('sent');
  } else {
    messageElement.classList.add('received');
  }

  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom to show the latest message
};

// Function to send a message to Firebase
const sendMessage = (message) => {
  if (message.trim()) {
    // Push the message to Firebase Realtime Database
    messagesRef.push({
      username: "User",  // Placeholder for the username
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
    sendMessage(message); // Send message to Firebase
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
