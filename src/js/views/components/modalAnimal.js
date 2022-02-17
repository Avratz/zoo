import animalCard from './animalCard';
import buttonPrimary from './buttonPrimary';
import image from './image';
import input from './input';
import close from '../../../assets/images/close.png';

/**
 * Summary: modal animal component.
 * @param {Object} props props of the component described below
 * @param {String} props.title title of the modal
 * @param {String} props.subtitle description of the modal
 * @param {Object} props.selectedAnimal the selected animal
 * @param {Array} props.animalsAvailable the animals available to add to the zoo
 */
function modalAnimal({ title, subtitle, selectedAnimal, animalsAvailable }) {
	return `
    <div class="modal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
      <div class="modal__header">
        <div class="modal__header__bg"></div>
        <div class="modal__close" data-action="close">${image({ src: close, alt: '' })}</div>
        ${title ? `<h5 class="modal__title" id="modalTitle">${title}</h5>` : ''}  
        ${subtitle ? `<p class="modal__subtitle" id="modalDescription">${subtitle}</p>` : ''}
      </div>
      <div class="modal__body">
          ${
						selectedAnimal
							? animalCard(selectedAnimal)
							: animalsAvailable
							? animalsAvailable.map((animal) => animalCard(animal)).join('')
							: ''
					}
      </div>
      <div class="modal__footer">
        ${
					selectedAnimal
						? input({
								type: 'text',
								name: 'phrase',
								placeholder: 'Set a new phrase',
								className: 'input__default',
								id: 'phrase',
								label: 'Phrase',
						  })
						: ''
				}
        ${selectedAnimal ? buttonPrimary({ action: 'save', text: 'Save' }) : ''}
      </div>
    </div>
  `;
}

export default modalAnimal;
