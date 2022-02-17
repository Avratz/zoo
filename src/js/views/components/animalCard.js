import image from './image';

/**
 * Summary: animal card component.
 * @param {Object} props props of the component described below
 * @param {String} props.speak getter to speak with this animal sound
 * @param {String} props.action the action of the card
 * @param {String} props.name the name of the animal
 * @param {Number} props.id the id of the animal
 * @param {String} props.src the source of the image
 * @param {String} props.className optional class name of the animal card
 */
function animalCard({ speak, action = '', name = '', id, src, className = '' }) {
	return ` 
    <div class="card ${className}" data-action="${action}" data-id="${id}">
      ${
				speak !== undefined
					? `<div class="card__tooltip" data-action="tooltip">
          ${speak}
        </div>`
					: ''
			}
      <div class="card__body">
        ${image({ src, alt: name, className: 'card__image' })}
      </div>
      ${name !== undefined || name !== '' ? `<h3 class="card__title">${name}</h3>` : ''}
    </div>
  `;
}

export default animalCard;
