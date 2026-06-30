// ==================== DATA PROJECT (DENGAN DISKON) ====================
const projectsData = [
    {
        id: 1,
        title: "Undangan Wedding Vinny & Yopie",
        category: "wedding",
        categoryDisplay: "Wedding",
        description: "Minimalis premium dengan RSVP online & peta interaktif.",
        image: "assets/wedding/wedding-1.png",
        demoLink: "https://wedding-vinnyyopie.vercel.app/",
        originalPrice: 299000,
        price: 130000,
        discount: 30
    },
    {
        id: 2,
        title: "Undangan Wedding Vivi & Albian",
        category: "wedding",
        categoryDisplay: "Wedding",
        description: "Tema klasik modern, animasi love particle, musik latar otomatis.",
        image: "assets/wedding/wedding-2.png",
        demoLink: "https://wedding-vivialbian.vercel.app/",
        originalPrice: 199000,
        price: 130000,
        discount: 20
    },
    {
        id: 3,
        title: "Undangan Wedding Fadlan & Hijri",
        category: "wedding",
        categoryDisplay: "Wedding",
        description: "Minimalis premium dengan RSVP online & peta interaktif.",
        image: "assets/wedding/wedding-3.png",
        demoLink: "https://wedding-f-h.vercel.app/",
        originalPrice: 299000,
        price: 100000,
        discount: 30
    },
    {
        id: 4,
        title: "Undangan Wedding Arif & Nurul",
        category: "wedding",
        categoryDisplay: "Wedding",
        description: "Minimalis premium dengan RSVP online & peta interaktif.",
        image: "assets/wedding/wedding-4.png",
        demoLink: "https://happy-wedding-a-n.vercel.app/",
        originalPrice: 299000,
        price: 100000,
        discount: 30
    },
    {
        id: 5,
        title: "Khitanan Dika",
        category: "khitanan",
        categoryDisplay: "Khitanan",
        description: "Konsep family gathering, dengan galeri dokumentasi dan jadwal acara.",
        image: "assets/khitanan/khitanan-1.png",
        demoLink: "https://khitanan-dika.vercel.app/",
        originalPrice: 199000,
        price: 100000,
        discount: 20
    },
    {
        id: 6,
        title: "Wisuda S1 Fadlan Fiqri Fauzan",
        category: "wisuda",
        categoryDisplay: "Wisuda",
        description: "Desain megah gold & white, fitur ucapan dari kerabat.",
        image: "assets/wisuda/wisuda-1.png",
        demoLink: "https://undangan-wisuda-fadlan.vercel.app/#home",
        originalPrice: 299000,
        price: 80000,
        discount: 30
    },
    {
        id: 7,
        title: "Ucapan Ultah ke-20 untuk Sicantik",
        category: "birthday",
        categoryDisplay: "Birthday",
        description: "Tema neon 2026, efek confetti, dan kado digital interaktif.",
        image: "assets/hbd/birthday-1.png",
        demoLink: "https://hbd-sayangku-hijri.vercel.app/",
        originalPrice: 499000,
        price: 95000,
        discount: 30
    },
    {
        id: 8,
        title: "Birthday ke-22",
        category: "birthday",
        categoryDisplay: "Birthday",
        description: "Desain seperti Game",
        image: "assets/hbd/birthday-2.png",
        demoLink: "https://ulang-tahun-syahfitri.vercel.app/",
        originalPrice: 549000,
        price: 90000,
        discount: 20
    },
    {
        id: 9,
        title: "Anniversary 5 Bulan",
        category: "anniversary",
        categoryDisplay: "Anniversary",
        description: "Perayaan cinta dengan timeline perjalanan, galeri foto romantis.",
        image: "assets/anniversary/anniv-1.png",
        demoLink: "https://fadlan2609-anniversary-lovee.vercel.app/",
        originalPrice: 649000,
        price: 80000,
        discount: 70
    },
    {
        id: 10,
        title: "Anniversary 6 Bulan",
        category: "anniversary",
        categoryDisplay: "Anniversary",
        description: "Perayaan cinta dengan timeline perjalanan, galeri foto romantis.",
        image: "assets/anniversary/anniv-2.png",
        demoLink: "https://anniversary-6bulan-fadlanhijri.vercel.app/",
        originalPrice: 649000,
        price: 100000,
        discount: 70
    },
];

// ==================== GLOBAL VARIABLES ====================
let currentFilter = 'all';

// ==================== HELPER FUNCTIONS ====================
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(angka).replace('Rp', 'Rp ');
}

function getCategoryIcon(category) {
    const icons = {
        wedding: 'fa-heart',
        khitanan: 'fa-mosque',
        wisuda: 'fa-graduation-cap',
        birthday: 'fa-birthday-cake',
        anniversary: 'fa-ring'
    };
    return icons[category] || 'fa-star';
}

// ==================== RENDER PROJECTS (DENGAN DISKON & FILTER) ====================
function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;

    let filteredData = projectsData;
    if (currentFilter !== 'all') {
        filteredData = projectsData.filter(project => project.category === currentFilter);
    }

    if (filteredData.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Belum ada project untuk kategori ini</p>
                <span>Segera hadir...</span>
            </div>
        `;
        return;
    }

    let html = '';
    filteredData.forEach(project => {
        const hasDiscount = project.discount && project.discount > 0;
        const finalPrice = formatRupiah(project.price);
        const originalPriceFormatted = hasDiscount ? formatRupiah(project.originalPrice) : '';
        const saveAmount = hasDiscount ? formatRupiah(project.originalPrice - project.price) : '';
        
        html += `
            <div class="project-card" data-category="${project.category}">
                ${hasDiscount ? `<div class="discount-badge">🔥 ${project.discount}% OFF</div>` : ''}
                <img src="${project.image}" alt="${project.title}" class="project-img" 
                     onerror="this.src='https://placehold.co/600x400/2a2a3a/ff6b4a?text=${encodeURIComponent(project.categoryDisplay)}'">
                <div class="project-info">
                    <span class="project-category">
                        <i class="fas ${getCategoryIcon(project.category)}"></i> ${project.categoryDisplay}
                    </span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    
                    <!-- HARGA DENGAN DISKON -->
                    <div class="project-price">
                        <div class="price-left">
                            <span class="price-label">⭐ SPECIAL PRICE</span>
                            ${hasDiscount ? `<span class="original-price">${originalPriceFormatted}</span>` : ''}
                        </div>
                        <div class="price-right">
                            <span class="price-value">${finalPrice}</span>
                            ${hasDiscount ? `<span class="save-badge">💎 Hemat ${saveAmount}</span>` : ''}
                        </div>
                    </div>
                    
                    <div class="project-buttons">
                        <a href="${project.demoLink}" target="_blank" class="btn-demo">
                            <i class="fas fa-eye"></i> Live Preview
                        </a>
                        <a href="https://wa.me/6285262378799?text=Halo%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(project.title)}%0A%0A📋%20Detail%20Project%3A%0A- ${encodeURIComponent(project.categoryDisplay)}%0A- ${encodeURIComponent(project.title)}%0A%0A💰%20Harga%20Promo%3A%20${encodeURIComponent(finalPrice)}%0A${hasDiscount ? `🔥 Diskon ${project.discount}%% OFF%0A💎 Hemat ${encodeURIComponent(saveAmount)}` : ''}%0A%0A🎯%20Mau%20pesan%20sekarang%20dong!" 
                           target="_blank" class="btn-wa-small">
                            <i class="fab fa-whatsapp"></i> Pesan Sekarang
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// ==================== FILTER BUTTONS ====================
function initFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    if (!buttons.length) return;
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderProjects();
            
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                setTimeout(() => {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
}

// ==================== SCROLL REVEAL ANIMATION ====================
function initScrollReveal() {
    const cards = document.querySelectorAll('.project-card, .why-card, .testimonial-card, .pricing-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    cards.forEach(card => observer.observe(card));
}

// ==================== SWIPER TESTIMONIAL ====================
function initSwiper() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }
}

// ==================== VIDEO PREVIEW MOCKUP HP ====================
function initVideoPreview() {
    const video = document.getElementById('previewVideo');
    if (video) {
        video.addEventListener('error', () => {
            const fallback = document.querySelector('.video-fallback');
            if (fallback) {
                fallback.style.display = 'flex';
                video.style.display = 'none';
            }
        });
        
        video.play().catch(() => {
            const fallback = document.querySelector('.video-fallback');
            if (fallback) {
                fallback.style.display = 'flex';
                video.style.display = 'none';
            }
        });
    } else {
        const fallback = document.querySelector('.video-fallback');
        if (fallback) {
            fallback.style.display = 'flex';
        }
    }
}

// ==================== CUSTOM CURSOR (NONAKTIF DI MOBILE) ====================
function initCustomCursor() {
    if (window.innerWidth < 900) return;
    
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        follower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });
    
    const hoverElements = document.querySelectorAll('a, button, .btn-primary, .btn-glow, .filter-btn, .btn-demo, .btn-wa-small');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = `scale(1.5)`;
            follower.style.transform = `scale(1.5)`;
            follower.style.borderColor = '#ffb347';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = `scale(1)`;
            follower.style.transform = `scale(1)`;
            follower.style.borderColor = 'rgba(255, 107, 74, 0.5)';
        });
    });
}

// ==================== NAVBAR SCROLL EFFECT ====================
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid rgba(255, 107, 74, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.85)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid rgba(255, 107, 74, 0.2)';
        }
    });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {

        toggle.addEventListener('click', () => {

            navLinks.classList.toggle('mobile-active');

        });

        // Close menu ONLY di mobile
        const links = navLinks.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', () => {

                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('mobile-active');
                }

            });
        });

        // Reset saat desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('mobile-active');
            }
        });
    }
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== ANIMASI ANGKA STATS ====================
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const text = stat.innerText;
        const target = parseInt(text);
        if (isNaN(target)) return;
        
        const hasPlus = text.includes('+');
        let current = 0;
        const increment = target / 50;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                stat.innerText = Math.floor(current) + (hasPlus ? '+' : '');
                requestAnimationFrame(updateNumber);
            } else {
                stat.innerText = target + (hasPlus ? '+' : '');
            }
        };
        
        updateNumber();
    });
}

// ==================== ADD GLOBAL STYLES (DISKON, HARGA, ETC) ====================
function addGlobalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* No Results */
        .no-results {
            text-align: center;
            padding: 60px 20px;
            background: rgba(25, 25, 40, 0.5);
            border-radius: 32px;
            border: 1px dashed rgba(255, 107, 74, 0.4);
            grid-column: 1 / -1;
        }
        .no-results i {
            font-size: 3rem;
            color: #ff6b4a;
            margin-bottom: 16px;
            opacity: 0.7;
        }
        .no-results p {
            font-size: 1.2rem;
            margin-bottom: 8px;
        }
        .no-results span {
            color: #ffb347;
            font-size: 0.9rem;
        }
        
        /* Discount Badge */
        .discount-badge {
            position: absolute;
            top: 16px;
            left: 16px;
            background: linear-gradient(135deg, #ff4444, #ff6b4a);
            color: white;
            padding: 6px 14px;
            border-radius: 30px;
            font-size: 0.75rem;
            font-weight: 800;
            z-index: 10;
            box-shadow: 0 4px 15px rgba(255, 68, 68, 0.4);
            animation: pulseDiscount 1.5s infinite;
        }
        
        @keyframes pulseDiscount {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        /* Project Price with Discount */
        .project-price {
            background: linear-gradient(135deg, rgba(255, 107, 74, 0.15), rgba(255, 179, 71, 0.1));
            border-radius: 16px;
            padding: 12px 16px;
            margin: 16px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid rgba(255, 107, 74, 0.3);
            transition: all 0.3s ease;
        }
        
        .project-card:hover .project-price {
            border-color: #ff6b4a;
            background: linear-gradient(135deg, rgba(255, 107, 74, 0.25), rgba(255, 179, 71, 0.15));
        }
        
        .price-left {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        
        .price-label {
            font-size: 0.65rem;
            color: #ffb347;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 500;
        }
        
        .original-price {
            font-size: 0.75rem;
            color: #888;
            text-decoration: line-through;
        }
        
        .price-right {
            text-align: right;
        }
        
        .price-value {
            font-size: 1.4rem;
            font-weight: 800;
            background: linear-gradient(135deg, #ff6b4a, #ffb347);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
        
        .save-badge {
            display: block;
            font-size: 0.65rem;
            color: #4caf50;
            font-weight: 600;
            margin-top: 4px;
        }
        
        .project-card {
            position: relative;
        }
        
        /* Scroll Reveal */
        .project-card, .why-card, .testimonial-card, .pricing-card {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .project-card.visible, .why-card.visible, .testimonial-card.visible, .pricing-card.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Responsive */
        @media (max-width: 600px) {
            .price-value {
                font-size: 1.1rem;
            }
            .project-price {
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
            }
            .price-right {
                text-align: left;
            }
            .discount-badge {
                top: 12px;
                left: 12px;
                padding: 4px 10px;
                font-size: 0.7rem;
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== PREVENT SCROLL BARUJUMP ====================
function preventScrollBarJump() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
}

// ==================== INITIALIZE ALL ====================
document.addEventListener('DOMContentLoaded', () => {
    addGlobalStyles();
    renderProjects();
    initFilterButtons();
    initScrollReveal();
    initSwiper();
    initVideoPreview();
    initCustomCursor();
    handleNavbarScroll();
    initMobileMenu();
    initSmoothScroll();
    animateNumbers();
    preventScrollBarJump();
});

// ==================== RE-INITIALIZE ON RESIZE ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initCustomCursor();
        preventScrollBarJump();
    }, 250);
});