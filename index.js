//sign in
const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


//podelit
    let toggle=document.querySelector('.toggle');
    let menu=document.querySelector('.menu');
    toggle.onclick =function(){
        menu.classList.toggle('active')
    }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
    
const passElement = document.querySelectorAll('.pass');
passElement.forEach((el) => observer.observe(el));