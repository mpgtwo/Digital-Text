const hoverWords = document.querySelectorAll(".hover-word");

hoverWords.forEach(word => {
  const popup = document.createElement("span");

  popup.className = "hover-popup";
  popup.textContent = word.dataset.info;

  word.appendChild(popup);
});
