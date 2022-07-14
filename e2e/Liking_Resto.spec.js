const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'Belum ada Restoran pilihan yang anda sukai.';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.waitForElement('#list-rest', 10);
  I.seeElement('#list-rest');
  I.see(firstCondition, '#list-rest');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(firstCondition, '#list-rest');

  // Like
  I.amOnPage('/');

  I.waitForElement('.list_item_title a', 10);
  I.seeElement('.list_item_title a');
  const firstItem = locate('.list_item_title a').first();
  const firstItemTitle = await I.grabTextFrom(firstItem);
  I.click(firstItem);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');
  const likedItemTitle = await I.grabTextFrom('.list_item_title');

  assert.strictEqual(firstItemTitle, likedItemTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(firstCondition, '#list-rest');

  // Like
  I.amOnPage('/');

  I.waitForElement('.list_item_title a', 10);
  I.seeElement('.list_item_title a');
  const firstItem = locate('.list_item_title a').first();
  const firstItemTitle = await I.grabTextFrom(firstItem);
  I.click(firstItem);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');
  const likedItemTitle = await I.grabTextFrom('.list_item_title');

  assert.strictEqual(firstItemTitle, likedItemTitle);

  // Unlike
  I.click(likedItemTitle);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#list-rest');
  const unlikedItemTitle = await I.grabTextFrom('#list-rest');

  assert.strictEqual(unlikedItemTitle, firstCondition);
});
