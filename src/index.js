window.addEventListener('load', () => {
    const rounded_circle = [{class: document.querySelector('.rounded-circle-red')}, {class: document.querySelector('.rounded-circle-blue')}];
    const img = document.querySelector('#img_pp');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        img.style.right = (x/10)*0.5 + 'px';
        img.style.top = (y/10)*0.5 + 'px';
        rounded_circle.forEach((circle) => {
            if (circle.class == document.querySelector('.rounded-circle-blue')) {
                circle.class.style.right = (x/10)*0.6 + 'px';
                circle.class.style.top = (y/10)*0.6 + 'px';
            }
            else {
                circle.class.style.right = (x/10)*0.7 + 'px';
                circle.class.style.top = (y/10)*0.7 + 'px';
            }
        });
    })

    document.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll > 400) {
            document.querySelector('.about-text').classList.add('about-text-animation');
        }
        if (scroll > 1100) {
            document.querySelector('.skill-content').classList.add('skill-content-animation');
        }
        if (scroll > 1800) {
            document.querySelector('.project-content').classList.add('project-content-animation');
        }
        if (scroll > 4000) {
            document.querySelector('.contact-content').classList.add('contact-content-animation');
        }

    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
