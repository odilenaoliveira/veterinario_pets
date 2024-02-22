const navMenu = ()=>{
    let menu = document.querySelector('header');
    menu.innerHTML = `
        <a href="" id="#home" class="logo"><img src="/public/images/icones/veterinario (1).png" alt=""></a>
        <div class="menu"></div>
        <ul class="navbar">
            <li><a href="">Home</a></li>
            <li><a href="">Sobre</a></li>
            <li><a href="">Serviços</a></li>
            <li><a href="">Contato</a></li>
        </ul>
    `;
}
navMenu();