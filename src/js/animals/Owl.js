import AbstractAnimal from './AbstractAnimal';

/**
 * Summary: This is a concrete class that defines a Owl that inherits from AbstractAnimal class.
 * @constructor
 */
class Owl extends AbstractAnimal {
	constructor(sound, phrase, name, src) {
		super(sound, phrase, name, src);
	}
}

export default Owl;
