!function(s){var e={};function t(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return s[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=s,t.c=e,t.d=function(s,e,a){t.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:a})},t.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},t.t=function(s,e){if(1&e&&(s=t(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var i in s)t.d(a,i,function(e){return s[e]}.bind(null,i));return a},t.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return t.d(e,"a",e),e},t.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},t.p="",t(t.s=19)}({1:function(s,e){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var t={upgradeDom:function(s,e){},upgradeElement:function(s,e){},upgradeElements:function(s){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(s,e){},register:function(s){},downgradeElements:function(s){}};(t=function(){"use strict";var s=[],e=[];function t(e,t){for(var a=0;a<s.length;a++)if(s[a].className===e)return void 0!==t&&(s[a]=t),s[a];return!1}function a(s){var e=s.getAttribute("data-upgraded");return null===e?[""]:e.split(",")}function i(s,e){return-1!==a(s).indexOf(e)}function n(s,e,t){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(s,{bubbles:e,cancelable:t});var a=document.createEvent("Events");return a.initEvent(s,e,t),a}function r(e,a){if(void 0===e&&void 0===a)for(var i=0;i<s.length;i++)r(s[i].className,s[i].cssClass);else{var n=e;if(void 0===a){var o=t(n);o&&(a=o.cssClass)}for(var d=document.querySelectorAll("."+a),_=0;_<d.length;_++)l(d[_],n)}}function l(r,l){if(!("object"==typeof r&&r instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var o=n("mdl-componentupgrading",!0,!0);if(r.dispatchEvent(o),!o.defaultPrevented){var d=a(r),_=[];if(l)i(r,l)||_.push(t(l));else{var c=r.classList;s.forEach((function(s){c.contains(s.cssClass)&&-1===_.indexOf(s)&&!i(r,s.className)&&_.push(s)}))}for(var h,C=0,u=_.length;C<u;C++){if(!(h=_[C]))throw new Error("Unable to find a registered component for the given class.");d.push(h.className),r.setAttribute("data-upgraded",d.join(","));var E=new h.classConstructor(r);E.mdlComponentConfigInternal_=h,e.push(E);for(var A=0,m=h.callbacks.length;A<m;A++)h.callbacks[A](r);h.widget&&(r[h.className]=E);var f=n("mdl-componentupgraded",!0,!1);r.dispatchEvent(f)}}}function o(s){if(s){var t=e.indexOf(s);e.splice(t,1);var a=s.element_.getAttribute("data-upgraded").split(","),i=a.indexOf(s.mdlComponentConfigInternal_.classAsString);a.splice(i,1),s.element_.setAttribute("data-upgraded",a.join(","));var r=n("mdl-componentdowngraded",!0,!1);s.element_.dispatchEvent(r)}}return{upgradeDom:r,upgradeElement:l,upgradeElements:function s(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,a=0,i=e.length;a<i;a++)(t=e[a])instanceof HTMLElement&&(l(t),t.children.length>0&&s(t.children))},upgradeAllRegistered:function(){for(var e=0;e<s.length;e++)r(s[e].className)},registerUpgradedCallback:function(s,e){var a=t(s);a&&a.callbacks.push(e)},register:function(e){var a=!0;void 0===e.widget&&void 0===e.widget||(a=e.widget||e.widget);var i={classConstructor:e.constructor||e.constructor,className:e.classAsString||e.classAsString,cssClass:e.cssClass||e.cssClass,widget:a,callbacks:[]};if(s.forEach((function(s){if(s.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+s.cssClass);if(s.className===i.className)throw new Error("The provided className has already been registered")})),e.constructor.prototype.hasOwnProperty("mdlComponentConfigInternal_"))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");t(e.classAsString,i)||s.push(i)},downgradeElements:function(s){var t=function(s){e.filter((function(e){return e.element_===s})).forEach(o)};if(s instanceof Array||s instanceof NodeList)for(var a=0;a<s.length;a++)t(s[a]);else{if(!(s instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(s)}}}}()).ComponentConfigPublic,t.ComponentConfig,t.Component,t.upgradeDom=t.upgradeDom,t.upgradeElement=t.upgradeElement,t.upgradeElements=t.upgradeElements,t.upgradeAllRegistered=t.upgradeAllRegistered,t.registerUpgradedCallback=t.registerUpgradedCallback,t.register=t.register,t.downgradeElements=t.downgradeElements,window.componentHandler=t,window.componentHandler=t,window.addEventListener("load",(function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),t.upgradeAllRegistered()):(t.upgradeElement=function(){},t.register=function(){})}))},19:function(s,e,t){"use strict";t.r(e);t(1),t(2)},2:function(s,e){
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){"use strict";var s=function(s){this.element_=s,this.init()};function e(s,e,t,a){function i(){var i=s.href.split("#")[1],n=a.content_.querySelector("#"+i);a.resetTabState_(e),a.resetPanelState_(t),s.classList.add(a.CssClasses_.IS_ACTIVE),n.classList.add(a.CssClasses_.IS_ACTIVE)}if(a.tabBar_.classList.contains(a.CssClasses_.JS_RIPPLE_EFFECT)){var n=document.createElement("span");n.classList.add(a.CssClasses_.RIPPLE_CONTAINER),n.classList.add(a.CssClasses_.JS_RIPPLE_EFFECT);var r=document.createElement("span");r.classList.add(a.CssClasses_.RIPPLE),n.appendChild(r),s.appendChild(n)}a.tabBar_.classList.contains(a.CssClasses_.TAB_MANUAL_SWITCH)||s.addEventListener("click",(function(e){"#"===s.getAttribute("href").charAt(0)&&(e.preventDefault(),i())})),s.show=i}window.MaterialLayout=s,s.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,RESIZE_TIMEOUT:100,MENU_ICON:"&#xE5D2;",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},s.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32},s.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},s.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",TAB_MANUAL_SWITCH:"mdl-layout__tab-manual-switch",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},s.prototype.contentScrollHandler_=function(){if(!this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)){var s=!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN)||this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),s&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),s&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING))}},s.prototype.keyboardEventHandler_=function(s){s.keyCode===this.Keycodes_.ESCAPE&&this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)&&this.toggleDrawer()},s.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&(this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))},s.prototype.drawerToggleHandler_=function(s){if(s&&"keydown"===s.type){if(s.keyCode!==this.Keycodes_.SPACE&&s.keyCode!==this.Keycodes_.ENTER)return;s.preventDefault()}this.toggleDrawer()},s.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)},s.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING))},s.prototype.resetTabState_=function(s){for(var e=0;e<s.length;e++)s[e].classList.remove(this.CssClasses_.IS_ACTIVE)},s.prototype.resetPanelState_=function(s){for(var e=0;e<s.length;e++)s[e].classList.remove(this.CssClasses_.IS_ACTIVE)},s.prototype.toggleDrawer=function(){var s=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)?(this.drawer_.setAttribute("aria-hidden","false"),s.setAttribute("aria-expanded","true")):(this.drawer_.setAttribute("aria-hidden","true"),s.setAttribute("aria-expanded","false"))},s.prototype.toggleDrawer=s.prototype.toggleDrawer,s.prototype.init=function(){if(this.element_){var s=document.createElement("div");s.classList.add(this.CssClasses_.CONTAINER);var t=this.element_.querySelector(":focus");this.element_.parentElement.insertBefore(s,this.element_),this.element_.parentElement.removeChild(this.element_),s.appendChild(this.element_),t&&t.focus();for(var a=this.element_.childNodes,i=a.length,n=0;n<i;n++){var r=a[n];r.classList&&r.classList.contains(this.CssClasses_.HEADER)&&(this.header_=r),r.classList&&r.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=r),r.classList&&r.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=r)}window.addEventListener("pageshow",function(s){s.persisted&&(this.element_.style.overflowY="hidden",requestAnimationFrame(function(){this.element_.style.overflowY=""}.bind(this)))}.bind(this),!1),this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var l=this.Mode_.STANDARD;if(this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?l=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(l=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(l=this.Mode_.SCROLL,s.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),l===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):l===this.Mode_.SEAMED||l===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):l===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_())),this.drawer_){var o=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);if(!o){(o=document.createElement("div")).setAttribute("aria-expanded","false"),o.setAttribute("role","button"),o.setAttribute("tabindex","0"),o.classList.add(this.CssClasses_.DRAWER_BTN);var d=document.createElement("i");d.classList.add(this.CssClasses_.ICON),d.innerHTML=this.Constant_.MENU_ICON,o.appendChild(d)}this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?o.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&o.classList.add(this.CssClasses_.ON_SMALL_SCREEN),o.addEventListener("click",this.drawerToggleHandler_.bind(this)),o.addEventListener("keydown",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(o,this.header_.firstChild):this.element_.insertBefore(o,this.content_);var _=document.createElement("div");_.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(_),_.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.obfuscator_=_,this.drawer_.addEventListener("keydown",this.keyboardEventHandler_.bind(this)),this.drawer_.setAttribute("aria-hidden","true")}if(this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var c=document.createElement("div");c.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(c,this.tabBar_),this.header_.removeChild(this.tabBar_);var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_BAR_BUTTON),h.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var C=document.createElement("i");C.classList.add(this.CssClasses_.ICON),C.textContent=this.Constant_.CHEVRON_LEFT,h.appendChild(C),h.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS}.bind(this));var u=document.createElement("div");u.classList.add(this.CssClasses_.TAB_BAR_BUTTON),u.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var E=document.createElement("i");E.classList.add(this.CssClasses_.ICON),E.textContent=this.Constant_.CHEVRON_RIGHT,u.appendChild(E),u.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS}.bind(this)),c.appendChild(h),c.appendChild(this.tabBar_),c.appendChild(u);var A=function(){this.tabBar_.scrollLeft>0?h.classList.add(this.CssClasses_.IS_ACTIVE):h.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?u.classList.add(this.CssClasses_.IS_ACTIVE):u.classList.remove(this.CssClasses_.IS_ACTIVE)}.bind(this);this.tabBar_.addEventListener("scroll",A),A();var m=function(){this.resizeTimeoutId_&&clearTimeout(this.resizeTimeoutId_),this.resizeTimeoutId_=setTimeout(function(){A(),this.resizeTimeoutId_=null}.bind(this),this.Constant_.RESIZE_TIMEOUT)}.bind(this);window.addEventListener("resize",m),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var f=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),L=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),p=0;p<f.length;p++)new e(f[p],f,L,this)}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},window.MaterialLayoutTab=e,componentHandler.register({constructor:s,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"})}()}});