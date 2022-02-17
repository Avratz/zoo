import AbstractAnimal from './AbstractAnimal';

/**
 * Summary: This is a concrete class that defines a Snake that inherits from AbstractAnimal class.
 * @constructor
 */
class Snake extends AbstractAnimal {
	constructor(sound, phrase, name, src) {
		super(sound, phrase, name, src);
	}
}

export default Snake;
