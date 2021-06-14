import { MDCTopAppBar } from '@material/top-app-bar/index';

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import { MDCList } from "@material/list";
const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

import { MDCRipple } from '@material/ripple';
const selector = '.mdc-button, .mdc-card__primary-action';
const ripple = new MDCRipple(document.querySelectorAll(selector));
