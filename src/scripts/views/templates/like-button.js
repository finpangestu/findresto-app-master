const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa-solid fa-heart-circle-check"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa-solid fa-heart-circle-xmark"></i>
    </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
