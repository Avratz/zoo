/**
 * Summary: Factory function to create new animals.
 * @param {AbstractAnimal} Animal instance of AbstractAnimal - The animal to create.
 * @param {String} sound to be spoken by the animal
 * @param {String} phrase to be assigned to the animal
 * @param {String} name of the animal
 * @param {String} src image of the animal
 * @returns {Animal} instance of AbstractAnimal - The animal created with the given parameters.
 */
function createAnimalFactory(Animal, { sound, phrase, name, src }) {
	if (
		typeof sound !== 'string' ||
		typeof phrase !== 'string' ||
		typeof name !== 'string' ||
		typeof src !== 'string'
	) {
		throw new Error('Please provide valids arguments');
	}

	return new Animal(sound, phrase, name, src);
}

export default createAnimalFactory;
