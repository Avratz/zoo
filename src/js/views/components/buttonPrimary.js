/**
 * Summary: button primary component.
 * @param {Object} props props of the component described below
 * @param {String} props.action action of the button
 * @param {String} props.text text of the button
 */
function buttonPrimary({ action = '', text = '' }) {
	return `
    <button class="btn__secondary" data-action="${action}">${text}</button>
  `;
}

export default buttonPrimary;
