const THEMES = {
    dark: {
        '--navigation-bar-background-color': '#151b2d',
        '--navigation-bar-text-color': '#dddddd',
        '--content-banner-color': '#101423',
        '--content-text-color': '#eeeeee',
        '--foot-content-banner-color': '#eeeeee',
        '--object-background-color': '#232c47',
        '--object-background-color-rgb': '35, 44, 71',
        '--hiden-text-color': '#7984a5',
        '--image-alt-bg': '238, 238, 238'
    },
    light: {
        '--navigation-bar-background-color': '#e8ecf5',
        '--navigation-bar-text-color': '#2c3e50',
        '--content-banner-color': '#f5f7fa',
        '--content-text-color': '#2c3e50',
        '--foot-content-banner-color': '#2c3e50',
        '--object-background-color': '#d4dbe8',
        '--object-background-color-rgb': '212, 219, 232',
        '--hiden-text-color': '#5a6c8f',
        '--image-alt-bg': '44, 62, 80'
    }
};

let currentTheme = localStorage.getItem('portfolioTheme') || 'dark';

function applyTheme(themeName) {
    const theme = THEMES[themeName];
    if (!theme) return;
    let styleElement = document.getElementById('dynamic-theme-style');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-theme-style';
        document.head.appendChild(styleElement);
    }
    let cssText = '* {\n';
    for (const [property, value] of Object.entries(theme)) {
        cssText += `    ${property}: ${value};\n`;
    }
    cssText += '}';
    styleElement.textContent = cssText;
    currentTheme = themeName;
    localStorage.setItem('portfolioTheme', themeName);
    updateButtonText();
}

function updateButtonText() {
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        if (currentTheme === 'dark') {
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Mode clair';
        } else {
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Mode sombre';
        }
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', function() {
    applyTheme(currentTheme);
    let themeToggleBtn = document.getElementById('themeToggle');
    if (!themeToggleBtn) {
        const sidebarUl = document.querySelector('#sidebar ul');
        if (sidebarUl) {
            const li = document.createElement('li');
            li.className = 'theme-toggle-container';
            themeToggleBtn = document.createElement('button');
            themeToggleBtn.id = 'themeToggle';
            themeToggleBtn.className = 'theme-toggle-btn';
            li.appendChild(themeToggleBtn);
            sidebarUl.appendChild(li);
        }
    }
    updateButtonText();
    themeToggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        toggleTheme();
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});
