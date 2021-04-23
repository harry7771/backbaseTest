import { Selector, t } from 'testcafe';
import selectors from '../selectors/selectors';
import constants from '../constants/constants';

async function navigateUrl() {
  await t.navigateTo(constants.bblogHome);
  await t.maximizeWindow();
  console.log('Navigated to BBlog home page.');
};

async function viewArticle(articleNumber) {
  await t.expect(selectors.articleByNumber(articleNumber).visible).ok();
  await t.click(selectors.articleByNumber(articleNumber));
  await t.expect(selectors.articlePage.exists).ok();
  console.log('Clicked to open article #' + articleNumber + '.');
};

async function commentsDisabled() {
  await t.expect(selectors.commentField.exists).notOk();
  console.log('Confirmed that comment controls are not displayed.');
};

async function clickTopNavSignIn() {
  await t.expect(selectors.signInButtonTopNav.visible).ok();
  await t.click(selectors.signInButtonTopNav);
  await t.expect(selectors.usernameField.visible).ok();
  console.log('Clicked Sign In in top navbar to reach sign in page.');
};

async function clickHomeTopNav() {
  await t.expect(selectors.homeButtonTopNav.visible).ok({timeout: 30000});
  await t.click(selectors.homeButtonTopNav);
  await t.expect(selectors.globalFeed.exists).ok();
  console.log('Clicked Home in top navbar.');
};

async function signIn(username, password) {
  await t.expect(selectors.usernameField.visible).ok();
  await t.expect(selectors.passwordField.visible).ok();
  await t.typeText(selectors.usernameField, username);
  await t.typeText(selectors.passwordField, password);
  await t.click(selectors.signInButtonSignInPage);
  await t.expect(selectors.globalFeed.visible).ok();
  console.log('Signed in as ' + username + '.');
};

async function viewGlobalFeed() {
  await t.expect(selectors.globalFeed.visible).ok({timeout: 30000});
  await t.click(selectors.globalFeed);
  await t.expect(selectors.globalFeedActive.exists).ok();
  console.log('Clicked to view Global Feed and confirmed that Global Feed view is active.');
};

async function enterCommentText(commentText, post) {
  await t.expect(selectors.commentField.visible).ok();
  await t.typeText(selectors.commentField, commentText);
  await t.pressKey('tab');
  if(post == true) {
    await t.expect(selectors.postCommentButton.visible).ok({timeout: 30000});
    await t.click(selectors.postCommentButton);
    console.log('Clicked Post Comment.');
    await confirmCommentByText(commentText, true);
  } else {
    console.log('Entered following text in comment box and stepped off of the field: ' + commentText);
  }
};

async function reloadPage() {
  await t.eval(() => location.reload());
  console.log('Refreshed page in browser.');
};

async function confirmCommentByText(commentText, displayed) {
  if(displayed == true) {
    await t.expect(selectors.articleComment(commentText).visible).ok({timeout: 10000});
    console.log('Confirmed comment displayed with text: ' + commentText);
  } else {
    await t.expect(selectors.articleComment(commentText).exists).notOk({timeout: 10000});
    console.log('Confirmed comment is not displayed with text: ' + commentText);
  }
};

async function deleteComment(commentText) {
  await t.expect(selectors.commentDeleteButton(commentText).visible).ok({timeout: 30000});
  await t.click(selectors.commentDeleteButton(commentText));
  console.log('Clicked delete button for comment with text: ' + commentText);
  await confirmCommentByText(commentText, false);
};


export default {
  navigateUrl,
  viewArticle,
  commentsDisabled,
  clickTopNavSignIn,
  clickHomeTopNav,
  signIn,
  viewGlobalFeed,
  enterCommentText,
  reloadPage,
  confirmCommentByText,
  deleteComment
};