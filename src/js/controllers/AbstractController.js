import logger from '../services/logger';
import emit from '../utils/emitEvent';

import AbstractModel from '../models/AbstractModel';
import AbstractView from '../views/AbstractView';

class AbstractController {
	/**
	 * Summary: this constructor must be called with instances of the AbstractView and AbstractModel
	 * @param {AbstractModel} model
	 * @param {AbstractView} view
	 */
	constructor(model, view) {
		try {
			if (this.constructor === AbstractController) {
				throw new Error(
					'This class is abstract and cannot be instantiated. Create a subclass and inherit from it.',
				);
			}
			if (!(model instanceof AbstractModel)) {
				throw new Error('Model is not an instance of AbstractModel');
			}
			if (!(view instanceof AbstractView)) {
				throw new Error('View is not an instance of AbstractView');
			}

			this.model = model;
			this.view = view;
			this.emit = emit;
		} catch (error) {
			logger.error(error);
		}
	}

	/**
	 * Summary: This function re renders the view with the state of the model
	 * @param {Object?} state new state to be rendered
	 */
	render(state) {
		this.view.render(state || this.state);
	}

	show() {
		this.view.show();
	}

	hide() {
		this.view.hide();
	}

	/**
	 * Summary: This function will set the state to the previous state plus the new state passed as argument
	 * @param {Object} state state to be set on the model
	 */
	setState(state) {
		if (typeof state !== 'object') {
			throw new Error('The argument must be an object');
		}
		this.model.state = state;
	}

	get state() {
		return this.model.state;
	}
}

export default AbstractController;
