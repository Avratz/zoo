import logger from '../services/logger';

/**
 * Summary: This is an abstract class that defines an animal.
 */
class AbstractAnimal {
	#sound = '';
	#phrase = '';
	#name = '';
	#src = '';
	#action = 'animal';
	#id = null;
	/**
	 * Summary: This constructor must be called with a phrase, name, sound and src.
	 * @param {String} sound sound of the animal
	 * @param {String} phrase phrase of the animal
	 * @param {String} name name of the animal
	 * @param {String} src image source of the animal
	 */
	constructor(sound, phrase, name, src) {
		try {
			if (this.constructor === AbstractAnimal) {
				throw new Error(
					'This class is abstract and cannot be instantiated. Try to create a subclass and inherit from it.',
				);
			}

			if (typeof sound !== 'string') {
				throw new Error('The sound must be a string');
			}

			if (typeof phrase !== 'string') {
				throw new Error('The phrase must be a string');
			}

			if (typeof name !== 'string') {
				throw new Error('The name must be a string');
			}

			if (typeof src !== 'string') {
				throw new Error('The src must be a string');
			}

			this.#sound = sound;
			this.#phrase = phrase;
			this.#name = name;
			this.#src = src;
			this.#id = new Date().getTime();
		} catch (error) {
			logger.error(error);
		}
	}

	/**
	 * Summary: Calls the private method #speakWithAnimalSound with the provided phrase.
	 * @param {String} phrase A phrase to be spoken by the animal
	 */
	get speak() {
		return this.#speakWithAnimalSound;
	}

	/**
	 * Summary: This method is used to set the phrase of the animal.
	 * @param {String} phrase A phrase to be spoken by the animal
	 */
	setPhrase(phrase) {
		this.#animalPhrase = phrase;
	}

	get name() {
		return this.#name;
	}

	get src() {
		return this.#src;
	}

	get action() {
		return this.#action;
	}

	get id() {
		return this.#id;
	}

	// #region private

	set #animalPhrase(phrase) {
		try {
			if (typeof phrase !== 'string') {
				throw new Error('Please provide a phrase of type string');
			}

			this.#phrase = phrase.trim();
		} catch (error) {
			logger.error(error);
		}
	}

	get #animalPhrase() {
		return this.#phrase;
	}

	/**
	 * Summary: Transform the phrase of the animal to a string interspersed with the #animalSound defined in the constructor.
	 * @private
	 * @returns {String} The given phrase interspersed with the #animalSound
	 */
	get #speakWithAnimalSound() {
		try {
			return this.#animalPhrase
				.replaceAll(' ', ` ${this.#sound} `)
				.concat(` ${this.#sound}`)
				.trim();
		} catch (error) {
			logger.error(error);
			return this.#sound;
		}
	}

	// #endregion
}

export default AbstractAnimal;
