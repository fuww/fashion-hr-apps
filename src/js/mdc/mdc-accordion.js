const ACCORDION_CONSTANTS = {
    STATE_EXPANDED: 'expanded',
    STATE_COLLAPSED: 'collapsed',
    ACTIVE_CLASS: 'active'
};

class Accordion {
    constructor(context) {
        this.domNode = context;
        this._state = ACCORDION_CONSTANTS.STATE_COLLAPSED;

        if (this._started) {
            return;
        }

        this._attachHandlers();
        this.setState(this._getStateFromDom());
        this._started = true;
    }

    setState(state) {
        this._state = state;
        return state;
    }

    getState() {
        return this._state;
    }

    toggle() {
        const state = this.getState();
        if (state === ACCORDION_CONSTANTS.STATE_EXPANDED) {
            this.collapse();
        } else {
            this.expand();
        }
    }

    collapse() {
        this.domNode.classList.remove(ACCORDION_CONSTANTS.ACTIVE_CLASS);
        this.setState(ACCORDION_CONSTANTS.STATE_COLLAPSED);
    }

    expand() {
        this.domNode.classList.add(ACCORDION_CONSTANTS.ACTIVE_CLASS);
        this.setState(ACCORDION_CONSTANTS.STATE_EXPANDED);
    }

    _getStateFromDom() {
        const isExpanded = this.domNode.classList.contains(ACCORDION_CONSTANTS.ACTIVE_CLASS);
        return isExpanded ? ACCORDION_CONSTANTS.STATE_EXPANDED : ACCORDION_CONSTANTS.STATE_COLLAPSED;
    }

    _attachHandlers() {
        this._attachHandler(this.domNode, this._onTriggerClick);
    }

    _attachHandler(_node, _trigger, event = 'click') {
        if (_node) {
            _node.addEventListener(event, _trigger.bind(this));
        }
    }

    _onTriggerClick() {
        this.toggle();
    }
}

const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => new Accordion(accordion));
