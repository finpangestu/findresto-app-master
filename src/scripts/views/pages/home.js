import RestaurantSource from '../../data/resto-source';
import { restoCard } from '../templates/resto-card';

const Home = {
    async render() {
        return `
        <section class="content" id="content">
            <div class="latest">
                <h2>Berikut adalah Daftar Restoran yang ada di <span><img src="./images/heros/full-logo.png" alt="findresto-logo" width="150px"></span></h2>
                <div class="listrest" id="list-rest"></div>
            </div>
        </section>
        `;
    },
    async afterRender() {
        const listContent = document.querySelector('#list-rest');
        try {
            const data = await RestaurantSource.getRestaurantList();
            data.restaurants.forEach((restaurant) => {
                listContent.innerHTML += restoCard(restaurant);
            });
        } catch (err) {
            console.error(err);
            listContent.innerHTML = `Error: ${err.message}`;
        };

        const helement = document.querySelector('.heroelement');
        const main = document.querySelector('main');
        const draw = document.querySelector('#drawer');

        helement.addEventListener('click', () => {
            draw.classList.remove('open');
        });

        main.addEventListener('click', () => {
            draw.classList.remove('open');
        });
    },
};

export default Home;
