// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Resume Download Functionality
document.getElementById('download-resume').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create a link to download the PDF file
    const a = document.createElement('a');
    a.href = 'assets/Jason_Fu_Resume.pdf';
    a.download = 'Jason_Fu_Resume.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Show a notification
    showNotification('Resume PDF downloaded successfully!');
});

// Notification System
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Intersection Observer for Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project-card, .contact-item, .skill-category');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing Animation for Home Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    const homeTitle = document.querySelector('.home-title');
    if (homeTitle) {
        const originalText = homeTitle.textContent;
        typeWriter(homeTitle, originalText, 100);
    }
});

// Smooth scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        if (!scrollToTopBtn) {
            createScrollToTopButton();
        } else {
            scrollToTopBtn.style.display = 'block';
        }
    } else {
        if (scrollToTopBtn) {
            scrollToTopBtn.style.display = 'none';
        }
    }
});

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.id = 'scroll-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #3b82f6;
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        z-index: 1000;
        transition: all 0.3s ease;
        display: none;
    `;
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#1d4ed8';
        this.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#3b82f6';
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(button);
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    // Your scroll handling code here
}, 16); // ~60fps

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Jason Fu\'s portfolio website loaded successfully!');
    
    // Add any additional initialization code here
    
    // Check if all required elements exist
    const requiredElements = ['.navbar', '.home', '.projects', '.resume', '.contact'];
    const missingElements = requiredElements.filter(selector => !safeQuerySelector(selector));
    
    if (missingElements.length > 0) {
        console.warn('Missing elements:', missingElements);
    } else {
        console.log('All required elements found. Website ready!');
    }
});
