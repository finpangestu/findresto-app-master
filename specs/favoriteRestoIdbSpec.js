import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestoIdb.getAllResto()).forEach(async (data) => {
      await FavRestoIdb.deleteResto(data.id);
    });
  });

  itActsAsFavoriteRestoModel(FavRestoIdb);
});
