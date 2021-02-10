const toggler = document.querySelector('.toggler');
let darkTheme = false
toggler.addEventListener('click', ()=>{
    toggleOpen('menu-contents')
    toggleOpen('one')
    toggleOpen('two')
    toggleOpen('three')
})
const themeToggler = document.querySelector('.theme-toggle')
themeToggler.addEventListener('click', ()=>{
    themeToggler.classList.toggle('dark')
    darkTheme = !darkTheme;
    toggleDark('contact-form')
    toggleDark('technologies')
    toggleDark('aboutus')
    toggleDark('send-button')
    if(darkTheme){
        themeToggler.innerHTML = 'Light Mode'
        
    }else{
        themeToggler.innerHTML = 'Dark Mode'
    }
})

const toggleDark = (component) =>{
    document.querySelector(`.${component}`).classList.toggle('dark');
}

const toggleOpen = (component) =>{
    document.querySelector(`.${component}`).classList.toggle('open');
}