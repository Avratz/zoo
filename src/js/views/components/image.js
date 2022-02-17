/**
 * Summary: Image component.
 * @param {Object} props props of the component described below
 * @param {String} props.src the source of the image
 * @param {String} props.alt the alternative text of the image
 * @param {String} props.className the class name of the image
 */
function image({ src, alt = '', className = '' }) {
	return `
    <picture class="image__default ${className}">
      <img src=${src} alt=${alt}/>
    </picture>
  `;
}

export default image;
