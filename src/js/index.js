import '../scss/main.scss';

import ZooController from './controllers/Zoo';
import ZooModel from './models/Zoo';
import ZooView from './views/Zoo';

import ModalAnimalController from './controllers/ModalAnimal';
import ModalAnimalModel from './models/ModalAnimal';
import ModalAnimalView from './views/ModalAnimal';

import animalsAvailable from './constants/animalsAvailable';
import logger from './services/logger';

import AbstractModel from './models/AbstractModel';
import AbstractView from './views/AbstractView';

class App {
	#modalAnimal;
	#zoo;
	/**
	 * Summary: Initialize the application with instances of the ModalAnimalController and ZooController
	 * @param {ModalAnimalController} modalAnimal
	 * @param {ZooController} zoo
	 */
	constructor(modalAnimal, zoo) {
		try {
			if (!(modalAnimal instanceof ModalAnimalController)) {
				throw new Error('modalAnimal is not an instance of ModalAnimalController');
			}
			if (!(zoo instanceof ZooController)) {
				throw new Error('zoo is not an instance of ZooController');
			}

			this.#modalAnimal = modalAnimal;
			this.#zoo = zoo;
		} catch (error) {
			logger.error(error);
		}
	}

	get modalAnimal() {
		return this.#modalAnimal;
	}

	get zoo() {
		return this.#zoo;
	}
}

/**
 * Summary: Initializes a new controller with instances of the AbstractModel and AbstractView.
 * @param {ModalAnimalController | ZooController} Controller Controller to be initialized
 * @param {AbstractModel} model an instance of AbstractModel
 * @param {AbstractView} view  an instance of AbstractView
 * @returns {AbstractController} an instance of AbstractController
 */
function createController(Controller, model, view) {
	try {
		if (Controller !== ModalAnimalController && Controller !== ZooController) {
			throw new Error('Controller is not a valid controller');
		}
		if (!(model instanceof AbstractModel)) {
			throw new Error('Model is not an instance of AbstractModel');
		}
		if (!(view instanceof AbstractView)) {
			throw new Error('View is not an instance of AbstractView');
		}

		return new Controller(model, view);
	} catch (error) {
		logger.error(error);
	}
}

const modalAnimal = createController(
	ModalAnimalController,
	new ModalAnimalModel({
		animalsAvailable,
		title: 'Select an animal',
	}),
	new ModalAnimalView('#Modal'),
);

const zoo = createController(
	ZooController,
	new ZooModel({
		animalsInTheZoo: [],
	}),
	new ZooView('#Zoo'),
);

const app = new App(modalAnimal, zoo);

app.zoo.show();

export default app;
