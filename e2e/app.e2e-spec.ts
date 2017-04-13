import { Angular2SampledemoPage } from './app.po';

describe('angular2-sampledemo App', () => {
  let page: Angular2SampledemoPage;

  beforeEach(() => {
    page = new Angular2SampledemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
