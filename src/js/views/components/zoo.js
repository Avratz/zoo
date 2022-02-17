import buttonPrimary from './buttonPrimary';
import animalCard from './animalCard';
import empty from './Empty';

/**
 * Summary: zoo component.
 * @param {Object} props props of the component described below
 * @param {Array} props.animalsInTheZoo array of animals in the zoo
 */
function zoo({ animalsInTheZoo = [] }) {
	return `
    <div class="zoo__content">
      ${
				animalsInTheZoo.length > 0
					? animalsInTheZoo.map((animal) => animalCard(animal)).join('')
					: empty()
			}
    </div>
    ${buttonPrimary({ text: 'Add an animal', action: 'addNew' })}
  `;
}

export default zoo;
