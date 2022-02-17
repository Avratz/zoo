import logger from '../services/logger';

class AbstractModel {
	#state;
	constructor(state = {}) {
		try {
			if (this.constructor === AbstractModel) {
				throw new Error(
					'This class is abstract and cannot be instantiated. Create a subclass and inherit from it.',
				);
			}

			this.#state = state;
		} catch (error) {
			logger.error(error);
		}
	}

	get state() {
		return this.#state;
	}

	/*
	 * Summary: Set the state to the previous state plus the new state passed as argument and call onStateChanged to trigger a re-render of the view.
	 * @param {Object} state new state of the model
	 */
	set state(state = {}) {
		this.#state = {
			...this.#state,
			...state,
		};
		this.onStateChanged(this.state);
	}

	/*
	 * Summary: This function will be called in the controller to bind the callback function to the onStateChanged.
	 * @param {Function} callback function to be called when the state changes
	 */
	bindOnStateChanged(callback) {
		this.onStateChanged = callback;
	}
}

export default AbstractModel;
