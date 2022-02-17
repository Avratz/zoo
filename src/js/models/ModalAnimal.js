import AbstractModel from './AbstractModel';

class ModalAnimalModel extends AbstractModel {
	constructor(state) {
		super(state);
	}

	/**
	 * Summary: Searches the animal by id in the state, and returns it.
	 * @param {String|Number} id id of the animal
	 * @returns
	 */
	getAnimalById(id) {
		return this.state.animalsAvailable.find((animal) => animal.id === Number(id));
	}
}

export default ModalAnimalModel;
