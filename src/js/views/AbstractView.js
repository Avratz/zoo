import logger from '../services/logger';

class AbstractView {
	#selector;
	#template;
	constructor(selector) {
		try {
			if (this.constructor === AbstractView) {
				throw new Error(
					'This class is abstract and cannot be instantiated. Create a subclass and inherit from it.',
				);
			}

			if (selector === undefined) {
				throw new Error('Selector is not defined');
			}

			this.#selector = document.querySelector(selector);
		} catch (error) {
			logger.error(error);
		}
	}

	get selector() {
		return this.#selector;
	}

	get template() {
		return this.#template;
	}

	set template(template) {
		this.#template = template;
	}

	/**
	 * Summary: this function will hide, render the template in the selector and show the view
	 * @param {Object} state current state of the model
	 */
	render(state) {
		this.hide();
		this.selector.innerHTML = this.template(state);
		this.show();
	}

	show() {
		this.selector.classList.add('active');
	}

	hide() {
		this.selector.classList.remove('active');
	}
}

export default AbstractView;
