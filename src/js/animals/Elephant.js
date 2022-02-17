import AbstractAnimal from './AbstractAnimal';

/**
 * Summary: This is a concrete class that defines a Elephant that inherits from AbstractAnimal class.
 * @constructor
 */
class Elephant extends AbstractAnimal {
	constructor(sound, phrase, name, src) {
		super(sound, phrase, name, src);
	}
}

export default Elephant;
