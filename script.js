// ===================================
// CONFIGURATION
// ===================================
const CONFIG = {
    birthdayDate: new Date('2026-02-05T18:30:00'), // Feb 5, 2026, 6:30 PM
    giftOptions: ['🧸', '🎈', '🎀', '🍰', '🎁', '👶'],
};

// Audio Elements
const AUDIO = {
    backgroundMusic: document.getElementById('background-music'),
    winSound: document.getElementById('win-sound'),
    failSound: document.getElementById('fail-sound'),
};

// ===================================
// CONFETTI ANIMATION
// ===================================
class Confetti {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.colors = ['#87CEEB', '#FFB6C1', '#FFD700', '#90EE90', '#DDA0DD'];

        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: -10,
            size: Math.random() * 8 + 4,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5,
        };
    }

    launch(duration = 3000) {
        const particleCount = 150;

        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                this.particles.push(this.createParticle());
            }, (i / particleCount) * 1000);
        }

        this.animate();

        setTimeout(() => {
            this.particles = [];
        }, duration + 2000);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, index) => {
            particle.y += particle.speedY;
            particle.x += particle.speedX;
            particle.rotation += particle.rotationSpeed;

            this.ctx.save();
            this.ctx.translate(particle.x, particle.y);
            this.ctx.rotate((particle.rotation * Math.PI) / 180);
            this.ctx.fillStyle = particle.color;
            this.ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            this.ctx.restore();

            if (particle.y > this.canvas.height) {
                this.particles.splice(index, 1);
            }
        });

        if (this.particles.length > 0) {
            requestAnimationFrame(() => this.animate());
        }
    }
}

// ===================================
// SPARKLE EFFECT
// ===================================
class Sparkle {
    constructor() {
        this.canvas = document.getElementById('sparkle-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.sparkles = [];

        this.resize();
        window.addEventListener('resize', () => this.resize());

        document.addEventListener('mousemove', (e) => this.addSparkle(e.clientX, e.clientY));
        document.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            this.addSparkle(touch.clientX, touch.clientY);
        });

        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addSparkle(x, y) {
        if (Math.random() > 0.8) {
            this.sparkles.push({
                x: x,
                y: y,
                size: Math.random() * 3 + 1,
                life: 1,
                decay: Math.random() * 0.02 + 0.01,
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.sparkles.forEach((sparkle, index) => {
            sparkle.life -= sparkle.decay;

            this.ctx.beginPath();
            this.ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 215, 0, ${sparkle.life})`;
            this.ctx.fill();

            if (sparkle.life <= 0) {
                this.sparkles.splice(index, 1);
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ===================================
// COUNTDOWN TIMER
// ===================================
class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = targetDate;
        this.elements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds'),
        };

        this.update();
        setInterval(() => this.update(), 1000);
    }

    update() {
        const now = new Date().getTime();
        const distance = this.targetDate.getTime() - now;

        if (distance < 0) {
            this.elements.days.textContent = '00';
            this.elements.hours.textContent = '00';
            this.elements.minutes.textContent = '00';
            this.elements.seconds.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.animateChange(this.elements.days, days);
        this.animateChange(this.elements.hours, hours);
        this.animateChange(this.elements.minutes, minutes);
        this.animateChange(this.elements.seconds, seconds);
    }

    animateChange(element, value) {
        const formattedValue = value.toString().padStart(2, '0');

        if (element.textContent !== formattedValue) {
            element.style.animation = 'none';
            setTimeout(() => {
                element.textContent = formattedValue;
                element.style.animation = 'flipNumber 0.6s ease-in-out';
            }, 10);
        }
    }
}

// ===================================
// GIFT BOX GAME
// ===================================
class GiftBoxGame {
    constructor() {
        this.giftBox = document.getElementById('gift-box');
        this.giftResult = document.getElementById('gift-result');
        this.resetButton = document.getElementById('reset-gift');
        this.confetti = new Confetti();
        this.hasPlayed = false;

        this.giftBox.addEventListener('click', () => this.play());
        this.resetButton.addEventListener('click', () => this.reset());
    }

    play() {
        if (this.hasPlayed) return;

        this.hasPlayed = true;
        this.giftBox.classList.add('opening');
        this.giftBox.style.animation = 'none';

        setTimeout(() => {
            const isWinner = Math.random() > 0.5;

            if (isWinner) {
                const prize = CONFIG.giftOptions[Math.floor(Math.random() * CONFIG.giftOptions.length)];
                this.giftResult.textContent = prize;
                this.confetti.launch(2000);
            } else {
                this.giftResult.innerHTML = '<div style="font-size: 1.2rem; color: #4A90E2;">Better luck next time 😄</div>';
            }

            this.resetButton.style.display = 'block';
        }, 500);
    }

    reset() {
        this.hasPlayed = false;
        this.giftBox.classList.remove('opening');
        this.giftBox.style.animation = 'shake 3s infinite';
        this.giftResult.textContent = '';
        this.resetButton.style.display = 'none';
    }
}

// ===================================
// MUSIC PLAYER
// ===================================
class MusicPlayer {
    constructor() {
        this.button = document.getElementById('music-toggle');
        this.isPlaying = false;
        this.audio = null;

        // Only initialize if music URL is provided
        if (CONFIG.musicUrl) {
            this.audio = new Audio(CONFIG.musicUrl);
            this.audio.loop = true;
            this.button.addEventListener('click', () => this.toggle());
        } else {
            this.button.addEventListener('click', () => {
                this.button.style.animation = 'pulse 0.3s ease';
                setTimeout(() => {
                    this.button.style.animation = 'pulse 2s infinite';
                }, 300);
            });
        }
    }

    toggle() {
        if (!this.audio) return;

        if (this.isPlaying) {
            this.audio.pause();
            this.button.textContent = '🎵';
        } else {
            this.audio.play();
            this.button.textContent = '🔇';
        }

        this.isPlaying = !this.isPlaying;
    }
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            this.observerOptions
        );

        this.observeElements();
    }

    observeElements() {
        const elements = document.querySelectorAll(
            '.details-card, .countdown-section, .location-section, .gift-game-section, .invitation-section, .rsvp-section'
        );

        elements.forEach((el) => this.observer.observe(el));
    }

    handleIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }
}

// ===================================
// MAP BUTTON ANIMATION
// ===================================
function initMapButton() {
    const mapButton = document.getElementById('map-button');

    mapButton.addEventListener('mouseenter', () => {
        const icon = mapButton.querySelector('.map-icon');
        icon.style.animation = 'none';
        setTimeout(() => {
            icon.style.animation = 'bounceIcon 0.5s ease';
        }, 10);
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
}

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Launch confetti on page load
    const confetti = new Confetti();
    setTimeout(() => confetti.launch(3000), 500);

    // Initialize all components
    new Sparkle();
    new CountdownTimer(CONFIG.birthdayDate);
    new GiftBoxGame();
    new MusicPlayer();
    new ScrollAnimations();
    initMapButton();
    initSmoothScroll();

    // Add parallax effect to background shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
        });
    });

    // Prevent right-click context menu for a cleaner mobile experience
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG' || e.target.classList.contains('baby-image')) {
            e.preventDefault();
        }
    });

    // Add touch feedback for mobile
    const buttons = document.querySelectorAll('button, .rsvp-button, .map-button');
    buttons.forEach((button) => {
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.95)';
        });

        button.addEventListener('touchend', () => {
            button.style.transform = '';
        });
    });

    // Console message
    console.log('🎉 Welcome to Lakshanya Devi\'s 1st Birthday Invitation! 🎉');
    console.log('Made with 💙 for Lakshanya Devi');
});
