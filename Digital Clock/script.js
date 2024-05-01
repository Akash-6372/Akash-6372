const screen = document.querySelector('.screen');
const button = document.querySelector('.button');
let isButtonClicked = false;

button.addEventListener('click', function() {
  if (!isButtonClicked) {
    screen.style.display = 'flex'; 
    screen.innerHTML = getTimeDate();
    screen.style.backgroundColor = getRandomColor(); 
    isButtonClicked = true;
  } else {
    screen.style.display = 'none'; 
    isButtonClicked = false;
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getTimeDate() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  let currentDate = date.toLocaleDateString();
  return `${currentDate}<br>${time}`;
}