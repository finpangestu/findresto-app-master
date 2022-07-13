class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="heroelement">
            <picture>
                <source media="(max-width: 800px" srcset="./images/hero-image_2-large.jpg">
                <img src="./images/hero-image_2-large.jpg" alt="hero-element">
            </picture>
            <div class="heroin">
                <picture>
                    <source media="(max-width: 600px" srcset="./images/full-logo-small.jpg">
                    <img src="./images/full-logo-small.jpg" alt="findresto-logo">
                </picture>
                <h1 class="herotitle">Findresto</h1>
                <p class="herosub">Temukan Restoran Favoritmu disini!</p>
            </div>
        </div>
      `;
  }
}

customElements.define('hero-element', HeroElement);
