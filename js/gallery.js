const images = [
    {
        preview: 'images/pudge.jpg',
        original: 'images/pudge.jpg',
        description: 'Pudge',
    },
    {
        preview: 'images/morph.jpg',
        original: 'images/morph.jpg',
        description: 'Morphling',
    },
    {
        preview: 'images/puck.jpg',
        original: 'images/puck.jpg',
        description: 'Puck',
    },
    {
        preview: 'images/am.jpg',
        original: 'images/am.jpg',
        description: 'Anti-Mage',
    },
    {
        preview: 'images/slark.jpg',
        original: 'images/slark.jpg',
        description: 'Slark',
    },
    {
        preview: 'images/storm_spirit.png',
        original: 'images/storm_spirit.png',
        description: 'Storm Spirit',
    },
    {
        preview: 'images/templar_assasin.jpg',
        original: 'images/templar_assasin.jpg',
        description: 'Templar Assassin',
    },
    {
        preview: 'images/wr.jpg',
        original: 'images/wr.jpg',
        description: 'Windranger',
    },
    {
        preview: 'images/wd.png',
        original: 'images/wd.png',
        description: 'Witch doctor',
    },
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => {
    return `<li>
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`;
}).join('');

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') return;

    const largeImageURL = event.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${largeImageURL}" width="800" height="600">
    `);

    instance.show();
});