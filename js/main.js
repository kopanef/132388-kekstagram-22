// Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:
// имя_функции(от, до); // Результат: целое число из диапазона "от...до"
// Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.

function getRandomInt(min, max ) {
  if (min >= max) {
    return 'nothing'
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
getRandomInt (0, 150)


// Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:
// имя_функции(проверяемая_строка, максимальная длина); // Результат: true, если строка проходит по длине, и false — если не проходит

let CheckLength = function (string, maxLenght) {
  if (string.length <= maxLenght) {
    return true;
  } else {
    return false;
  }
};
CheckLength('Test-of-text', 1000);


const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USERS = [
  'Димитрий',
  'Светлана Волшебная',
  'Акакий Акакиевич',
  'Семён Павлович',
  'Августина Леонидовна',
  'Потап Дмитриевич',
];


const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};


const PHOTO_COUNT = 25;

let createComment = function () {
  return { id: getRandomInt (201, 10000000000),
    avatar: 'img/avatar-' + getRandomInt (1, 25) + '.svg',
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(USERS),
  };
};


let createPhoto = function (index) {
  return {
    id: index + 1,
    url: 'photos/' + ( index + 1 ) + '.jpg',
    description: 'Умный кот',
    likes: getRandomInt (15, 200),
    comments: createComment(),
  };
};

new Array(PHOTO_COUNT).fill(null).map((element, index) => createPhoto(index));

// console.log(createPhoto(1));





