import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteResto.find((data) => data.id === id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(data) {
    if (!data.hasOwnProperty('id')) {
      return;
    }

    // Pastikan id ini belum ada dalam daftar favoriteResto
    if (this.getResto(data.id)) {
      return;
    }

    favoriteResto.push(data);
  },

  deleteResto(id) {
    // Cara boros menghapus resto dengan meng-copy restto yang ada
    // Kecuali resto dengan id === id
    favoriteResto = favoriteResto.filter((data) => data.id !== id);
  },
};

describe('Favorite resto array contract test implementation', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
