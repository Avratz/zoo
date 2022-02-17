import AbstractAnimal from './AbstractAnimal';

/**
 * Summary: This is a concrete class that defines a lion that inherits from AbstractAnimal class.
 * @constructor
 */
export class Lion extends AbstractAnimal {
	constructor(sound, phrase, name, src) {
		super(sound, phrase, name, src);
	}
}

export default Lion;
