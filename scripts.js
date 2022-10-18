const setLinkActive = (id) => {
    const link = document.getElementById(id);
    if (!link) return;

    const activeLink = document.querySelector('.active');
    if (!activeLink) {
        link.classList.add('active');
        return;
    }
    
    activeLink.classList.remove('active');
    link.classList.add('active');
} 

const toggleBtnVisibility = (btnId) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    
    // Säädetään painikkeen näkyvyyttä.
    scrolledEnough(400) ? btn.style.display = 'block' : btn.style.display = 'none';
};

const scrolledEnough = (pixels = 20) => {
    // Tarkastellaan, että onko käyttäjä scrollanut tarpeeksi sivua alaspäin.
    return document.body.scrollTop > pixels || document.documentElement.scrollTop > pixels 
        ? true 
        : false;
};

const scrollToTop = () => {
    // Scrollataan takaisin sivun alkuun.
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
};

window.onscroll = () => toggleBtnVisibility('scrollBtn');
