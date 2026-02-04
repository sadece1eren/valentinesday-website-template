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
    
    setTimeout(() => {
        celebration.classList.remove('active');
        const finalPage = document.getElementById('finalPage');
        finalPage.classList.add('active');
        startContinuousAnimations();
    }, 5000);
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
        
        createSadHearts(noBtn);
    }
});

yesBtn.addEventListener('mouseenter', function() {
    createHappyHearts(yesBtn);
});

function createSadHearts(element) {
    const rect = element.getBoundingClientRect();
    const heartsCount = 5;
    const sadHearts = ['🖤', '💔', '😢'];
    
    for (let i = 0; i < heartsCount; i++) {
        const heart = document.createElement('div');
        heart.textContent = sadHearts[Math.floor(Math.random() * sadHearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = rect.left + rect.width / 2 + 'px';
        heart.style.top = rect.top + rect.height / 2 + 'px';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        document.body.appendChild(heart);
        
        const angle = (Math.PI * 2 * i) / heartsCount;
        const distance = 60;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        heart.animate([
            { 
                transform: 'translate(-50%, -50%) scale(0)',
                opacity: 1 
            },
            { 
                transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1)`,
                opacity: 0 
            }
        ], {
            duration: 800,
            easing: 'ease-out'
        });
        
        setTimeout(() => heart.remove(), 800);
    }
}

function createHappyHearts(element) {
    const rect = element.getBoundingClientRect();
    const heartsCount = 3;
    const happyHearts = ['💕', '💖', '❤️', '✨', '🌟'];
    
    for (let i = 0; i < heartsCount; i++) {
        const heart = document.createElement('div');
        heart.textContent = happyHearts[Math.floor(Math.random() * happyHearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = rect.left + rect.width / 2 + (Math.random() - 0.5) * 40 + 'px';
        heart.style.top = rect.top + 'px';
        heart.style.fontSize = Math.random() * 10 + 15 + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        document.body.appendChild(heart);
        
        heart.animate([
            { 
                transform: 'translateY(0) scale(0)',
                opacity: 1 
            },
            { 
                transform: `translateY(-80px) scale(1.2)`,
                opacity: 0 
            }
        ], {
            duration: 1200 + Math.random() * 400,
            easing: 'ease-out',
            delay: Math.random() * 200
        });
        
        setTimeout(() => heart.remove(), 1600);
    }
}

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
    
    let lastPawTime = 0;
    document.addEventListener('mousemove', function(e) {
        const now = Date.now();
        if (now - lastPawTime > 100) {
            createPawPrint(e.clientX, e.clientY);
            lastPawTime = now;
        }
    });
});

function createPawPrint(x, y) {
    const paw = document.createElement('div');
    paw.className = 'paw-print';
    paw.textContent = '🐾';
    paw.style.left = x + 'px';
    paw.style.top = y + 'px';
    document.body.appendChild(paw);
    
    setTimeout(() => paw.remove(), 1000);
}

function startContinuousAnimations() {
    const gifOverlay = document.getElementById('gifOverlay');
    const continuousHearts = document.getElementById('continuousHearts');
    const continuousConfetti = document.getElementById('continuousConfetti');
    
    setInterval(() => {
        createGifExplosion(gifOverlay);
    }, 2000);
    
    setInterval(() => {
        createContinuousHeart(continuousHearts);
    }, 300);
    
    setInterval(() => {
        createContinuousConfettiPiece(continuousConfetti);
    }, 100);
}

const memoriesBtn = document.getElementById('memoriesBtn');
if (memoriesBtn) {
    memoriesBtn.addEventListener('click', function() {
        const memoryGallery = document.getElementById('memoryGallery');
        memoryGallery.classList.add('active');
        startGalleryAnimations();
    });
}

function startGalleryAnimations() {
    const gallery = document.getElementById('floatingHeartsGallery');
    
    setInterval(() => {
        createFloatingGalleryHeart(gallery);
    }, 500);
    
    setInterval(() => {
        createSparkle();
    }, 300);
    
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            createCardHearts(card);
        });
    });
}

function createFloatingGalleryHeart(container) {
    const hearts = ['💕', '💖', '💗', '💓', '❤️', '💝'];
    const heart = document.createElement('div');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-30px';
    heart.style.opacity = '0.6';
    heart.style.pointerEvents = 'none';
    
    container.appendChild(heart);
    
    heart.animate([
        { 
            bottom: '-30px',
            opacity: 0.6,
            transform: 'rotate(0deg) translateX(0)'
        },
        { 
            bottom: '110%',
            opacity: 0,
            transform: `rotate(${Math.random() * 360}deg) translateX(${Math.random() * 100 - 50}px)`
        }
    ], {
        duration: Math.random() * 3000 + 4000,
        easing: 'ease-out'
    });
    
    setTimeout(() => heart.remove(), 7000);
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    document.querySelector('.memory-gallery-inner').appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 2000);
}

function createCardHearts(card) {
    const hearts = ['💕', '✨', '💖', '⭐'];
    const count = 5;
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 15 + 10 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '10';
        
        card.appendChild(heart);
        
        heart.animate([
            { 
                opacity: 1,
                transform: 'translateY(0) scale(0)'
            },
            { 
                opacity: 0,
                transform: `translateY(-50px) scale(1.5)`
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        setTimeout(() => heart.remove(), 1000);
    }
}

function createGifExplosion(container) {
    const hearts = ['💕', '💖', '💗', '💓', '✨', '⭐'];
    const count = 8;
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.pointerEvents = 'none';
        
        container.appendChild(heart);
        
        const angle = (Math.PI * 2 * i) / count;
        const distance = 150;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        heart.animate([
            { 
                transform: 'translate(-50%, -50%) scale(0)',
                opacity: 1 
            },
            { 
                transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.5)`,
                opacity: 0 
            }
        ], {
            duration: 1500,
            easing: 'ease-out'
        });
        
        setTimeout(() => heart.remove(), 1500);
    }
}

function createContinuousHeart(container) {
    const hearts = ['💕', '💖', '💗', '💓', '❤️', '💝'];
    const heart = document.createElement('div');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 25 + 15 + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.opacity = '0';
    
    container.appendChild(heart);
    
    heart.animate([
        { 
            bottom: '-50px',
            opacity: 0,
            transform: 'rotate(0deg)'
        },
        { 
            bottom: '50%',
            opacity: 1,
            transform: `rotate(${Math.random() * 360}deg)`
        },
        { 
            bottom: '110%',
            opacity: 0,
            transform: `rotate(${Math.random() * 720}deg)`
        }
    ], {
        duration: Math.random() * 2000 + 3000,
        easing: 'ease-out'
    });
    
    setTimeout(() => heart.remove(), 5000);
}

function createContinuousConfettiPiece(container) {
    const colors = ['#ff6b9d', '#ffc2d1', '#ff3366', '#ffe5ec', '#ff1744', '#ff69b4', '#ffffff'];
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = Math.random() * 10 + 5 + 'px';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-20px';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.opacity = '0.8';
    
    container.appendChild(confetti);
    
    confetti.animate([
        { 
            top: '-20px',
            transform: 'rotate(0deg)'
        },
        { 
            top: '110%',
            transform: `rotate(${Math.random() * 720}deg)`
        }
    ], {
        duration: Math.random() * 2000 + 2000,
        easing: 'linear'
    });
    
    setTimeout(() => confetti.remove(), 4000);
}
