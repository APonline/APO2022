let activePage = -1;
let activeDirection = 'left';
const colors = ['#0f445d','#2c5354','#1e8183','#2eced1','#058689'];

const nav = document.getElementsByTagName('nav')[0];
const navBtn = document.getElementById('menu');
const navItems = document.getElementsByClassName('nav-btn');

const pages = document.getElementsByClassName('page');
const titles = document.getElementsByClassName('pg-title');
const filter = document.getElementById('filter');

navBtn.addEventListener('click', toggleNav);
for(let i=0; i< navItems.length; i++) {
    navItems[i].addEventListener('click', changePage);
}

function toggleNav() {
    nav.classList.toggle('active');
}
 
function changePage(e) {
    const page = e.target.getAttribute('data-id');

    if (activePage == page) {
        return;
    }
    
    const pageTitle = e.target.getAttribute('data-name');
    const pageDirection = e.target.getAttribute('data-direction');
    const pageBackgroundPos = e.target.getAttribute('data-background');

    if (activePage != -1)  {
        toggleNav();
        pages[activePage].classList.remove('active');
        pages[activePage].removeAttribute('style');
        //document.getElementsByTagName('html')[0].style['background-position'] = '50% 50%';
    }else {
        //document.getElementsByTagName('html')[0].style['background-position'] = pageBackgroundPos;
    }

   //pages[page].style[pageDirection] = '-25%';
    
    activePage = page;
    activeDirection = pageDirection;
    
    for(let i=0; i< titles.length; i++) {
        titles[i].classList.remove('textShadow');
    }

    //titles[page].style.color = colors[page];
    //filter.style.backgroundColor = colors[page];
    //document.getElementsByTagName('html')[0].style['background-position'] = pageBackgroundPos;
    setTimeout(() => {
        pages[page].classList.add('active');
        //pages[page].style[pageDirection] = '0%';
        setTimeout(() => {
            titles[page].classList.add('textShadow');
        }, 20);
    }, 400);

    pages[activePage].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});


}