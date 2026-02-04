const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const celebration = document.getElementById('celebration');
const confettiContainer = document.getElementById('confetti');

let noClickCount = 0;

const messages = [
    "Are you sure? Look at my puppy eyes 🥺",
    "Please? I'll buy you ice cream 🍦",
    "Come on, you know you want to say yes! 💝",
    "Think about all the fun we'll have! 🎉",
    "I promise I'll be the best Valentine ever! 🌟",
    "Don't break my heart! 💔",
    "Just click yes, it's right there! 👉",
    "The yes button is looking really good today... 👀",
    "Why are you doing this to me? 😭",
    "PLEASE PLEASE PLEASE! 🙏"
];

yesBtn.addEventListener('click', function() {
    celebration.classList.add('active');
    createHeartExplosion();
    createConfetti();
});

noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    noClickCount++;
    
    if (noClickCount < messages.length) {
        message.textContent = messages[noClickCount - 1];
    }
    
    const container = document.querySelector('.container');
    container.classList.add('shake');
    setTimeout(() => container.classList.remove('shake'), 500);
    
    if (noClickCount === 1) {
        noBtn.style.fontSize = '1rem';
        noBtn.style.padding = '0.8rem 2rem';
        yesBtn.style.fontSize = '1.4rem';
        yesBtn.style.padding = '1.2rem 3rem';
    } 
    else if (noClickCount === 2) {
        noBtn.style.fontSize = '0.9rem';
        noBtn.style.padding = '0.6rem 1.5rem';
        yesBtn.style.fontSize = '1.6rem';
        yesBtn.style.padding = '1.4rem 3.5rem';
        makeNoButtonMove();
    } 
    else if (noClickCount === 3) {
        noBtn.style.fontSize = '0.7rem';
        noBtn.style.padding = '0.4rem 1rem';
        yesBtn.style.fontSize = '1.8rem';
        yesBtn.style.padding = '1.6rem 4rem';
    } 
    else if (noClickCount === 4) {
        noBtn.style.fontSize = '0.6rem';
        noBtn.style.padding = '0.3rem 0.8rem';
        yesBtn.style.fontSize = '2rem';
        yesBtn.style.padding = '1.8rem 4.5rem';
        noBtn.style.position = 'absolute';
    } 
    else if (noClickCount >= 5) {
        noBtn.style.fontSize = '0.5rem';
        noBtn.style.padding = '0.2rem 0.6rem';
        yesBtn.style.fontSize = '2.2rem';
        yesBtn.style.padding = '2rem 5rem';
    }
});

noBtn.addEventListener('mouseenter', function() {
    if (noClickCount >= 2) {
        const container = document.querySelector('.buttons-container');
        const containerRect = container.getBoundingClientRect();
        
        const maxX = containerRect.width - noBtn.offsetWidth;
        const maxY = containerRect.height - noBtn.offsetHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        noBtn.classList.add('spin');
        setTimeout(() => noBtn.classList.remove('spin'), 1000);
    }
});

function makeNoButtonMove() {
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function createHeartExplosion() {
    const heartsExplosion = document.querySelector('.hearts-explosion');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animation = `confettiFall ${Math.random() * 2 + 2}s ease-out forwards`;
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        heartsExplosion.appendChild(heart);
    }
}

function createConfetti() {
    const colors = ['#ff6b9d', '#ffc2d1', '#ff3366', '#ffe5ec', '#ff1744'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const heartBg = document.querySelector('.hearts-background');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💕';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.opacity = '0.15';
        heart.style.animation = `float ${Math.random() * 10 + 15}s infinite`;
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartBg.appendChild(heart);
    }
});
