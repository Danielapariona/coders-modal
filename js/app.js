var imagesContainer = document.getElementById('images-container');

// constantes de dir promo
var CHILE4PRO = '4-chile';
var LIMA5PRO = '5-lima';
var LIMA6PRO = '6-lima';

// arrays de las promociones: alumnas
var chile4Promo = ['anais-araya','andrea-miranda', 'berenisse-rios','caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var lima5Promo = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var lima6Promo = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

// agrega imagenes de todas las promos
function addImages(arrayPromo, sede) {
  for (var i = 0; i < arrayPromo.length; i++)
    createImage(arrayPromo[i], sede);
}

// crea una imagen de la alumna
function createImage(name, promo) {
  var image = document.createElement('img');

  image.setAttribute('src','assets/images/' + promo + '/' + name + '.jpg');
  image.setAttribute('alt', name);
  imagesContainer.appendChild(image);
}

addImages(chile4Promo, CHILE4PRO);
addImages(lima5Promo, LIMA5PRO);
addImages(lima6Promo, LIMA6PRO);
