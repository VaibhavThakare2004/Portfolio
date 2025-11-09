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