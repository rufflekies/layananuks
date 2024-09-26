/*BukaNav*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
const navLink = document.querySelectorAll('.link')
function linkAction(){
    const navMenu = document.getElementById('menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Hilang Menu di Hp*/
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*Info Lanjut*/
const accordionItems = document.querySelectorAll('.iitem')
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.ijudul')
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})
const toggleItem = (item) => {
    const accordionContent = item.querySelector('.konten')
    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*Scrollll*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
sr.reveal('.title', {})
sr.reveal('.scroll', { delay: 200 })
sr.reveal('.himg', {origin:'right', delay: 400})
sr.reveal('.aimg', {delay: 500})
sr.reveal('.about-judul', {delay: 300})
sr.reveal('.about-singkatan', {delay: 400})
sr.reveal('.about-isi', {delay: 500})
sr.reveal('.icon', {delay: 600, interval: 200})
sr.reveal('.fjudul', {})
sr.reveal('.contoh', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.simg', {delay: 400})
sr.reveal('.dimg', { interval: 200 })
sr.reveal('.iitem', { delay: 400, interval: 200 })
sr.reveal('.scroll2', { delay: 200, interval: 200})
sr.reveal('.kjudul', {})
sr.reveal('.kteks', {interval: 200})
sr.reveal('.kinput', {delay: 400})
sr.reveal('.ktombol', { delay: 600 })
