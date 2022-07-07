import { restoCard } from '../templates/resto-card';
import FavRestoIdb from '../../data/favorite-resto-idb';

const Favorite = {
    async render() {
        return `
        <div class="content">
            <div class="latest">
                <h2 class="title-container"><center>Restourant Favorite</center></h2>
                <div class="listrest" id="list-rest"></div>
            </div>
        </div>
        `;
    },
    async afterRender() {
        const data = await FavRestoIdb.getAllResto();

        const favRestoContainer = document.querySelector('#list-rest');

        if (data.length === 0) {
            favRestoContainer.innerHTML = `
                Belum ada Restoran pilihan yang anda sukai.
            `;
        }
        data.forEach((restaurant) => {
            favRestoContainer.innerHTML += restoCard(restaurant);
        });

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

export default Favorite;
