import {MDCList} from "@material/list";
import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from "@material/top-app-bar";

class Drawer {
    constructor() {
        this.appBarDOM = document.getElementById('app-bar');
        this.drawerDOM = document.querySelector('.mdc-drawer');
        this.mainContentDOM = document.querySelector('.main-content');
        this.listDOM = this.drawerDOM.querySelector('.mdc-list');
        this.topAppBar = MDCTopAppBar.attachTo(this.appBarDOM);
        this.drawer = MDCDrawer.attachTo(this.drawerDOM);
        this._attachHandlers()
    }

    _attachHandlers() {
        this.topAppBar.setScrollTarget(this.mainContentDOM);
        this.topAppBar.listen('MDCTopAppBar:nav', () => {
            this.drawer.open = !this.drawer.open;
        });
        this.mainContentDOM.addEventListener('click', (event) => {
            this.drawer.open = false;
        });
    }
}

new Drawer();
