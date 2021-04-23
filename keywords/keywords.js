import { Selector, t } from 'testcafe';
import selectors from '../selectors/selectors';
import constants from '../constants/constants';

async function navigateUrl() {
    await t.navigateTo(constants.amazonHome);
    await t.expect(selectors.amazonSearchField.visible).ok({timeout: 60000});
    await t.maximizeWindow();
    console.log('Navigated to Amazon home page.');
};

export default {
  navigateUrl
};