var imagesContainer = document.getElementById('images-container');

// arrays de las promociones: alumnas
var chile4Promo = ['anais-araya','andrea-miranda', 'berenisse-rios','caterina-da-silva'];
var lima5Promo = ['andrea-cabrera', 'ariadna-izaguirre', 'karol-orrillo'];
var lima6Promo = ['rosario-felix','mishel-velasquez','grecia-rayme'];

// agrega imagenes de todas las promos
function addImages(arrayPromo, sede) {
  for (var i = 0; i < arrayPromo.length; i++) {
    createImage(arrayPromo[i], sede);
  }
}
// crea una imagen de la alumna
function createImage(name, promo) {
  var image = document.createElement('img');
  image.setAttribute('src','assets/images/' + promo + '/' + name + '.jpg');
  image.setAttribute('alt', name);
  imagesContainer.appendChild(image);
}

addImages(chile4Promo, '4-chile');
addImages(lima5Promo, '5-lima');
addImages(lima6Promo, '6-lima');

