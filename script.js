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
    
    // Create a simple text-based resume content
    const resumeContent = `
JASON L. FU
Computer Science Student & Software Engineer
San Jose, CA | 503-547-5876 | jlf344@cornell.edu
GitHub: github.com/jlfud | LinkedIn: linkedin.com/in/jlfud

EDUCATION
Cornell University, College of Engineering | Ithaca, NY
Bachelor of Science in Computer Science, Minor in Artificial Intelligence
Aug 2023 - May 2027 | GPA: 3.93

Relevant Coursework: Machine Learning, Computer Networks, Object-Oriented Programming 
and Data Structures, Data Structures and Functional Programming, Analysis of Algorithms, 
Computer System Organization and Programming

EXPERIENCE
Software Engineering Internship | HYC USA | Fremont, CA | Jun 2025 - Aug 2025
• Developed a full-stack enterprise warehouse management system using modern web 
  technologies (FastAPI, SQLite, JavaScript) with real-time data synchronization and 
  comprehensive user authentication.
• Implemented RESTful API architecture with JWT security, role-based access control, 
  database migrations (Alembic), and automated testing using industry-standard frameworks.
• Built responsive web application with advanced search functionality, multi-language 
  support, automated deployment pipeline, and production-ready infrastructure management.

Software Engineering Internship | HYC USA | Fremont, CA | Jun 2024 - Aug 2024
• Integrated Meta Llama 3.1 language models into in-circuit testing automation using 
  Python GUI, PyTorch, and Transformers, enabling speech recognition and text-to-speech 
  capabilities for streamlined workflows.
• Improved testing efficiency for Apple, Tesla, and Meta circuits by optimizing workflows, 
  reducing testing time by 15%, and leveraging PyQt5 for user interface design.

PROJECTS
Structured Textual Data Ingestion Pipeline | Cornell AguaClara | Feb 2025-Present
• Developed an AWS-powered pipeline (Bedrock, S3, Lambda, API Gateway, OpenSearch, Cognito) 
  to process and retrieve structured textual data from AguaClara's research repositories.
• Built RESTful APIs and Lambda functions to process data, enabling retrieval-augmented 
  generation (RAG) for enhanced LLM responses.
• Automated infrastructure with AWS CDK, and implemented batch processing with SQS and Step Functions.
• Secured authentication with Cognito and designed a frontend file upload interface with robust error handling.
• Established CI/CD pipelines with AWS SAM for automated testing and deployment.

EduConnect.AI | Hackathons at Cornell University | Feb 2025-May 2025
• Developed a full-stack web application that uses artificial intelligence to match students 
  in need with nonprofit organizations. Built the frontend using React and Streamlit (Python) 
  for seamless AI-driven matchmaking.
• Designed a matching algorithm leveraging OpenAI API for prompt classification and SerpAPI 
  for retrieval-augmented generation (RAG) to enhance nonprofit search and recommendation.

Plant Operations Smartphone Tracker | Cornell AguaClara | Jan 2024-May 2025
• Designed and developed POST, an Android application designed with Flutter, Postman, and 
  Figma that streamlines how water plant operators in Central America and India monitor, 
  record, and analyze water filtration data. Improved operational efficiency for water 
  treatment plants serving over 101,000 people.
• Developed the frontend using Kotlin, XML, and Jetpack frameworks, designing responsive 
  UI components and integrating modern Android architecture components for a seamless user experience.
• Implemented an offline-first backend architecture using AWS (Amplify, Cognito, AppSync, 
  DataStore, DynamoDB) to manage cloud infrastructure, authentication, GraphQL communication, 
  and offline data synchronization.

TECHNICAL SKILLS
Languages: Python, Java, C, C++, JavaScript, SQL, Kotlin, OCaml, HTML/CSS
Frameworks/Libraries: React, Express, FastAPI, Flask, Pandas/NumPy, scikit-learn, PyTorch, TensorFlow
Tools: Git, Docker, AWS (Lambda, S3, CloudFormation, CDK), GitHub Actions (CI/CD), pytest, SQLite
    `;
    
    // Create and download the resume as a text file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jason_Fu_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show a notification
    showNotification('Resume downloaded successfully!');
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
