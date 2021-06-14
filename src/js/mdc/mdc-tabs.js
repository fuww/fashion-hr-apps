import { MDCTabBar } from '@material/tab-bar';

const SELECTORS = {
    CONTENT_SELECTOR: '.panels',
    PANEL_SELECTOR: '.panel',
    TAB_BAR_SELECTOR: '.mdc-tab-bar',
    TAB_SELECTOR: '.mdc-tab',
    TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
    TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
};

const CLASSES = {
    ACTIVE : 'active'
};

/*This class creates tabs component*/

class MdcTheme{
    constructor(tabDOM){
        this._tabBarDOM = tabDOM;
        this._initClasses();
        this._initListeners();
    }
    /* Initialize MDC tab components and listeners @private */

    _initClasses(){
        this._tabBarParentDOM = this._tabBarDOM.parentNode;
        this._tabBar = new MDCTabBar(this._tabBarDOM);
    }

    _initListeners(){
        this._tabBar.tabList_.forEach((tab) => {
            tab.preventDefaultOnClick = true;
        });
        this._tabBar.listen('MDCTabBar:activated', ({detail: tabs}) => {
            const nthChildIndex = tabs.index;
            this.updatePanel(nthChildIndex);
        });
    }

    updatePanel(index) {
        const activePanel = this._tabBarParentDOM.querySelector(`${SELECTORS.CONTENT_SELECTOR} > ${SELECTORS.PANEL_SELECTOR}.${CLASSES.ACTIVE}`);
        if (activePanel) {
            activePanel.classList.remove(CLASSES.ACTIVE);
        }
        const newActivePanel = this._tabBarParentDOM.querySelectorAll(`${SELECTORS.CONTENT_SELECTOR} > ${SELECTORS.PANEL_SELECTOR}`);
        if (newActivePanel[index]) {
            newActivePanel[index].classList.add(CLASSES.ACTIVE);
        }
    }
}
const tabs = document.querySelectorAll(`${SELECTORS.CONTENT_SELECTOR} ${SELECTORS.TAB_BAR_SELECTOR}`);
tabs.forEach((tabDOM) => new MdcTheme(tabDOM));
