import { BadrabbItPage } from './app.po';

describe('badrabb.it App', () => {
  let page: BadrabbItPage;

  beforeEach(() => {
    page = new BadrabbItPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
