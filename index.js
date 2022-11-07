const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener("click",function () {
    alert('Sabia que dirias que si')
});

yesbtn.addEventListener("click",function () {
    alert('¿Unos besos o que mija?')
});

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*200);
    const randomY = parseInt(Math.random()*200);
    nobtn.style.setProperty('top',randomY+'%');
    nobtn.style.setProperty('left',randomX+'%');
    nobtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
