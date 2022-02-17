import AbstractController from './AbstractController';
import createAnimalFactory from '../animals';
import logger from '../services/logger';

class ModalAnimalController extends AbstractController {
	/**
	 * Summary: this constructor must be called with instances of the AbstractView and AbstractModel
	 * @param {AbstractModel} modalModel the modal model
	 * @param {AbstractView} modalView the modal view
	 */
	constructor(modalModel, modalView) {
		super(modalModel, modalView);
		document.addEventListener('SHOW_MODAL_ANIMAL', this.show);

		this.model.bindOnStateChanged(this.onStateChanged);
	}

	onStateChanged = (state) => {
		this.render(state);
		this.bindActions();
	};

	show = () => {
		this.render();
		this.bindActions();
	};

	hide() {
		this.setState({
			title: 'Select an animal',
			selectedAnimal: null,
		});
		super.hide();
	}

	bindActions() {
		this.view.bindSelectedAnimal(this.onSelectedAnimal);
		this.view.bindSaveAnimal(this.onSavedAnimal);
		this.view.bindCloseModal(this.onCloseModal);
	}

	/**
	 * Summary: Searchs the animal selected in the model, and set the state of the view with the animal selected.
	 * @param {Element} $animal
	 */
	onSelectedAnimal = ($animal) => {
		try {
			const id = $animal?.dataset?.id;

			if (id === undefined) {
				throw new Error('The animal does not have an id');
			}

			const animal = this.model.getAnimalById(id);

			if (animal === undefined) {
				throw new Error(`Animal with the id '${id}' was not found in the state`);
			}

			this.setState({
				selectedAnimal: animal,
				title: `What does the ${animal.name} say?`,
				subtitle: `You can assign a custom phrase for the ${animal.name}.`,
			});
		} catch (error) {
			logger.error(error);
		}
	};

	/**
	 * Summary: Create a new instance of the animal selected, and emit an event with the new animal and hides the view.
	 * @param {String} phrase the phrase to be assigned to the animal
	 */
	onSavedAnimal = (phrase) => {
		const animalSelected = this.state.selectedAnimal;
		const animalCreated = createAnimalFactory(animalSelected.class, { ...animalSelected, phrase });

		this.emit('ADD_NEW_ANIMAL', animalCreated);
		this.hide();
	};

	onCloseModal = () => {
		this.hide();
	};
}

export default ModalAnimalController;
