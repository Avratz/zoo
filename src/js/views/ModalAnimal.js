import AbstractView from './AbstractView';
import modalAnimal from './components/modalAnimal';

class ModalAnimalView extends AbstractView {
	#selectors = {};
	#template = modalAnimal;

	/**
	 * @param {String} selector Selector in the DOM in which the modal will be rendered
	 */
	constructor(selector) {
		super(selector);
		super.template = this.#template;
	}

	render(state) {
		super.render(state);
		this.#setSelectors();
	}

	bindSelectedAnimal(handler) {
		this.#selectors.$animals?.forEach((animal) =>
			animal.addEventListener('click', () => handler(animal)),
		);
	}

	bindSaveAnimal(handler) {
		this.#selectors.$save?.addEventListener('click', () => {
			const phrase = this.#selectors.$phrase?.value || '';
			handler(phrase);
		});
	}

	bindCloseModal(handler) {
		this.#selectors.$close?.addEventListener('click', handler);
	}

	//#region private
	#setSelectors() {
		this.#selectors.$animals = this.selector.querySelectorAll('[data-action="newAnimal"]');
		this.#selectors.$phrase = this.selector.querySelector('#phrase');
		this.#selectors.$save = this.selector.querySelector('[data-action="save"]');
		this.#selectors.$close = this.selector.querySelector('[data-action="close"]');
	}
	//#endregion
}

export default ModalAnimalView;
