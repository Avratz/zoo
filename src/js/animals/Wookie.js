import AbstractAnimal from './AbstractAnimal';

/**
 * Summary: This is a concrete class that defines a Wookie that inherits from AbstractAnimal class.
 * @constructor
 */
class Wookie extends AbstractAnimal {
	constructor(sound, phrase, name, src) {
		super(sound, phrase, name, src);
	}
}

export default Wookie;
