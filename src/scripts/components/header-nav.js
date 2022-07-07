class HeaderNav extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navdeks">
            <div class="header-logo">
                <a href=""><img src="./images/full-logo-white.png" alt="findresto-logo"></a>
            </div>
            <div class="menu">
                <a href=""><i class="fa-solid fa-house"></i>Home</a>
                <a href="#/favorite"><i class="fa-solid fa-heart"></i>Favorit</a>
                <a href="https://www.linkedin.com/in/finnn-941642241/" target="_blank"><i class="fa-solid fa-user"></i>Owner</a>
            </div>
        </nav>

        <!-- Mobile -->
        <nav class="navmob">
            <div class="iconmobs" id="iconm">
                <button><i class="fa-solid fa-bars" aria-hidden="true"></i></button>
            </div>
            <a href="">Findresto</a> 
        </nav>
        <nav class="menumob" id="drawer">
            <ul class="navmoblist">
                <li class="navitemmob"><a href=""><i class="fa-solid fa-house"></i>Home</a></li>
                <li class="navitemmob"><a href="#/favorite"><i class="fa-solid fa-heart"></i>Favorit</a></li>
                <li class="navitemmob"><a href="https://www.linkedin.com/in/finnn-941642241/"><i class="fa-solid fa-user"></i>Owner</a></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('header-nav', HeaderNav);
