// JavaScript Document

/*

TemplateMo 597 Neural Glass

https://templatemo.com/tm-597-neural-glass

*/

// ===== THEME SWITCHER =====
document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolioTheme') || 'original';
    if (savedTheme !== 'original') {
        body.setAttribute('data-theme', savedTheme);
    }
    
    // Update active button
    themeButtons.forEach(btn => {
        if (btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        }
    });
    
    // Theme switch functionality
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

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
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
        // Wait for GSAP and Lenis to load
        window.addEventListener('load', () => {
            if (typeof gsap === 'undefined' || typeof Lenis === 'undefined') {
                console.warn('GSAP or Lenis not loaded');
                return;
            }

            // Initialize Lenis Smooth Scroll
            const lenis = new Lenis({
                smooth: true,
                multiplier: 1,
                easing: (t) => t * (2 - t),
                smoothTouch: false,
                lerp: 0.05,
                duration: 1.2
            });

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

            // Main Text Color Animation (without char splitting to avoid breaking HTML)
            const mainTextElement = document.querySelector('.text-animation__text');
            if (mainTextElement) {
                // Animate the whole text color change
                gsap.fromTo(
                    mainTextElement,
                    { color: "#ffffff" },
                    {
                        color: "#e0a3ff",
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
        });

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
                    "Donation integration with secure payment gateway",
                    "Volunteer registration and management system",
                    "Dynamic project showcase with real-time updates",
                    "Blog section for sharing stories and updates",
                    "Contact form with email notification system"
                ],
                technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
                role: "Full Stack Developer - Designed and developed the complete website from concept to deployment. Collaborated with the NGO team to understand their needs and translated them into functional features.",
                challenges: "The main challenge was creating an intuitive donation system that builds trust while keeping the user experience simple. I implemented SSL certificates, secure payment gateways, and transparent tracking to ensure donor confidence.",
                liveLink: "#",
                githubLink: "#"
            },
            project2: {
                title: "Analytics Dashboard",
                tags: ["Data Visualization", "React", "Real-time"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                overview: "Built a powerful analytics dashboard that provides real-time data visualization and insights. The platform helps businesses track key metrics, generate custom reports, and make data-driven decisions with interactive charts and graphs.",
                features: [
                    "Real-time data synchronization and updates",
                    "Interactive charts with drill-down capabilities",
                    "Custom report builder with export functionality",
                    "User role management and permissions",
                    "Dark/Light theme toggle",
                    "Mobile-responsive data tables"
                ],
                technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB", "Socket.io"],
                role: "Frontend Developer - Led the development of the user interface and data visualization components. Implemented responsive design patterns and optimized performance for large datasets.",
                challenges: "Handling real-time data updates while maintaining smooth performance was challenging. Solved this by implementing efficient state management with Redux and using WebSockets for live data streaming.",
                liveLink: "#",
                githubLink: "#"
            },
            project3: {
                title: "Design System",
                tags: ["UI/UX", "Component Library", "Accessibility"],
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
                overview: "Created a comprehensive design system and component library to ensure consistency across multiple projects. The system includes reusable UI components, design tokens, and detailed documentation for developers and designers.",
                features: [
                    "50+ reusable UI components",
                    "WCAG 2.1 AA accessibility compliance",
                    "Responsive design patterns",
                    "Dark mode support",
                    "Interactive Storybook documentation",
                    "Design tokens for colors, typography, and spacing"
                ],
                technologies: ["React", "TypeScript", "Styled Components", "Storybook", "Figma"],
                role: "UI Developer & Designer - Designed the complete component library, created documentation, and ensured accessibility standards were met across all components.",
                challenges: "Ensuring accessibility while maintaining design flexibility was key. Implemented comprehensive keyboard navigation, screen reader support, and color contrast checks for all components.",
                liveLink: "#",
                githubLink: "#"
            },
            project4: {
                title: "Social Media App",
                tags: ["Full Stack", "Real-time", "Social Network"],
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
                overview: "Developed a modern social media platform with real-time messaging, post sharing, and user interactions. The app includes features like likes, comments, follows, and a personalized feed algorithm.",
                features: [
                    "Real-time messaging and notifications",
                    "Photo/video upload and sharing",
                    "Like, comment, and share functionality",
                    "User profiles and customization",
                    "Follow/unfollow system",
                    "Personalized feed algorithm"
                ],
                technologies: ["React Native", "Node.js", "Socket.io", "PostgreSQL", "AWS S3", "Redis"],
                role: "Full Stack Developer - Built both frontend and backend systems, implemented real-time features, and deployed the application to production.",
                challenges: "Scaling real-time features for multiple concurrent users required careful architecture planning. Implemented Redis for caching and message queuing to handle high traffic efficiently.",
                liveLink: "#",
                githubLink: "#"
            },
            project5: {
                title: "Portfolio CMS",
                tags: ["CMS", "Headless", "API"],
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
                overview: "Built a headless CMS specifically designed for creatives to showcase their work. The platform offers customizable templates, easy content management, and seamless integration with various frontend frameworks.",
                features: [
                    "Drag-and-drop content builder",
                    "Customizable portfolio templates",
                    "RESTful API for content access",
                    "Media library with optimization",
                    "SEO optimization tools",
                    "Analytics and visitor tracking"
                ],
                technologies: ["Next.js", "Strapi", "GraphQL", "PostgreSQL", "Cloudinary", "Vercel"],
                role: "Full Stack Developer - Architected the CMS structure, developed the admin panel, and created API endpoints for content delivery.",
                challenges: "Creating a flexible yet user-friendly content management system required balancing customization options with ease of use. Implemented a modular architecture that allows users to build unique layouts without technical knowledge.",
                liveLink: "#",
                githubLink: "#"
            }
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
                    document.getElementById('modalLiveLink').href = project.liveLink;
                    document.getElementById('modalGithubLink').href = project.githubLink;
                    
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
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
