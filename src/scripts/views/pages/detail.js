import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-source';
import { restoDetail } from '../templates/resto-detail';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <div class="content">
            <div id="main-container">
                <div class="like" id="likeButtonContainer"></div>
                <h2 class="title-container"><center>Detail Restourant</center></h2>

                <section id="detail-resto"></section>
                
                <div class="form-review">
                    <form autocomplete="on">
                        <div class="mb-3">
                            <label for="name-input" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name-input" minlength="3" placeholder="Masukan nama kamu" required>
                        </div>

                        <div class="mb-3">
                            <label for="review-input" class="form-label">Review</label>
                            <input type="text" class="form-control" id="review-input" minlength="3" placeholder="Masukan review kamu" required>
                        </div>

                        <button id="submit-review" type="submit" class="submit-btn" style="width: 100px; height: 45px; border-radius: 5px; background-color: darkred; color: white; border-color: transparent;">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContent = document.querySelector('#detail-resto');

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);
      detailContent.innerHTML += restoDetail(data.restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteResto: FavRestoIdb,
        data,
      });
    } catch (err) {
      console.error(err);
      detailContent.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default Detail;
