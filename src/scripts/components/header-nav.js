class HeaderNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navdeks">
            <div class="header-logo">
                <picture>
                    <source media="(max-width: 600px" srcset="./images/full-logo-small.jpg">
                    <img src="./images/full-logo-small.jpg" alt="findresto-logo">
                </picture>
            </div>
            <div class="menu">
                <a href="/"><i class="fa-solid fa-house"></i>Home</a>
                <a href="#/favorite"><i class="fa-solid fa-heart"></i>Favorit</a>
                <a href="https://www.linkedin.com/in/finnn-941642241/" target="_blank" rel="noopener"><i class="fa-solid fa-user"></i>Owner</a>
            </div>
        </nav>

        <!-- Mobile -->
        <nav class="navmob">
            <div class="iconmobs" id="iconm">
                <button aria-label="button menu dropdown on mobile" type="button"><i class="fa-solid fa-bars"></i></button>
            </div>
            <p>Findresto</p>
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
