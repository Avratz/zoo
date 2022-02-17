import AbstractView from './AbstractView';
import zoo from './components/zoo';

class ZooView extends AbstractView {
	#selectors = {};
	#template = zoo;

	constructor(selector) {
		super(selector);
		super.template = this.#template;
	}

	render(state) {
		super.render(state);
		this.#setSelectors();
	}

	bindAddNew(handler) {
		this.#selectors.$addNew?.addEventListener('click', handler);
	}

	// #region private
	#setSelectors() {
		this.#selectors.$addNew = this.selector.querySelector('[data-action="addNew"]');
		this.#selectors.$animals = this.selector.querySelectorAll('[data-action="animal"]');
		this.#selectors.$tooltip = this.selector.querySelector('[data-action="tooltip"]');
	}
	// #endregion
}

export default ZooView;
