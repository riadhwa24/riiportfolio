// DATA YA KAZI ZAKO (Badilisha na kazi zako halisi)
const projects = [
    {
        id: 1,
        title: "Poster ya bidha ya chakula ",
        category: "design",
        image: "images/golani.jpeg",
        description: "Nilitengeneza kampani desiliyovutia zaidi ya watu 500 na kuongeza mauzo kwenye kampuni",
        tags: ["Photoshop", "Poster Design"]
    },
    {
        id: 2,
        title: "Website ya Duka la Nguo",
        category: "web",
        image: "images/nguo.PNG",
        description: "Website inayouza nguo online. Imepata mauzo 200+ kwa mwezi.",
        tags: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
        id: 3,
        title: "Kampeni ya Instagram",
        category: "social",
        image: "images/instagram.PNG",
        description: "Niliongeza wafuasi kutoka 100 hadi 1000 kwa mwezi mmoja.",
        tags: ["Instagram", "Content Creation", "Analytics"]
    },
    {
        id: 4,
        title: "Logo ya Kampuni ya Teknolojia",
        category: "design",
        image: "images/fundiapp.jpeg",
        description: "Niliunda logo ya kisasa iliyowakilisha maadili ya kampuni.",
        tags: ["Photoshop", "Logo Design"]
    },
    {
        id: 5,
        title: "Website ya Blogu",
        category: "web",
        image: "images/web.PNG",
        description: "Blogu ya kisasa yenye mwonekano mzuri kwenye simu na kompyuta.",
        tags: ["HTML", "CSS", "Bootstrap"]
    },
    {
        id: 6,
        title: "Facebook Ads Campaign",
        category: "social",
        image: "images/facebook.PNG",
        description: "Niliendesha matangazo yaliyowaletea wateja wapya 50 kwa wiki.",
        tags: ["Facebook", "Ads Manager", "Analytics"]
    }
];

// ONYESHA KAZI KWENYE UKURASA
function displayProjects(projectsToShow) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    projectsToShow.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// CHUJO (FILTER) KAZI KWA AJILI YA KATEGORIA
function filterProjects(category) {
    if (category === 'all') {
        displayProjects(projects);
    } else {
        const filtered = projects.filter(project => project.category === category);
        displayProjects(filtered);
    }
}

// TYPING ANIMATION
function typeEffect() {
    const text = "Designer   | Developer    | Social Media Expert";
    const typingElement = document.querySelector('.typing-text');
    let i = 0;
    
    function type() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                typingElement.innerHTML = '';
                i = 0;
                type();
            }, 3000);
        }
    }
    
    type();
}

// ACTIVE LINK KWA NAVIGATION
function setActiveLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Badala ya code ya zamani ya contactForm, weka hii:
function handleContactForm() {
    const form = document.getElementById('contactForm');
    
    // FormSubmit inahitaji form itume kwa kawaida (si AJAX)
    // Tunaacha tu iende kwa kawaida
    form.addEventListener('submit', function(e) {
        // Usifanye preventDefault!
        // Tuonyeshe loading kama unataka
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = 'Inatuma...';
        btn.disabled = true;
    });
}
// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    // Onyesha projects zote mwanzoni
    displayProjects(projects);
    
    // Anzisha typing animation
    typeEffect();
    
    // Set active link
    setActiveLink();
    
    // Contact form
    handleContactForm();
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter projects
            const category = button.getAttribute('data-filter');
            filterProjects(category);
        });
    });
});