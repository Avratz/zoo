import image from './image';
import emptyImg from '../../../assets/images/empty.png';

function empty() {
	return `
    <div class="empty">
      ${image({ src: emptyImg, alt: '', className: 'empty__picture' })}
      <h2 class="empty__header">The zoo is empty</h2>
    </div>
  `;
}

export default empty;
