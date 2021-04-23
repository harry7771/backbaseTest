import { Selector } from 'testcafe';

const articleByNumber = (articleNumber) => Selector('div.article-preview').nth(articleNumber).find('span').withText('Read more');
const articlePage = Selector('div.article-page');
const commentField = Selector('div.card.comment-form');
const signInButtonTopNav = Selector('a.nav-link').withText('Sign in');
const homeButtonTopNav = Selector('a.nav-link').withText('Home');
const usernameField = Selector('input[placeholder="Username"]');
const passwordField = Selector('input[placeholder="Password"]');
const signInButtonSignInPage = Selector('div.auth-page').find('button').withText('Sign in');
const globalFeed = Selector('a').withExactText('Global Feed');
const globalFeedActive = Selector('a.nav-link.active').withExactText('Global Feed');
const articleComment = (commentText) => Selector('app-article-comment').find('p.card-text').withText(commentText);
const commentDeleteButton = (commentText) => Selector('app-article-comment').find('p.card-text').withText(commentText).parent('div.card').find('i.ion-trash-a');
const postCommentButton = Selector('button').withText('Post Comment');

export default {
  articleByNumber,
  articlePage,
  commentField,
  signInButtonTopNav,
  usernameField,
  passwordField,
  signInButtonSignInPage,
  homeButtonTopNav,
  globalFeed,
  globalFeedActive,
  articleComment,
  commentDeleteButton,
  postCommentButton
  };