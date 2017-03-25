import { FoodPage } from './app.po';

describe('food App', () => {
  let page: FoodPage;

  beforeEach(() => {
    page = new FoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fd works!');
  });
});
