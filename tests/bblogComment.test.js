import keywords from '../keywords/keywords';
import constants from '../constants/constants'

fixture `BBlog Comment`
.httpAuth({
    username: 'candidatex',
    password: 'qa-is-cool',
});

test('BBlog Comment', async t => {
    
    await keywords.navigateUrl();
    await keywords.viewArticle(0);
    await keywords.commentsDisabled();
    await keywords.clickTopNavSignIn();
    await keywords.signIn(constants.user1Email, constants.password1);
    await keywords.viewGlobalFeed();
    await keywords.viewArticle(0);
    await keywords.enterCommentText(constants.allCharactersString, false);
    await keywords.reloadPage();
    await keywords.confirmCommentByText(constants.allCharactersString, false);
    await keywords.enterCommentText(constants.allCharactersString, true);
    await keywords.clickHomeTopNav();
    await keywords.viewGlobalFeed();
    await keywords.viewArticle(0);
    await keywords.confirmCommentByText(constants.allCharactersString, false);
    await keywords.deleteComment(constants.allCharactersString);
    await keywords.clickHomeTopNav();
    await keywords.viewGlobalFeed();
    await keywords.viewArticle(0);
    await keywords.confirmCommentByText(constants.allCharactersString, false);
    await t.wait(5000);
});