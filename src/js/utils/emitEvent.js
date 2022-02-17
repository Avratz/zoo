/**
 * Summary: function to emit events.
 * @param {String} eventName Event name to emit
 * @param {Object} data data to emit, by default empty object
 */
export default function emit(eventName, data = {}) {
	const event = new CustomEvent(eventName, {
		detail: data,
	});
	document.dispatchEvent(event);
}
