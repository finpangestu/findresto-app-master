class HeroElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="heroelement" style="background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), url('images/heros/hero-image_2.jpg');">
            <div class="heroin">
                <img src="./images/full-logo.png" alt="findresto-logo">
                <h1 class="herotitle">Findresto</h1>
                <p class="herosub">Temukan Restoran Favoritmu disini!</p>
            </div>
        </div>
      `;
    }
}

customElements.define('hero-element', HeroElement);
