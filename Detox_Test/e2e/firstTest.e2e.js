/* eslint-disable no-undef */
describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the step one message', async () => {
    await expect(element(by.id('stepOne'))).toBeVisible();
  });
});
