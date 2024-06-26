function contact() {
    const contactButton = document.getElementById('contact');
    const titleDiv = document.getElementById('content');
    contactButton.addEventListener('click', () => {
        titleDiv.innerHTML = '';
        const div = document.createElement('div');
        div.classList.add('contactpage');
        
        const title = document.createElement('h1');
        title.classList.add('contacttitle');
        title.textContent = 'CONTACT US ON';
        
        const description = document.createElement('p');
        description.classList.add('contactdiscription');
        description.textContent = '001 775 254'
        div.appendChild(title);
        div.appendChild(description);
    
        titleDiv.appendChild(div);
    })    
}

contact();