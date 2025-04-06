// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    // Function to handle scroll effects
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = 'none';
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on page load to set initial state
    handleScroll();
    
    // Add active class to nav items when clicked
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Handle search form submission
    const searchForm = document.querySelector('.search-container form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="search"]');
            
            if (searchInput.value.trim() !== '') {
                // Replace with actual search functionality
                console.log('Searching for:', searchInput.value);
                
                // You would typically redirect to search results page or perform AJAX search here
                // window.location.href = '/search?q=' + encodeURIComponent(searchInput.value);
            }
        });
    }
});
// Wait for DOM to be
//footer js is here
document.addEventListener('DOMContentLoaded', function() {
    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Subscribe button functionality
    const subscribeBtn = document.querySelector('.btn-subscribe');
    const emailInput = document.querySelector('.form-control');

    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', function() {
            const email = emailInput.value.trim();
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Here you would typically send the email to your server
            // For demonstration purposes, we'll just show a success message
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        });
    }

    // Add hover effects for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Responsive adjustments
    function handleResponsive() {
        const width = window.innerWidth;
        const footerBottom = document.querySelector('.footer-bottom');
        
        if (width < 768) {
            // Mobile view adjustments
            if (footerBottom) {
                const columns = footerBottom.querySelectorAll('.col-md-4');
                columns.forEach(col => {
                    col.classList.add('text-center');
                    col.classList.remove('text-md-center', 'text-md-end');
                });
            }
        } else {
            // Desktop view
            if (footerBottom) {
                const columns = footerBottom.querySelectorAll('.col-md-4');
                columns[0].classList.remove('text-center');
                columns[1].classList.add('text-md-center');
                columns[2].classList.add('text-md-end');
            }
        }
    }

    // Call once on load
    handleResponsive();
    
    // Call on window resize
    window.addEventListener('resize', handleResponsive);
});


document.addEventListener('DOMContentLoaded', function() {
    // Form validation functionality
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const address = document.getElementById('address').value.trim();
            
            // Simple validation
            if (!firstName) {
                showError('Please enter your first name');
                return;
            }
            
            if (!lastName) {
                showError('Please enter your last name');
                return;
            }
            
            if (!email) {
                showError('Please enter your email');
                return;
            }
            
            if (!validateEmail(email)) {
                showError('Please enter a valid email address');
                return;
            }
            
            // If all validations pass, show success message
            showSuccess('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Input focus effects
    const inputs = document.querySelectorAll('.custom-input');
    
    inputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
        });
        
        // Remove focus effect
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('input-focused');
        });
    });
    
    // Feature items hover effect
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Helper functions
    function showError(message) {
        alert(message);
    }
    
    function showSuccess(message) {
        alert(message);
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Responsive adjustments
    function handleResponsive() {
        const width = window.innerWidth;
        
        if (width < 768) {
            // Mobile view - adjust feature items spacing
            featureItems.forEach(item => {
                item.style.marginBottom = '15px';
            });
        } else {
            // Desktop view
            featureItems.forEach(item => {
                item.style.marginBottom = '25px';
            });
        }
    }
    
    // Call once on load
    handleResponsive();
    
    // Call on window resize
    window.addEventListener('resize', handleResponsive);
});


document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const tabItems = document.querySelectorAll('.tab-item');
    
    let currentSlideIndex = 0;
    const slidesCount = slides.length;
    
    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Deactivate all tab items
        tabItems.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Show the selected slide
        slides[index].classList.add('active');
        
        // Activate the corresponding tab
        tabItems[index].classList.add('active');
        
        // Update current index
        currentSlideIndex = index;
    }
    
    // Previous slide button
    prevButton.addEventListener('click', function() {
        let newIndex = currentSlideIndex - 1;
        if (newIndex < 0) {
            newIndex = slidesCount - 1;
        }
        showSlide(newIndex);
    });
    
    // Next slide button
    nextButton.addEventListener('click', function() {
        let newIndex = currentSlideIndex + 1;
        if (newIndex >= slidesCount) {
            newIndex = 0;
        }
        showSlide(newIndex);
    });
    
    // Tab item click event
    tabItems.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto slide functionality
    let autoSlideInterval = setInterval(function() {
        let newIndex = currentSlideIndex + 1;
        if (newIndex >= slidesCount) {
            newIndex = 0;
        }
        showSlide(newIndex);
    }, 5000);
    
    // Pause auto slide on mouse hover
    document.querySelector('.carousel-container').addEventListener('mouseenter', function() {
        clearInterval(autoSlideInterval);
    });
    
    // Resume auto slide on mouse leave
    document.querySelector('.carousel-container').addEventListener('mouseleave', function() {
        autoSlideInterval = setInterval(function() {
            let newIndex = currentSlideIndex + 1;
            if (newIndex >= slidesCount) {
                newIndex = 0;
            }
            showSlide(newIndex);
        }, 5000);
    });
    
    // Initialize first slide
    showSlide(0);
});


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the Bootstrap carousel
    var logoCarousel = new bootstrap.Carousel(document.getElementById('logoCarousel'), {
        interval: 3000,  // Slide change interval in milliseconds
        wrap: true,      // Allow carousel to cycle continuously
        pause: 'hover',  // Pause the carousel on mouse hover
        keyboard: true   // Allow keyboard navigation
    });
    
    // Add smooth animation for logo hover effects
    const logoItems = document.querySelectorAll('.logo-item');
    
    logoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.logo-circle').style.transition = 'all 0.3s ease';
            this.querySelector('.logo-circle i').style.transition = 'all 0.3s ease';
            this.querySelector('.logo-circle i').style.color = '#ffffff';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.logo-circle i').style.color = '#cccccc';
        });
    });
    
    // Function to handle responsive layouts
    function handleResponsiveLayout() {
        const width = window.innerWidth;
        const logoRow = document.querySelectorAll('.logo-row');
        
        if (width < 576) {
            // Very small screens - show fewer logos per slide
            reorganizeLogos(2);
        } else if (width >= 576 && width < 992) {
            // Medium screens
            reorganizeLogos(3);
        } else {
            // Large screens - show all logos
            reorganizeLogos(5);
        }
    }
    
    // Helper function to reorganize logos based on screen size
    function reorganizeLogos(perSlide) {
        // This function could be expanded to dynamically reorganize 
        // the logos when needed for very custom implementations
        // The current CSS handles most of the responsive behavior
    }
    
    // Check layout on page load and resize
    handleResponsiveLayout();
    window.addEventListener('resize', handleResponsiveLayout);
    
    // Add smooth scrolling to the carousel
    const carousel = document.getElementById('logoCarousel');
    carousel.addEventListener('slide.bs.carousel', function(event) {
        const direction = event.direction;
        const items = document.querySelectorAll('.carousel-item');
        
        items.forEach(item => {
            item.style.transition = 'transform 0.6s ease-in-out';
        });
    });
    
    // Optional: Add auto-play toggle functionality
    let isPlaying = true;
    
    function toggleCarouselPlay() {
        if (isPlaying) {
            logoCarousel.pause();
            isPlaying = false;
        } else {
            logoCarousel.cycle();
            isPlaying = true;
        }
    }
    
    // You can add a button to the HTML and attach this toggle function if needed
    // Example: document.getElementById('togglePlayButton').addEventListener('click', toggleCarouselPlay);
});
 


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle hover effects for logo items
    const logoItems = document.querySelectorAll('.logo-item');
    
    logoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const logoCircle = this.querySelector('.logo-circle');
            logoCircle.style.transform = 'scale(1.05)';
            logoCircle.style.backgroundColor = '#222';
        });
        
        item.addEventListener('mouseleave', function() {
            const logoCircle = this.querySelector('.logo-circle');
            logoCircle.style.transform = 'scale(1)';
            logoCircle.style.backgroundColor = '#111';
        });
    });
});



// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for background image on mouse move
    document.addEventListener('mousemove', function(e) {
        const image = document.querySelector('.xyz5 img');
        const xPos = (e.clientX / window.innerWidth) * 15;
        const yPos = (e.clientY / window.innerHeight) * 15;
        
        image.style.transform = `translate(${-xPos}px, ${-yPos}px) scale(1.1)`;
    });
    
    // Subtle animation for the circle in the graph
    const circle = document.querySelector('.gh8 circle');
    setInterval(() => {
        // Animate the circle glow effect
        circle.setAttribute('r', 4 + Math.sin(Date.now() / 500) * 0.5);
    }, 50);
    
    // Add slight hover effect to the glassmorphic card
    const card = document.querySelector('.jk9');
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    });
    
    // Add smooth transition for all animated elements
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        .xyz5 img, .jk9, .gh8 circle {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(styleSheet);
});


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap carousel
    const carousel = new bootstrap.Carousel(document.getElementById('cr1_carousel'), {
        interval: 5000, // Change slides every 5 seconds
        wrap: true,     // Cycle continuously
        keyboard: true  // Allow keyboard navigation
    });
    
    // Custom controls for the carousel
    const prevButton = document.querySelector('.cr6_prev');
    const nextButton = document.querySelector('.cr7_next');
    
    prevButton.addEventListener('click', () => {
        carousel.prev();
    });
    
    nextButton.addEventListener('click', () => {
        carousel.next();
    });
    
    // Optional: Add animation effects when changing slides
    const carouselElement = document.getElementById('cr1_carousel');
    
    carouselElement.addEventListener('slide.bs.carousel', (event) => {
        const activeItem = event.relatedTarget;
        activeItem.classList.add('animate__animated', 'animate__fadeIn');
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth hover animation for cards
    const cards = document.querySelectorAll('.gl4_card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.4s ease';
        });
    });
    
    // Optional: Add scroll reveal animation
    const revealElements = document.querySelectorAll('.gl4_card');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize card styles for scroll animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check scroll position on load
    checkScroll();
    
    // Check scroll position on scroll
    window.addEventListener('scroll', checkScroll);
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior for Learn More button
    const learnMoreBtn = document.querySelector('.a6_learnBtn');
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            // Example scroll to another section
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Video button click event
    const videoBtn = document.querySelector('.a7_videoBtn');
    
    if (videoBtn) {
        videoBtn.addEventListener('click', function() {
            // Here you could implement a modal video player
            console.log('Video button clicked - would open a video modal');
        });
    }
    
    // Add hover effects for tag buttons
    const tagButtons = document.querySelectorAll('.b6_tag');
    
    tagButtons.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Add click functionality
        tag.addEventListener('click', function() {
            // Filter or navigate based on tag value
            console.log(`Tag clicked: ${this.textContent}`);
            
            // Remove active class from all tags
            tagButtons.forEach(t => t.classList.remove('active-tag'));
            
            // Add active class to clicked tag
            this.classList.add('active-tag');
        });
    });
    
    // Animate stats numbers on scroll
    const animateStats = () => {
        const statNumbers = document.querySelectorAll('.b3_statNumber');
        
        statNumbers.forEach(stat => {
            const originalText = stat.textContent;
            const target = parseInt(originalText);
            let current = 0;
            const increment = target / 40; // Adjust speed of animation
            
            // Reset content to 0
            stat.textContent = '0%';
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.ceil(current) + '%';
                    setTimeout(updateCounter, 30);
                } else {
                    stat.textContent = originalText;
                }
            };
            
            updateCounter();
        });
    };
    
    // Add interactive behavior to the security card
    const securityCard = document.querySelector('.c7_securityCard');
    
    if (securityCard) {
        securityCard.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
        });
        
        securityCard.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
        });
    }
    
    // Simulate scrolling behavior
    const scrollThumb = document.querySelector('.d4_scrollThumb');
    const graphContainer = document.querySelector('.c2_graphContainer');
    
    if (scrollThumb && graphContainer) {
        let isDragging = false;
        let startY;
        let startTop;
        
        scrollThumb.addEventListener('mousedown', (e) => {
            isDragging = true;
            startY = e.clientY;
            startTop = parseInt(getComputedStyle(scrollThumb).top);
            document.body.style.userSelect = 'none';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaY = e.clientY - startY;
            const scrollbarHeight = scrollThumb.parentElement.offsetHeight;
            const thumbHeight = scrollThumb.offsetHeight;
            const maxTop = scrollbarHeight - thumbHeight;
            
            let newTop = startTop + deltaY;
            newTop = Math.max(0, Math.min(newTop, maxTop));
            
            scrollThumb.style.top = newTop + 'px';
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.body.style.userSelect = '';
        });
    }
    
    // Animate chart line on load
    const animateChartLine = () => {
        const path = document.querySelector('.c6_chartLine path');
        const circle = document.querySelector('.c6_chartLine circle');
        
        if (path && circle) {
            // Get path length
            const pathLength = path.getTotalLength();
            
            // Set initial states
            path.style.strokeDasharray = pathLength;
            path.style.strokeDashoffset = pathLength;
            circle.style.opacity = '0';
            
            // Animate the path
            path.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
            path.style.strokeDashoffset = '0';
            
            // Show the circle after the path animation
            setTimeout(() => {
                circle.style.transition = 'opacity 0.5s ease-in-out';
                circle.style.opacity = '1';
            }, 1400);
        }
    };
    
    // Run animations
    setTimeout(() => {
        animateStats();
        animateChartLine();
    }, 500);
});
