const bar = document.querySelector('#bar'); // "bar" düyməsini seç
const cross = document.querySelector('#cross'); // "cross" düyməsini seç
const nav = document.querySelector('.nav'); // menyunu seç

bar.onclick = () => {
    [bar.style.display, cross.style.display, nav.style.left] = ['none', 'block', '20%'];
};

cross.onclick = () => {
    [cross.style.display, bar.style.display, nav.style.left] = ['none', 'block', '100%'];
};

const arrows = document.querySelectorAll('.arrow');

//Array.forEach(function)---istifadəsi
arrows.forEach(arrow => {
    arrow.onclick = () => {
        const footerlist = arrow.parentElement.nextElementSibling;
        arrow.classList.toggle('temp');
        footerlist.style.display = arrow.classList.contains('temp') ? 'block' : 'none';
        arrow.style.transform = arrow.classList.contains('temp') ? 'rotate(180deg)' : 'rotate(0deg)';
    };
});
//DOM manipulation

const menuNav = document.querySelector('.menu-nav');

window.addEventListener('scroll', () => {
    menuNav.classList.toggle('sticky', window.pageYOffset > menuNav.offsetTop);
});

//menu

// fetch('data.json').then(res=> res.json()).then(data=> console.log(data))
fetch('./data.json')
  .then(response =>  response.json())
  .then(data => {
    console.log(data, 'datam');
  })





let dataaa = [1]
const categories = document.querySelector('.categories')
function showMenu(){
    dataaa.map(item=> {
        console.log(item),
categories.innerHTML+=  ` <div class="item-head">
    <h2></h2>
</div>

<div class="order-menu-items">
    <a href="#">
        <div class="order-items">
            <div>
                <img src="../img/coffee.jpg" alt="">
            </div>
            <span>Oleato</span>
        </div>
    </a>
</div>`
})
}
showMenu()





