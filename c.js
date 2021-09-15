const toggle = document.querySelector('label')
const box = document.querySelector('.box')

toggle.addEventListener('click',()=>{
    const cssList = box.classList.value;
    if(!cssList.includes('hiddenback')){
        box.classList.add('hiddenback')
        box.textContent = 'switchOFF'
    }
    else {
        box.classList.remove('hiddenback')
        box.textContent = 'switchON'
    }
})
    