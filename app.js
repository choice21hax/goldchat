// Select the necessary elements
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

// Function to add a message to the chat box
const addMessage = (message, type) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  
  // Add class based on whether it's sent or received
  if (type === 'sent') {
    messageElement.classList.add('sent');
  } else if (type === 'received') {
    messageElement.classList.add('received');
  }

  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  
  // Scroll to the bottom to show the latest message
  chatBox.scrollTop = chatBox.scrollHeight;
};

// Event listener for send button
sendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message !== '') {
    // Add sent message to chat
    addMessage(message, 'sent');
    chatInput.value = ''; // Clear the input field

    // Simulate a received message after 1 second
    setTimeout(() => {
      addMessage("This is a simulated reply", 'received');
    }, 1000);
  }
});

// Optional: Allow pressing Enter to send the message
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});

// Firebase
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
