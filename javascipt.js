const navlinks = document.querySelectorAll('.nav-link');

const mapping = {
    'home' :'home',
    'about':'about',
    'skills':'skills',
    'project':'project',
    'home':'home'
}

navlinks.forEach(link =>{
    link.addEventListener('click' ,function(e) {
        e.preventDefault()
        navlinks.forEach(link => {
             link.classList.remove('active');
            const target = this.getAttribute('data-target');
            const mappedTarget = mapping[target] || target;

            const newActive = document.querySelector(`.nav-link[data-target="${mappedTarget}"]`);
            if(newActive)
                newActive.classList.toggle('active')
            document.getElementById(target).scrollIntoView({behavior:"smooth"});
        })
    })
})

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () =>{
    let current = '';

    sections.forEach(section =>{
        const sectionTop = section.offsetTop - 60;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
            current = section.getAttribute('id');
            section.classList.add('show-animasi')
        }
        else{
            section.classList.remove('show-animasi')
        }
    });
    navlinks.forEach(link =>{
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current){
            link.classList.toggle('active')
        }
    })
   
    
})

const links = document.querySelector(".links")

document.querySelector('.menu-nav').onclick = (e)=>{
    links.classList.toggle('active')
    e.preventDefault()
}

const menu = document.querySelector('.menu-nav');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !links.contains(e.target)){
        links.classList.remove('active')
    }
})

navlinks.forEach(link =>{
    link.addEventListener('click', () =>{
        links.classList.remove('active')
    })
})