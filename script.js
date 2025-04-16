function createRoom() {
  const roomName = document.getElementById("roomName").value.trim();
  if (roomName === "") {
    alert("Entrez un nom de room !");
    return;
  }

  document.getElementById("roomTitle").innerText = roomName;
  document.getElementById("chatRoom").classList.remove("hidden");
}

function handleKey(event) {
  if (event.key === "Enter") {
    talkToAI();
  }
}

function talkToAI() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage("🧑‍💻 Toi", message);
  userInput.value = "";

  const aiResponse = getAIResponse(message);
  setTimeout(() => {
    addMessage("🤖 IA", aiResponse);
  }, 500);
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(message) {
  message = message.toLowerCase();

  if (message.includes("salut")) return "Salut ! Comment je peux t'aider ?";
  if (message.includes("aide")) return "Bien sûr ! Tu veux de l'aide avec quoi ?";
  if (message.includes("room")) return "Tu peux créer autant de rooms que tu veux !";
  return "Hmm... je ne suis pas sûr de comprendre. Tu peux reformuler ?";
}
