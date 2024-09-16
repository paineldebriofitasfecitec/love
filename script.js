let currentPage = 1;  
const totalPages = 6; 

document.getElementById('nextPage').addEventListener('click', function() {
    const pages = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'].map(id => document.getElementById(id));
    

    pages.forEach(page => page.style.opacity = '0');

   
    const nextPage = (currentPage % totalPages) + 1;
    const currentPageElement = document.getElementById('page' + currentPage);
    const nextPageElement = document.getElementById('page' + nextPage);

    
    currentPageElement.style.transform = 'rotateY(-180deg)';
    nextPageElement.style.transform = 'rotateY(0deg)';
    nextPageElement.style.opacity = '1';
    
    currentPage = nextPage;
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bg-music');
    var playButton = document.getElementById('startMusic');

    playButton.addEventListener('click', function() {
        audio.play().then(() => {
            playButton.style.display = 'none'; 
        }).catch(error => {
            console.error('Erro ao tentar tocar a música:', error);
        });
    });
});
