const creatFooter = () =>{
    let footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="row">
            <div class="box">
                <h3>Empresa</h3>
                <a href="">Sobre nós</a>
                <a href="">Filiais</a>
                <a href="">Termos de Serviços</a>
                <a href="">Politica de Privacidade</a>
            </div>
            <div class="box">
                <h3>Outras páginas</h3>
                <a href="">Página Principal</a>
                <a href="">Página 1</a>
                <a href="">página 2</a>
                <a href="">página 3</a>
            </div>
            <div class="box">
                <h3>Redes Sociais</h3>
                <a href="">facebook</a>
                <a href="">instagram</a>
                <a href="">twitter</a>
                <a href="">linkedin</a>
            </div>
            <div class="box">
                <h3>Contate-nos</h3>
                <div class="contact">
                    <p><img src="/public/images/icones/placeholder.png" alt=""> examplo examplo 1234, </p>
                    <p><img src="/public/images/icones/telefone-fio.png" alt=""> (00) 0000 - 0000</p>
                    <p><img src="/public/images/icones/bate-papo-2.png" alt=""> (00) 00000-0000</p>
                    <p><img src="/public/images/icones/enviar.png" alt=""> example@email.com</p>
                </div>
            </div>
        </div>
    `;
}
creatFooter()