function search() {
    const query = document.querySelector('.search').value;
    if (query.trim() !== '') {
        alert(`Searching for: ${query}`);
        // Add actual search functionality here
    } else {
        alert('Please enter a search term');
    }
}

function subscribe() {
    const email = document.querySelector('.news').value;
    if (email.trim() !== '' && /\S+@\S+\.\S+/.test(email)) {
        alert('Thank you for subscribing!');
        document.querySelector('.news').value = '';
    } else {
        alert('Please enter a valid email address');
    }
}

function clickit() {
    alert('Action successful!');
}

function toggleMenu() {
    const nav = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);