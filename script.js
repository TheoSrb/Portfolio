const navCenterButtons = document.querySelectorAll('.nav-center button');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const projects = document.querySelectorAll('.project-0, .project-1, .project-2');
const themeMenuClone = document.querySelector('.theme-container .theme-menu').cloneNode(true);
const hamburgerButton = document.querySelector('.hamburger-button');
const themeContainer = document.querySelector('.theme-container');
const themeButton = document.querySelector('.theme-button');
const themeOptions = document.querySelectorAll('.theme-option');

const themes = {
    "Carbone": {"--background-color":"#0a0a0a","--nav-color":"#1a1a1a","--text-color":"#e8e8e8","--hiden-text-color":"#b0b0b0","--border-color":"#404040","--light-border-color":"#707070","--purple-dark":"35, 35, 35","--purple-medium":"20, 20, 20","--purple-base":"10, 10, 10","--purple-border":"64, 64, 64","--purple-card":"45, 45, 45","--purple-hover":"80, 80, 80","--purple-shadow":"25, 25, 25"},
    "Ruby": {"--background-color":"#2b0000","--nav-color":"#500000","--text-color":"#ffd6d6","--hiden-text-color":"#ff9999","--border-color":"#ff1a1a","--light-border-color":"#ff6666","--purple-dark":"70, 0, 0","--purple-medium":"90, 0, 0","--purple-base":"43, 0, 0","--purple-border":"255, 26, 26","--purple-card":"204, 0, 0","--purple-hover":"255, 51, 51","--purple-shadow":"100, 0, 0"},
    "Émeraude":{"--background-color":"#000b04","--nav-color":"#001806","--text-color":"#e9ffef","--hiden-text-color":"#608c70","--border-color":"#00ff66","--light-border-color":"#226655","--purple-dark":"0,50,20","--purple-medium":"0,70,30","--purple-base":"0,10,5","--purple-border":"0,153,68","--purple-card":"0,80,35","--purple-hover":"0,153,85","--purple-shadow":"0,25,10"},
    "Fantôme": {"--background-color":"#f5f5f7","--nav-color":"#e8e8ea","--text-color":"#1a1a1a","--hiden-text-color":"#666666","--border-color":"#c0c0c5","--light-border-color":"#8a8a8f","--purple-dark":"220, 220, 225","--purple-medium":"235, 235, 240","--purple-base":"245, 245, 247","--purple-border":"180, 180, 190","--purple-card":"210, 210, 220","--purple-hover":"170, 170, 185","--purple-shadow":"200, 200, 210"},
    "Guimauve": {"--background-color":"#ffceee","--nav-color":"#ffb2ff","--text-color":"#603366","--hiden-text-color":"#8f4a8f","--border-color":"#e66ecf","--light-border-color":"#c04bb0","--purple-dark":"200, 80, 200","--purple-medium":"230, 120, 230","--purple-base":"245, 160, 245","--purple-border":"210, 90, 210","--purple-card":"220, 130, 220","--purple-hover":"190, 100, 190","--purple-shadow":"180, 80, 180"},
    "Crépuscule": {"--background-color":"#0a0015","--nav-color":"#1c002d","--text-color":"#e9ddf4","--hiden-text-color":"#b8a5c9","--border-color":"#4a2b5f","--light-border-color":"#7d5a94","--purple-dark":"42, 18, 66","--purple-medium":"26, 10, 51","--purple-base":"10, 0, 21","--purple-border":"77, 42, 95","--purple-card":"57, 29, 77","--purple-hover":"93, 48, 122","--purple-shadow":"29, 10, 49"},
    "Incandescence": {"--background-color":"#330900","--nav-color":"#661a00","--text-color":"#ffedc9","--hiden-text-color":"#ffcc80","--border-color":"#ff5500","--light-border-color":"#ff8c33","--purple-dark":"100, 20, 0","--purple-medium":"150, 35, 10","--purple-base":"220, 75, 20","--purple-border":"255, 85, 0","--purple-card":"255, 120, 50","--purple-hover":"255, 160, 80","--purple-shadow":"120, 40, 0"},
    "Citronnade": {"--background-color":"#fffbe0","--nav-color":"#fff5b3","--text-color":"#664400","--hiden-text-color":"#aa8844","--border-color":"#ffdd55","--light-border-color":"#ffb029","--purple-dark":"255, 220, 0","--purple-medium":"255, 235, 50","--purple-base":"255, 250, 200","--purple-border":"255, 230, 100","--purple-card":"255, 220, 94","--purple-hover":"255, 255, 150","--purple-shadow":"200, 180, 0"},
    "Acidulé": {"--background-color":"#f0ffea","--nav-color":"#bbe2ab","--text-color":"#3a3f1f","--hiden-text-color":"#546129","--border-color":"#99cc33","--light-border-color":"#d0fd24","--purple-dark":"80, 100, 30","--purple-medium":"120, 180, 50","--purple-base":"200, 250, 120","--purple-border":"140, 200, 60","--purple-card":"160, 220, 80","--purple-hover":"190, 255, 100","--purple-shadow":"100, 140, 20"},
    "Électrique": {"--background-color":"#01010a","--nav-color":"#05051a","--text-color":"#f5f5ff","--hiden-text-color":"#9fa8ff","--border-color":"#3d3eff","--light-border-color":"#6c6dff","--purple-dark":"10, 8, 40","--purple-medium":"20, 15, 70","--purple-base":"1, 1, 10","--purple-border":"70, 60, 160","--purple-card":"25, 20, 90","--purple-hover":"100, 90, 210","--purple-shadow":"8, 6, 30"},
    "Lunaire": {"--background-color":"#020012","--nav-color":"#0a0024","--text-color":"#ffffff","--hiden-text-color":"#cfc9ff","--border-color":"#b5a4ff","--light-border-color":"#ebe6ff","--purple-dark":"18, 0, 60","--purple-medium":"25, 0, 80","--purple-base":"2, 0, 18","--purple-border":"94, 59, 255","--purple-card":"35, 0, 100","--purple-hover":"120, 90, 255","--purple-shadow":"12, 0, 35"},
};

hamburgerMenu.innerHTML = '';

navCenterButtons.forEach(btn => {
    const clone = btn.cloneNode(true);
    hamburgerMenu.appendChild(clone);
});

hamburgerMenu.appendChild(themeMenuClone);

projects.forEach(project => {
    project.addEventListener('click', () => {
        project.classList.toggle('flipped');
    });
});

hamburgerButton.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburgerMenu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && e.target !== hamburgerButton) {
        hamburgerMenu.classList.remove('open');
    }
});

function downloadCV() {
        const link = document.createElement('a');
        link.href = 'src/CV-Sarbach-Fischer-Théo.pdf';
        link.download = 'CV-Theo-Sarbach-Fischer.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
}

function copyEmail() {
    const email = "theo.sarbachfischer@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const msg = document.getElementById("copyMessage");
        msg.classList.add("show");

        setTimeout(() => {
        msg.classList.remove("show");
        }, 2000);
    });
}

function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    for (let variable in theme) {
        root.style.setProperty(variable, theme[variable]);
    }

    localStorage.setItem('theme', themeName);
}

themeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    themeContainer.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!themeContainer.contains(e.target)) {
        themeContainer.classList.remove('open');
    }
});

themeOptions.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const themeName = btn.textContent.trim();
        applyTheme(themeName);
        themeContainer.classList.remove('open');
    });
});

const animatedElements = document.querySelectorAll('.buttons-animate-when-see, .social-animate-when-see, .projects-animate-when-see, .skills-animate-when-see, .title-animate-when-see, .picture-animate-when-see, .infos-animate-when-see, .quotation-animate-when-see, .personnal-animate-when-see');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

animatedElements.forEach(el => observer.observe(el));

const savedTheme = localStorage.getItem('theme');
if (savedTheme && themes[savedTheme]) applyTheme(savedTheme);