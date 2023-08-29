// Напишите функцию которая может перебрать такой массив и отфильтрует его оставив только имена файлов с расширениями .js .jsx .ts
const fileNames = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const regexp1 = /\.js\b|\.jsx\b|\.ts\b/g;

const sortedFileNames = fileNames.filter(name => regexp1.test(name));
console.log('sortedFileNames: ', sortedFileNames);

/*
2. Напишите регулярное выражение, которое находит email адреса:
До символа @ email может содержать не менее одного символа класса \w.
После символа @ и до .(точки), после которой начинается домен, может содержать только буквы и быть не короче трех символов.
После .(точки) может содержать только буквы и быть от 2 до 5 символов в длину.

Примеры валидные: info@methed.ru, max24@mail.com, java_script@google.io
Примеры не валидные: my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz
*/

const address = ['info@methed.ru', 
                  'infoKal@kgd.com', 
                  'max24@mail.com', 
                  'max24@yandex.com', 
                  'alex62@mail.com',
                  'founder_98@yahoo.ru', 
                  'java_script@google.io', 
                  'my-mail@yandex.ru', 
                  'tom_yam@ya.ru', 
                  'zero@mai1.xyz'
                ];

const regexp2 = /^\w+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}$/g;

const sortedAddress = address.filter(value => {
  return value.match(regexp2);
  // return regexp2.test(value);
});
console.log('sortedAddress: ', sortedAddress);

// const test = regexp2.test(address[1]);
// console.log('test: ', test);

// const match = address[1].match(regexp2);
// console.log('match: ', match);


/*
3. Напишите регулярное выражение, которое находит текст в скобках
*/

const newText = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';

const regexp3 = /\(.+?\)/g;

const brackets = newText.match(regexp3);
console.log('brackets: ', brackets);

/*
Напишите функцию которая принимает строку, в этой строке находит url адрес и заменяет с помощью replace на тег
домены вида http://site.ru, https://site.com на
*/

const html = 'https://google.ru' ;


// находим URL
const regexp = /\b(http[s]\S+)\b/g;
const match = html.match(regexp);

// вытаскиваем название ссылки
const regexp4 = /(http[s]:\/\/)/g;
const rename = match.toString().replace(regexp4, '');;


// вытаскиваем протокол http или https
const re = /\/\//g;
const protocol = match.toString().split(re);


// заменяем на нужный вид
result = `<a href="${protocol[0]}//${protocol[1]}">${rename}></a>`
console.log(result);