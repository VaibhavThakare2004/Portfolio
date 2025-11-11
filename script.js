// JavaScript Document

/*

TemplateMo 597 Neural Glass

https://templatemo.com/tm-597-neural-glass

*/

// ===== THEME SWITCHER =====
document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeSwitcher = document.getElementById('themeSwitcher');
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolioTheme') || 'original';
    
    // Apply saved theme on page load
    if (savedTheme !== 'original') {
        body.setAttribute('data-theme', savedTheme);
    }
    
    // Update active button based on saved theme
    themeButtons.forEach(btn => {
        if (btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        }
    });
    
    // Toggle theme switcher visibility (manual only)
    themeToggleBtn.addEventListener('click', () => {
        themeSwitcher.classList.toggle('active');
    });
    
    // Keep the theme switcher persistent: disable auto-close on outside clicks
    // (No listener here so it stays open unless user toggles it)
    
    // Update active button based on saved theme
    themeButtons.forEach(btn => {
        if (btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        }
    });
    
    // Theme switch functionality (sidebar)
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            
            // Remove active class from all buttons
            themeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Apply theme
            if (theme === 'original') {
                body.removeAttribute('data-theme');
            } else {
                body.setAttribute('data-theme', theme);
            }
            
            // Save theme to localStorage
            localStorage.setItem('portfolioTheme', theme);
            
            // Keep switcher open after selection for quick theme testing
            // Do not remove 'active' here
        });
    });
});

// Mobile menu functionality
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Mobile dropdown toggle - handle multiple dropdowns
        const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
        
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const parent = toggle.closest('.mobile-dropdown');
                
                // Close other dropdowns
                document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
                    if (dropdown !== parent) {
                        dropdown.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                parent.classList.toggle('active');
            });
        });

        // Handle dropdown project navigation - open modal directly
        document.querySelectorAll('.dropdown-item[data-project], .mobile-dropdown-item[data-project], .footer-nav a[data-project]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = item.getAttribute('data-project');
                
                // Trigger modal open by simulating click on corresponding view button
                const viewBtn = document.querySelector(`.view-project-btn[data-project="${projectId}"]`);
                if (viewBtn) {
                    viewBtn.click();
                }
            });
        });

        // Close mobile menu when clicking on links (except dropdown toggle)
        document.querySelectorAll('.mobile-nav a:not(.mobile-dropdown-toggle)').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });

        // Enhanced smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced header functionality
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active menu item highlighting
        function updateActiveMenuItem() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
            
            let currentSection = '';
            const scrollPos = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveMenuItem);
        window.addEventListener('load', updateActiveMenuItem);

        // Parallax effect for geometric shapes
        window.addEventListener('scroll', () => {
            const shapes = document.querySelectorAll('.shape');
            const scrolled = window.pageYOffset;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Neural lines pulse effect
        const neuralLines = document.querySelectorAll('.neural-line');
        setInterval(() => {
            neuralLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'scaleX(1.2)';
                    setTimeout(() => {
                        line.style.opacity = '0.2';
                        line.style.transform = 'scaleX(0.5)';
                    }, 200);
                }, index * 300);
            });
        }, 2000);

        // Enhanced particle generation
        function createQuantumParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = ['#00ffff', '#ff0080', '#8000ff'][Math.floor(Math.random() * 3)];
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100vh';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            document.body.appendChild(particle);
            
            const duration = Math.random() * 3000 + 2000;
            const drift = (Math.random() - 0.5) * 200;
            
            particle.animate([
                { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
                { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Generate quantum particles
        setInterval(createQuantumParticle, 1500);

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe timeline items and hexagons
        document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Form submission effect
        document.querySelector('.submit-btn').addEventListener('click', function(e) {
            e.preventDefault();
            this.innerHTML = 'TRANSMITTING...';
            this.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';
            
            setTimeout(() => {
                this.innerHTML = 'TRANSMISSION COMPLETE';
                this.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
                
                setTimeout(() => {
                    this.innerHTML = 'TRANSMIT TO MATRIX';
                    this.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
                }, 2000);
            }, 1500);
        });

        // ===== TEXT ANIMATION WITH GSAP =====
        // Wait for GSAP and Lenis to load with retry mechanism
        function initializeSmoothScroll() {
            // Check if libraries are loaded
            if (typeof gsap === 'undefined' || typeof Lenis === 'undefined') {
                console.warn('GSAP or Lenis not loaded yet, retrying...');
                setTimeout(initializeSmoothScroll, 100);
                return;
            }

            console.log('Initializing Lenis smooth scroll...');

            // Initialize Lenis Smooth Scroll
            const lenis = new Lenis({
                smooth: true,
                multiplier: 1,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
                lerp: 0.1,
                duration: 1.2
            });

            // Make lenis available globally for debugging
            window.lenis = lenis;

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            // Register GSAP plugins
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.normalizeScroll(true);

            // Sync ScrollTrigger with Lenis
            lenis.on('scroll', ScrollTrigger.update);

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });

            gsap.ticker.lagSmoothing(0);

            console.log('Lenis smooth scroll initialized successfully!');

            // Main Text Color Animation (without char splitting to avoid breaking HTML)
            const mainTextElement = document.querySelector('.text-animation__text');
            if (mainTextElement) {
                // Animate the whole text color change
                gsap.fromTo(
                    mainTextElement,
                        { color: "var(--text-color)" },
                        {
                            color: "var(--primary-color)",
                        scrollTrigger: {
                            trigger: ".text-animation__text",
                            start: "top bottom",
                            end: "bottom center",
                            scrub: 1
                        }
                    }
                );
            }

            // Image Reveal Animation
            const words = [...document.querySelectorAll(".text-animation__word")];

            words.forEach((word) => {
                const wrapper = word.querySelector(".text-animation__image-wrapper");
                const revealLeft = word.querySelector(".text-animation__reveal.left");
                const revealRight = word.querySelector(".text-animation__reveal.right");

                if (!wrapper || !revealLeft || !revealRight) return;

                gsap.set(wrapper, { width: 0 });
                gsap.set([revealLeft, revealRight], { xPercent: 0 });

                ScrollTrigger.create({
                    trigger: word,
                    start: "top 80%",
                    end: "bottom 20%",
                    onEnter: () => {
                        gsap.to(wrapper, {
                            width: "14vw",
                            duration: 0.5,
                            ease: "power2.out"
                        });
                        gsap.to(revealLeft, {
                            xPercent: -100,
                            duration: 0.5,
                            ease: "power2.out"
                        });
                        gsap.to(revealRight, {
                            xPercent: 100,
                            duration: 0.5,
                            ease: "power2.out",
                            delay: 0.05
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(wrapper, {
                            width: 0,
                            duration: 0.5,
                            ease: "power2.inOut"
                        });
                        gsap.to(revealLeft, {
                            xPercent: 0,
                            duration: 0.5,
                            ease: "power2.inOut"
                        });
                        gsap.to(revealRight, {
                            xPercent: 0,
                            duration: 0.5,
                            ease: "power2.inOut",
                            delay: 0.05
                        });
                    }
                });
            });

            // Final Text Animation (smooth color transition)
            const finalTextElement = document.querySelector('.final__bottom-text');
            if (finalTextElement) {
                gsap.fromTo(
                    finalTextElement,
                    { color: "#999999" },
                    {
                        color: "#ffffff",
                        scrollTrigger: {
                            trigger: ".final__bottom-text",
                            start: "top bottom-=15%",
                            end: "bottom bottom",
                            scrub: 1
                        }
                    }
                );
            }
        }

        // Start initialization when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeSmoothScroll);
        } else {
            initializeSmoothScroll();
        }

        // ===== PROJECT CAROUSEL =====
        const projectNext = document.querySelector(".project-next");
        const projectPrev = document.querySelector(".project-prev");

        if (projectNext && projectPrev) {
            projectNext.addEventListener("click", function () {
                let items = document.querySelectorAll(".project-item");
                if (items.length > 0) {
                    document.querySelector(".project-slide").appendChild(items[0]);
                }
            });

            projectPrev.addEventListener("click", function () {
                let items = document.querySelectorAll(".project-item");
                if (items.length > 0) {
                    document.querySelector(".project-slide").prepend(items[items.length - 1]);
                }
            });
        }

        // ===== PROJECT MODAL =====
        const projectData = {
            project1: {
                title: "NGO Website - Kshitij Foundation",
                tags: ["Web Development", "Non-Profit", "Responsive Design"],
                image: "images/Kshitij_Foundation.png",
                overview: "Developed a comprehensive, fully functional website for Kshitij Foundation, a non-profit organization focused on education and community development. The website serves as a digital platform to showcase their mission, projects, and impact, while facilitating donations and volunteer engagement.",
                features: [
                    "Responsive design that works seamlessly across all devices",
                
                    "Volunteer registration system",
                    "Dynamic project showcase with real-time updates",
                    "Blog section for sharing stories and updates",
                ],
                technologies: ["HTML5", "CSS3", "JavaScript",],
                role: "Full Stack Developer - Designed and developed the complete website from concept to deployment. Collaborated with the NGO team to understand their needs and translated them into functional features.",
                challenges: "The main challenge was designing an intuitive platform that fosters trust while maintaining a seamless user experience. I implemented SSL encryption, secure authentication, and transparent system logs to strengthen reliability.",
                liveLink: "https://www.kshitijfoundation.org/",
                githubLink: "https://github.com/VaibhavThakare2004/NGO_Muktangan"
            },
            project2: {
    title: "AI-Powered Stress and Confidence Analyzer",
    tags: ["Deep Learning", "Emotion Recognition", "Real-time Analysis"],
    image: "images/Stress.jpg",
    overview: "Developed an intelligent system that analyzes facial expressions and vocal patterns to assess stress and confidence levels in real time. The application combines video and audio processing with deep learning models to provide accurate emotional insights, enhancing self-awareness and communication analysis.",
    features: [
        "Real-time face and emotion detection using MediaPipe and CNN models",
        "Voice-based confidence classification using LSTM",
        "Automatic video and audio synchronization with FFmpeg",
        "CSV report generation with time-based emotion data",
        "Interactive dashboard for result visualization",
        "Secure FastAPI backend with modular ML integration"
    ],
    technologies: [
        "Python", "FastAPI", "TensorFlow / Keras", "OpenCV", "Librosa", "Mediapipe", "Joblib", "Pandas"
    ],
    role: "Full-Stack ML Developer — Implemented both facial emotion recognition and audio confidence models, integrated them into a unified FastAPI system, and optimized real-time processing performance.",
    challenges: "The main challenge was achieving real-time synchronization and emotion consistency across video and audio streams. Solved this by implementing parallel processing pipelines, efficient frame sampling, and audio segmentation with adaptive interval matching.",
    liveLink: "https://www.ijraset.com/research-paper/ai-powered-interview-stress-and-confidence-analyzer ",
    githubLink: "https://github.com/VaibhavThakare2004/Stress-ConfidenceAnalyser"
}
,
            project3: {
    title: "Refrigerator Door Detection & Verification using CNNs and Siamese Networks",
    tags: ["Computer Vision", "Deep Learning", "Object Detection"],
    image: "images/Refrigerator_door.png",
    overview: "Developed a deep learning-based image detection and verification system to automatically identify and validate refrigerator doors in large-scale retail environments. The project combines Detectron2 for object detection and Siamese Networks for visual similarity verification, ensuring that each door matches its assigned reference model accurately.",
    features: [
        "Custom-trained Detectron2 model for refrigerator door detection",
        "Siamese Neural Network for image similarity verification",
        "COCO-style dataset preparation and augmentation pipeline",
        "Web-scraped dataset with automated labeling and preprocessing",
        "End-to-end modular system for detection, verification, and logging",
        "High-accuracy visual matching between reference and detected doors"
    ],
    technologies: [
        "Python", "PyTorch", "Detectron2", "OpenCV", "Siamese Networks", "NumPy", "Pandas", "Matplotlib"
    ],
    role: "Computer Vision Engineer — Led the model design and training pipeline, optimized feature extraction using CNN backbones, and integrated Siamese similarity verification for robust matching.",
    challenges: "The main challenge was ensuring accurate door verification under different lighting and perspective variations. Solved this by applying heavy data augmentation, contrast normalization, and fine-tuning Siamese embeddings for feature consistency.",
    liveLink: "https://www.linkedin.com/posts/vaibhavthakare2004_deeplearning-computervision-detectron2-activity-7352655432462610433-SHng/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOdx4oB7DfoqdIZiWcJ2huFQ6XGd9WhOS0",
    githubLink: "https://github.com/VaibhavThakare2004/Refrigerator_Door_Detection_and_Verification"
}
,project4: {
    title: "QR-Based Asset Ticketing System with Chatbot Integration",
    tags: ["FastAPI", "Automation", "QR Codes", "Chatbot"],
    image: "images/Asset_Management.png",
    overview: "Designed and developed a complete asset ticketing and management system that automates IT support workflows using QR codes and chatbot integration. The system enables employees to scan device-specific QR codes to instantly access asset details, raise issues, and track resolution progress through a centralized dashboard.",
    features: [
        "Unique QR code generation for each registered asset",
        "Automated ticket creation with real-time database logging",
        "Olam chatbot integration for conversational issue reporting",
        "Separate user and admin dashboards with role-based access",
        "Email notifications for issue creation and updates",
        "Exportable asset and ticket reports in CSV/Excel formats",
        "Web-based responsive interface using FastAPI and Jinja2 templates"
    ],
    technologies: [
        "Python", "FastAPI", "PostgreSQL", "HTML/CSS", "Jinja2", "Olam Chatbot", "QR Code Library"
    ],
    role: "Full-Stack Developer Intern — Designed the database schema, developed backend APIs, and integrated QR code generation with chatbot automation. Built an intuitive web interface and optimized the admin dashboard for seamless asset tracking.",
    challenges: "The main challenge was ensuring secure, real-time ticket creation and synchronization across user and admin interfaces. This was solved by implementing API-based event triggers, structured role management, and efficient data caching to maintain consistency.",
    liveLink: "https://www.linkedin.com/posts/vaibhavthakare2004_fastapi-pythondevelopment-internship-activity-7363616994018889729-UwAR/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOdx4oB7DfoqdIZiWcJ2huFQ6XGd9WhOS0",
    githubLink: "https://github.com/VaibhavThakare2004/Asset-Management"
}
,
            project5: {
    title: "Real-Time Weather Prediction System using FastAPI",
    tags: ["Machine Learning", "FastAPI", "Time-Series Forecasting"],
    image: "images/Wheather_prediction.png",
    overview: "Built a real-time weather prediction API that integrates with the OpenWeather API to fetch live, location- and time-specific meteorological data. The system processes this data using multiple machine learning and deep learning models to generate precise, dynamic weather forecasts for any global coordinate.",
    features: [
        "Integration with OpenWeather API for real-time data collection",
        "XGBoost model trained on 80,000+ weather records for short-term accuracy",
        "Random Forest for stable, cross-condition predictions",
        "LSTM deep learning model for long-term temporal forecasting",
        "RESTful API endpoints developed with FastAPI",
        "Support for latitude, longitude, and timestamp-based predictions",
        "Deployed on Render for real-time scalability"
    ],
    technologies: [
        "Python", "FastAPI", "XGBoost", "Random Forest", "LSTM", "TensorFlow", "scikit-learn", "OpenWeather API", "uvicorn"
    ],
    role: "Machine Learning Engineer — Designed and implemented an end-to-end weather forecasting pipeline, integrating real-time data ingestion with hybrid ML and DL models. Built a modular FastAPI backend for live predictions and model management.",
    challenges: "The biggest challenge was ensuring accurate predictions from dynamic, live data streams. Solved this by introducing data normalization, hybrid model stacking, and retraining pipelines to adapt to seasonal and geographical variations.",
    liveLink: "https://weather-predictor-six.vercel.app/",
    githubLink: "https://github.com/VaibhavThakare2004/Weather_predictor"
},
project6: {
    title: "Muktangan Foundation",
    tags: ["Healthcare AI", "FastAPI", "Machine Learning", "Cloud Deployment"],
    image: "images/Muktangan_Foundation.png",
    overview: "Developed a cloud-based medical platform for the Muktangan Foundation that automates Thalassemia detection using complete blood count (CBC) reports. The system leverages FastAPI, ML models, and Google Cloud to deliver accurate diagnostic results and send instant reports to users via email.",
    features: [
        "AI-powered Thalassemia detection using CBC parameters",
        "FastAPI-based backend integrated with trained ML models",
        "Deployed on Google Cloud Platform (GCP) for scalability and uptime",
        "Secure report upload and instant result generation",
        "Automated email notifications with attached diagnostic reports",
        "Doctor and admin dashboard for reviewing and managing patient data"
    ],
    technologies: [
        "Python", "FastAPI", "Google Cloud Platform (GCP)", "scikit-learn", "Pandas", "SMTP", "HTML/CSS", "Jinja2"
    ],
    role: "Full-Stack Developer & ML Engineer — Built and trained the ML model for Thalassemia prediction, developed a FastAPI backend for secure report analysis, integrated automated email notifications, and deployed the system on Google Cloud.",
    challenges: "The key challenge was managing medical data securely and ensuring reliable email delivery at scale. Solved this by implementing encrypted file handling, server-side validation, and using authenticated SMTP-based mail automation integrated with the FastAPI backend.",
    liveLink: "https://muktanganfoundation.org/",
    githubLink: "https://github.com/VaibhavThakare2004/NGO_Muktangan"
},


        };

        // Modal functionality
        const modal = document.getElementById('projectModal');
        const modalOverlay = document.querySelector('.modal-overlay');
        const modalClose = document.querySelector('.modal-close');
        const viewProjectBtns = document.querySelectorAll('.view-project-btn');

        // Open modal
        viewProjectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = btn.getAttribute('data-project');
                const project = projectData[projectId];
                
                if (project) {
                    // Populate modal content
                    document.getElementById('modalTitle').textContent = project.title;
                    document.getElementById('modalImage').src = project.image;
                    document.getElementById('modalOverview').textContent = project.overview;
                    document.getElementById('modalRole').textContent = project.role;
                    document.getElementById('modalChallenges').textContent = project.challenges;
                    
                    // Set links with onclick to ensure they work
                    const liveLink = document.getElementById('modalLiveLink');
                    const githubLink = document.getElementById('modalGithubLink');
                    
                    liveLink.onclick = function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.liveLink, '_blank');
                    };
                    
                    githubLink.onclick = function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.githubLink, '_blank');
                    };
                    
                    // Tags
                    const tagsContainer = document.getElementById('modalTags');
                    tagsContainer.innerHTML = '';
                    project.tags.forEach(tag => {
                        const tagEl = document.createElement('span');
                        tagEl.className = 'modal-tag';
                        tagEl.textContent = tag;
                        tagsContainer.appendChild(tagEl);
                    });
                    
                    // Features
                    const featuresList = document.getElementById('modalFeatures');
                    featuresList.innerHTML = '';
                    project.features.forEach(feature => {
                        const li = document.createElement('li');
                        li.textContent = feature;
                        featuresList.appendChild(li);
                    });
                    
                    // Technologies
                    const techContainer = document.getElementById('modalTech');
                    techContainer.innerHTML = '';
                    project.technologies.forEach(tech => {
                        const techEl = document.createElement('span');
                        techEl.className = 'tech-item';
                        techEl.textContent = tech;
                        techContainer.appendChild(techEl);
                    });
                    
                    // Show modal
                    modal.classList.add('active');
                    
                    // Save current scroll position before locking body
                    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                    document.body.style.top = `-${scrollPosition}px`;
                    document.body.classList.add('modal-open');
                    
                    // Scroll modal content to top
                    const modalContent = document.querySelector('.modal-content');
                    if (modalContent) {
                        modalContent.scrollTop = 0;
                    }
                    
                    // Stop Lenis smooth scroll when modal is open
                    if (window.lenis) {
                        window.lenis.stop();
                    }
                }
            });
        });

        // Variable to store scroll position
        let scrollPosition = 0;

        // Close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
            document.body.style.top = '';
            
            // Restore scroll position
            window.scrollTo(0, scrollPosition);
            
            // Restart Lenis smooth scroll
            if (window.lenis) {
                window.lenis.start();
            }
        }

        modalClose.addEventListener('click', closeModal);
        
        // Close modal only when clicking directly on overlay background
        modal.addEventListener('click', (e) => {
            // Close only if clicking on the modal itself (not its children)
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });

        // Prevent body scroll when modal is open but allow modal scroll
        if (modal) {
            modal.addEventListener('wheel', (e) => {
                e.stopPropagation();
            }, { passive: true });
            
            modal.addEventListener('touchmove', (e) => {
                e.stopPropagation();
            }, { passive: true });
        }

        // ===== Modern Contact Section Enhancements =====
        (function () {
            const contactSection = document.getElementById('contact');
            if (!contactSection) return;

            // Inject floating orbs once
            const orbHost = document.getElementById('contactParticles');
            if (orbHost && orbHost.childElementCount === 0) {
                const orbs = [
                    { s: 180, x: '8%',  y: '78%', d: 16 },
                    { s: 140, x: '78%', y: '18%', d: 14 },
                    { s: 120, x: '85%', y: '72%', d: 18 },
                    { s: 160, x: '22%', y: '22%', d: 15 },
                    { s: 100, x: '55%', y: '85%', d: 13 }
                ];
                orbs.forEach((o, i) => {
                    const el = document.createElement('div');
                    el.className = 'contact-orb';
                    el.style.setProperty('--s', o.s + 'px');
                    el.style.setProperty('--d', o.d + 's');
                    el.style.left = o.x; el.style.top = o.y;
                    el.style.animationDelay = (i * 0.7) + 's';
                    orbHost.appendChild(el);
                });
            }

            // Typing tagline once when visible
            const tagline = document.getElementById('contactTagline');
            const text = "Let's bring ideas to life together 💡";
            let typed = false;
            const type = () => {
                if (!tagline) return;
                tagline.textContent = '';
                let i = 0;
                const timer = setInterval(() => {
                    tagline.textContent += text.charAt(i++);
                    if (i >= text.length) clearInterval(timer);
                }, 45);
            };
            const io = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting && !typed) { typed = true; type(); }
                });
            }, { threshold: 0.4 });
            io.observe(contactSection);

            // Toast on submit (works alongside existing button animation)
            const toast = document.getElementById('contactToast');
            const btn = document.querySelector('#contact .submit-btn');
            if (toast && btn) {
                const showToast = (msg) => {
                    toast.textContent = msg;
                    toast.classList.add('show');
                    toast.setAttribute('aria-hidden', 'false');
                    setTimeout(() => {
                        toast.classList.remove('show');
                        toast.setAttribute('aria-hidden', 'true');
                    }, 2600);
                };
                btn.addEventListener('click', () => {
                    setTimeout(() => showToast("Message sent! I'll get back to you soon."), 1600);
                });
            }

            // Phone input validation/masking and call action
            const phoneInput = document.getElementById('contactPhone');
            const phoneHint = document.getElementById('phoneHint');
            const callBtn = document.getElementById('callMeBtn');
            const normalize = (v) => v.replace(/[^+0-9\s-]/g, '').trim();
            const isValidPhone = (v) => {
                const digits = v.replace(/\D/g, '');
                return digits.length >= 8; // simple length check; pattern attribute handles basic format
            };
            if (phoneInput) {
                phoneInput.addEventListener('input', () => {
                    const val = normalize(phoneInput.value);
                    phoneInput.value = val;
                    if (!val) {
                        phoneHint.textContent = '';
                        phoneHint.classList.remove('valid', 'invalid');
                        return;
                    }
                    if (isValidPhone(val)) {
                        phoneHint.textContent = 'Looks good. We can call this number.';
                        phoneHint.classList.add('valid');
                        phoneHint.classList.remove('invalid');
                    } else {
                        phoneHint.textContent = 'Please enter a valid phone number (min 8 digits).';
                        phoneHint.classList.add('invalid');
                        phoneHint.classList.remove('valid');
                    }
                });
            }
            if (callBtn && phoneInput) {
                callBtn.addEventListener('click', () => {
                    const val = normalize(phoneInput.value);
                    if (!val || !isValidPhone(val)) {
                        if (phoneHint) {
                            phoneHint.textContent = 'Enter a valid number to place a call.';
                            phoneHint.classList.add('invalid');
                            phoneHint.classList.remove('valid');
                        }
                        return;
                    }
                    const tel = 'tel:' + val.replace(/\s|-/g, '');
                    window.location.href = tel;
                });
            }

            // Name, Email, Subject, Message enhancements
            const nameInput = document.getElementById('contactName');
            const nameHint = document.getElementById('nameHint');
            const nameClearBtn = document.getElementById('nameClearBtn');
            if (nameInput) {
                nameInput.addEventListener('input', () => {
                    // Auto-capitalize each word
                    const capped = nameInput.value.replace(/\b(\w)(\w*)/g, (m, a, b) => a.toUpperCase() + b.toLowerCase());
                    if (capped !== nameInput.value) {
                        const pos = nameInput.selectionStart; nameInput.value = capped; nameInput.selectionStart = nameInput.selectionEnd = pos;
                    }
                    if (nameInput.value.trim().length >= 2) {
                        nameHint.textContent = 'Nice to meet you!';
                        nameHint.classList.add('valid'); nameHint.classList.remove('invalid');
                    } else {
                        nameHint.textContent = 'Please enter your name.';
                        nameHint.classList.add('invalid'); nameHint.classList.remove('valid');
                    }
                });
            }
            if (nameClearBtn && nameInput) {
                nameClearBtn.addEventListener('click', () => { nameInput.value = ''; nameInput.focus(); if (nameHint){ nameHint.textContent=''; nameHint.classList.remove('valid','invalid'); } });
            }

            const emailInput = document.getElementById('contactEmail');
            const emailHint = document.getElementById('emailHint');
            const emailCopyBtn = document.getElementById('emailCopyBtn');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput) {
                emailInput.addEventListener('input', () => {
                    const v = emailInput.value.trim();
                    if (!v) { emailHint.textContent=''; emailHint.classList.remove('valid','invalid'); return; }
                    if (emailRegex.test(v)) { emailHint.textContent='Looks valid.'; emailHint.classList.add('valid'); emailHint.classList.remove('invalid'); }
                    else { emailHint.textContent='Please enter a valid email address.'; emailHint.classList.add('invalid'); emailHint.classList.remove('valid'); }
                });
            }
            if (emailCopyBtn && emailInput) {
                emailCopyBtn.addEventListener('click', async () => {
                    try { await navigator.clipboard.writeText(emailInput.value); }
                    catch {}
                    const t = document.getElementById('contactToast');
                    if (t) {
                        t.textContent = 'Email copied to clipboard'; t.classList.add('show'); t.setAttribute('aria-hidden','false');
                        setTimeout(()=>{ t.classList.remove('show'); t.setAttribute('aria-hidden','true'); }, 1800);
                    }
                });
            }

            const subjectInput = document.getElementById('contactSubject');
            const subjectHint = document.getElementById('subjectHint');
            const subjectNormalizeBtn = document.getElementById('subjectNormalizeBtn');
            const normalizeSubject = (s) => s.replace(/\s+/g,' ').trim().replace(/(^\w|[.!?]\s+\w)/g, c => c.toUpperCase());
            if (subjectInput) {
                subjectInput.addEventListener('input', () => {
                    if (subjectInput.value.trim().length >= 3) { subjectHint.textContent='Great subject!'; subjectHint.classList.add('valid'); subjectHint.classList.remove('invalid'); }
                    else { subjectHint.textContent='Add a brief subject (min 3 chars).'; subjectHint.classList.add('invalid'); subjectHint.classList.remove('valid'); }
                });
            }
            if (subjectNormalizeBtn && subjectInput) {
                subjectNormalizeBtn.addEventListener('click', () => {
                    subjectInput.value = normalizeSubject(subjectInput.value);
                    subjectInput.dispatchEvent(new Event('input'));
                    subjectInput.focus();
                });
            }

            const messageInput = document.getElementById('contactMessage');
            const messageHint = document.getElementById('messageHint');
            const messageCount = document.getElementById('messageCount');
            const maxLen = 500;
            if (messageInput) {
                messageInput.setAttribute('maxlength', maxLen);
                const updateCount = () => {
                    const len = messageInput.value.length;
                    if (messageCount) messageCount.textContent = `${len} / ${maxLen}`;
                    if (len < 10) { messageHint.textContent='Tell me a bit more about your project.'; messageHint.classList.add('invalid'); messageHint.classList.remove('valid'); }
                    else { messageHint.textContent='Thanks! This helps me understand your needs.'; messageHint.classList.add('valid'); messageHint.classList.remove('invalid'); }
                };
                messageInput.addEventListener('input', updateCount);
                updateCount();
            }
        })();
