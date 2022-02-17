import lionImg from '../../assets/images/lion.png';
import tigerImg from '../../assets/images/tiger.png';
import elephantImg from '../../assets/images/elephant.png';
import chewieImg from '../../assets/images/chewie.png';
import bearImg from '../../assets/images/bear.png';
import snakeImg from '../../assets/images/snake.png';
import wolfImg from '../../assets/images/wolf.png';
import owlImg from '../../assets/images/owl.png';

import Lion from '../animals/Lion';
import Tiger from '../animals/Tiger';
import Elephant from '../animals/Elephant';
import Wookie from '../animals/Wookie';
import Bear from '../animals/Bear';
import Snake from '../animals/Snake';
import Wolf from '../animals/Wolf';
import Owl from '../animals/Owl';

const animalsAvailable = [
	{
		id: 1,
		sound: 'WHRAAHHGH',
		name: 'Wookie',
		action: 'newAnimal',
		src: chewieImg,
		class: Wookie,
	},
	{
		id: 2,
		sound: 'RAA',
		name: 'Lion',
		action: 'newAnimal',
		src: lionImg,
		class: Lion,
	},
	{
		id: 3,
		sound: 'HISS',
		name: 'Snake',
		action: 'newAnimal',
		src: snakeImg,
		class: Snake,
	},
	{
		id: 4,
		sound: 'ROAR',
		name: 'Tiger',
		action: 'newAnimal',
		src: tigerImg,
		class: Tiger,
	},
	{
		id: 5,
		sound: 'GRRR',
		name: 'Bear',
		action: 'newAnimal',
		src: bearImg,
		class: Bear,
	},
	{
		id: 6,
		sound: 'UUGH',
		name: 'Elephant',
		action: 'newAnimal',
		src: elephantImg,
		class: Elephant,
	},
	{
		id: 7,
		sound: 'HOOT HOOT',
		name: 'Owl',
		action: 'newAnimal',
		src: owlImg,
		class: Owl,
	},
	{
		id: 8,
		sound: 'AUUU',
		name: 'Wolf',
		action: 'newAnimal',
		src: wolfImg,
		class: Wolf,
	},
];

export default animalsAvailable;
