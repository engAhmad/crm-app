import { CrmAppPage } from './app.po';

describe('crm-app App', () => {
  let page: CrmAppPage;

  beforeEach(() => {
    page = new CrmAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
