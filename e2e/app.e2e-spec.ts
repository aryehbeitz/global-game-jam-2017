import { SNGPage } from './app.po';

describe('sng-web App', function() {
  let page: SNGPage;

  beforeEach(() => {
    page = new SNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
