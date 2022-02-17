import AbstractModel from './AbstractModel';

class ZooModel extends AbstractModel {
	constructor(state) {
		super({ ...state, animalsInTheZoo: [] });
	}
}

export default ZooModel;
