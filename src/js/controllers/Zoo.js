import AbstractController from './AbstractController';
import AbstractAnimal from '../animals/AbstractAnimal';

import logger from '../services/logger';

class ZooController extends AbstractController {
	/**
	 * Summary: this constructor must be called with instances of the AbstractView and AbstractModel
	 * @param {AbstractModel} zooModel the zoo model
	 * @param {AbstractView} zooView the zoo view
	 */
	constructor(zooModel, zooView) {
		super(zooModel, zooView);

		document.addEventListener('ADD_NEW_ANIMAL', ({ detail }) => this.addNewAnimalToTheZoo(detail));
		this.model.bindOnStateChanged(this.onStateChanged);
	}

	onStateChanged = (state) => {
		this.render(state);
		this.bindActions();
	};

	show() {
		this.render();
		this.bindActions();
	}

	bindActions() {
		this.view.bindAddNew(() => this.emit('SHOW_MODAL_ANIMAL'));
	}

	/**
	 * Summary: Adds a new animal to the zoo.
	 * @param {AbstractAnimal} animal the animal instance to add to the zoo
	 * @returns {void}
	 */
	addNewAnimalToTheZoo(animal) {
		try {
			if (!(animal instanceof AbstractAnimal)) {
				throw new Error('The argument must be an instance of AbstractAnimal');
			}

			this.setState({
				animalsInTheZoo: [...this.state.animalsInTheZoo, animal],
			});
		} catch (error) {
			logger.error(error);
		}
	}
}

export default ZooController;
