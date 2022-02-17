import AbstractAnimal from './AbstractAnimal';

/**
 * Summary: This is a concrete class that defines a Wolf that inherits from AbstractAnimal class.
 * @constructor
 */
class Wolf extends AbstractAnimal {
	constructor(sound, phrase, name, src) {
		super(sound, phrase, name, src);
	}
}

export default Wolf;
