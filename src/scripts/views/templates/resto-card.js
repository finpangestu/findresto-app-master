/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const restoCard = (resto) => `
<style>
    .checked {
        color: orange;
    }
</style>
<div class="list_item">
    <img class="list_item_thumb" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" title="${resto.name}">
    <div class="city">${resto.city}</div>
        <div class="list_item_content">
            <p class="list_item_rating">
                <a href="#" class="list_item_rating_value">${resto.rating} <span class="fa fa-star checked"></span></a>
            </p>
            <h1 class="list_item_title"><a href="#/resto/${resto.id}">${resto.name}</a></h1>
        <div class="list_item_desc">${resto.description.slice(0, 150)}...</div>
    </div>
</div>
`;

export { restoCard };
