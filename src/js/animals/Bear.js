import AbstractAnimal from './AbstractAnimal';

/**
 * Summary: This is a concrete class that defines a Bear that inherits from AbstractAnimal class.
 * @constructor
 */
class Bear extends AbstractAnimal {
	constructor(sound, phrase, name, src) {
		super(sound, phrase, name, src);
	}
}

export default Bear;
