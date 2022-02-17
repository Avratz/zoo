import AbstractAnimal from './AbstractAnimal';

/**
 * Summary: This is a concrete class that defines a tiger that inherits from AbstractAnimal class.
 * @constructor
 */
class Tiger extends AbstractAnimal {
	constructor(sound, phrase, name, src) {
		super(sound, phrase, name, src);
	}
}

export default Tiger;
