/**
 * Summary: Basic Input component.
 * @param {Object} props props of the component described below
 * @param {String} props.type the type of the input
 * @param {String} props.name the name of the input
 * @param {String} props.value the value of the input
 * @param {String} props.placeholder the placeholder of the input
 * @param {String} props.className the class name of the input
 * @param {String} props.id the id of the input
 * @param {String} props.label the label of the input
 */
function input({
	type = 'text',
	name,
	value = '',
	placeholder = '',
	className = '',
	id,
	label = '',
}) {
	return /*html */ `
    <label for="${id}" class="label input__default ${className}">
      ${label}
      <input 
        type="${type}"
        id="${id}" 
        class="input input__default ${className}" 
        name="${name}"
        value="${value}" 
        placeholder="${placeholder}"
      />
    </label>
  `;
}

export default input;
