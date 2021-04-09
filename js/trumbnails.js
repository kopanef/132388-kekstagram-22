import {createPhoto} from './utils.js';
import {getRandomInt} from './utils.js';

// Задача
// Отобразить фотографии других пользователей.

// На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

/* <template id="picture">
<a href="#" class="picture">
  <img
    class="picture__img"
    src=""
    width="182"
    height="182"
    alt="Случайная фотография"
  />
  <p class="picture__info">
    <span class="picture__comments"></span>
    <span class="picture__likes"></span>
  </p>
</a>
</template> */

const picture = document.querySelector('#picture');
const likes = picture.querySelector('.picture__likes')
const comments = picture.querySelector('.picture__comments')
const pictures = document.querySelector('.pictures');

// Адрес изображения url подставьте как src изображения.
picture.src(createPhoto)


// Количество лайков likes подставьте как текстовое содержание элемента .picture__likes.
likes.textContent(getRandomInt)

// Количество комментариев comments подставьте как текстовое содержание элемента .picture__comments.
comments.textContent(getRandomInt)

// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.
const AddPhoto = function () {
  const fragmentPhoto = document.createDocumentFragment(pictures)

  for (let i = 0; i < 20; i++) {
    fragmentPhoto.appendChild(picture[i]);
  }
}

// Подключите модуль в проект.
export { AddPhoto };

