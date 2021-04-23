import keywords from '../keywords/keywords';
import constants from '../constants/constants'

fixture `BBlog Comment`
.httpAuth({
    username: 'candidatex',
    password: 'qa-is-cool',
});

test('BBlog Comment', async t => {
    
    // Navigate to BBlog home page.
    await keywords.navigateUrl();

    // Open first article in the list.
    await keywords.viewArticle(0);
    // Confirm that comment controls are not displayed, since user is not signed in.
    await keywords.commentsDisabled();

    // Sign in as valid user.
    await keywords.clickTopNavSignIn();
    await keywords.signIn(constants.user1Email, constants.password1);

    // Navigate to Global Feed and open first article.
    await keywords.viewGlobalFeed();
    await keywords.viewArticle(0);
    
    // Enter text into comment box but refresh the page before clicking Post. Verify that the comment is not posted.
    await keywords.enterCommentText(constants.allCharactersString, false);
    await keywords.reloadPage();
    await keywords.confirmCommentByText(constants.allCharactersString, false);

    // Enter text and click Post Comment. Verify that comment is posted.
    await keywords.enterCommentText(constants.allCharactersString, true);

    // Navigate back to Global Feed and re-open article to confirm that the newly posted comment was saved.
    await keywords.clickHomeTopNav();
    await keywords.viewGlobalFeed();
    await keywords.viewArticle(0);
    await keywords.confirmCommentByText(constants.allCharactersString, false);
    
    // Delete the comment.
    await keywords.deleteComment(constants.allCharactersString);

    // Navigate back to Global Feed and re-open article to confirm that comment was deleted.
    await keywords.clickHomeTopNav();
    await keywords.viewGlobalFeed();
    await keywords.viewArticle(0);
    await keywords.confirmCommentByText(constants.allCharactersString, false);
});