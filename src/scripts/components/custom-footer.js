class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="0">
            Copyright © 2022 - FindResto
        </footer>
      `;
  }
}

customElements.define('custom-footer', CustomFooter);
