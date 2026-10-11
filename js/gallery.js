const images = [
   {
      preview:
         "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
      original:
         "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
      description: "Hokkaido Flower",
   },
   {
      preview:
         "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
         "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
   },
   {
      preview:
         "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
         "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
   },
   {
      preview:
         "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
         "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
   },
   {
      preview:
         "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
         "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
   },
   {
      preview:
         "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
         "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
   },
   {
      preview:
         "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
         "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
   },
   {
      preview:
         "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
         "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
   },
   {
      preview:
         "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
         "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
   },
];

let gallery = document.querySelector('.gallery');
let formular = document.createDocumentFragment();

Object.assign(gallery.style, {
   display: 'flex',
   margin: '0 auto',
   maxWidth: '1200px',
   listStyleType: 'none',
   gap: '24px',
   flexWrap: 'wrap',
})

for (let { preview, original, description } of images) {
   let li = document.createElement('li');
   li.classList.add('gallery-item');
   li.innerHTML = `
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
   let imgLi = li.querySelector('img');
   imgLi.style.width = '360px';
   imgLi.style.height = '200px'

   formular.append(li)
}

gallery.append(formular)
const moduleBox = basicLightbox.create(`<img src="" alt="" class="module-box"></img>`);

gallery.addEventListener('click', key => {
   key.preventDefault();
   if (key.target.tagName == "IMG") {
      console.log(key.target.getAttribute('data-source'));
      moduleBox.element().querySelector('img').setAttribute('src', key.target.getAttribute('data-source'))
      moduleBox.show()
   }
})

