const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function appendMessage(content, className) {
  const message = document.createElement('div');
  message.className = `message ${className}`;
  message.textContent = content;
  chatContainer.appendChild(message);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function mockAIResponse(userMessage) {
  // Simulate AI response
  return `You said: "${userMessage}"`;
}

sendBtn.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (message === '') return;
  appendMessage(message, 'user');
  userInput.value = '';
  setTimeout(() => {
    const response = mockAIResponse(message);
    appendMessage(response, 'bot');
  }, 1000);
});
