const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const heart = document.querySelector('.heart');

yesButton.addEventListener('click', () => {
  alert('Yay! I'm so happy you said yes!');
});

noButton.addEventListener('click', () => {
  noButton.style.position = 'absolute';
  noButton.style.transform = 'translate(-50%, -50%)';
  noButton.style.left = `${Math.random() * 100}%`;
  noButton.style.top = `${Math.random() * 100}%`;
  noButton.style.fontSize = `${Math.random() * 20 + 10}px`;
  noButton.style.padding = `${Math.random() * 20 + 10}px ${Math.random() * 40 + 20}px`;
  heart.style.display = 'none';
  document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});
