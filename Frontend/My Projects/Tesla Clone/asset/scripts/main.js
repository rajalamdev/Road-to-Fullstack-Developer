import * as Var from "../modules/variable.mjs";

Var.menuBtn.addEventListener('click',()=> {
    Var.aside.classList.add('reveal')
    Var.blur.classList.add('reveal')
})

Var.closeBtn.addEventListener('click',()=>{
    Var.aside.classList.remove('reveal')
    Var.blur.classList.remove('reveal')
})

document.addEventListener('scroll', () => {
    Var.sections.forEach(section => {
        const currentScroll = window.scrollY;
        const secOffset = section.offsetTop;
        const secHeight = section.offsetHeight;

        if(currentScroll >= secOffset - 300 && currentScroll < secOffset + secHeight - 400){
            section.classList.add('reveal');
        } else {
            section.classList.remove('reveal');
        }
    })       
})
