import keywords from '../keywords/keywords'

fixture `Amazon Search`;

test('Amazon Search', async t => {
    await keywords.navigateUrl();
});