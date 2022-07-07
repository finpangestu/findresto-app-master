import FavRestoIdb from '../data/favorite-resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/like-button';

const LikeButtonInitiator = {
    async init({ likeButtonContainer, data }) {
        this._likeButttonContainer = likeButtonContainer;
        this._restaurant = data.restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestoExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestoExist(id) {
        const resto = await FavRestoIdb.getResto(id);
        return !!resto;
    },

    _renderLike() {
        this._likeButttonContainer.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavRestoIdb.putResto(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButttonContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavRestoIdb.deleteResto(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeButtonInitiator;
