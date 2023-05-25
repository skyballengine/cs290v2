import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/beginning-bed-prep-catksill.jpg',
        thumbnail: 'images/beginning-bed-prep-catksill.jpg',
        description: `Preparing the beds at the Catskill Montessori School`,
        originalHeight: '450px',
    },
    {
        original: 'images/finish-bed-prep-catskill.jpg',
        thumbnail: 'images/finish-bed-prep-catskill.jpg',
        description: `Finished preparing the beds`,
        originalHeight: '450px',
    },
    {
        original: 'images/unplanted-field-birdseye-sunset-hi.jpg',
        thumbnail: 'images/unplanted-field-birdseye-sunset-hi.jpg',
        description: `Finished bed preparation at Himalayan Institute`,
        originalHeight: '450px',
    },
    {
        original: 'images/unplanted-field-front-hi.jpg',
        thumbnail: 'images/unplanted-field-front-hi.jpg',
        description: `Planting holes have been dug`,
        originalHeight: '450px',
    },
    {
        original: 'images/planting-kids-hi.jpg',
        thumbnail: 'images/planting-kids-hi.jpg',
        description: `Planting the groundcover plants with my kids`,
        originalHeight: '450px',
    },
    {
        original: 'images/blue-sky-transplanting-hi.jpg',
        thumbnail: 'images/blue-sky-transplanting-hi.jpg',
        description: `Transplanting trees and shrubs on a beautiful day`,
        originalHeight: '450px',
    },
    {
        original: 'images/finished-planting-groundview-hi.jpg',
        thumbnail: 'images/finished-planting-groundview-hi.jpg',
        description: `Completed the planting process and installed tree protection`,
        originalHeight: '450px',
    },
    {
        original: 'images/planted-field-back-hi.jpg',
        thumbnail: 'images/planted-field-back-hi.jpg',
        description: `The planting has been completed with a view of the Himalayan Institute building in the background`,
        originalHeight: '450px',
    },
    {
        original: 'images/biodiversity-plants-flowers-2.jpg',
        thumbnail: 'images/biodiversity-plants-flowers-2.jpg',
        description: `Resulting biodiversity after planting`,
        originalHeight: '450px',
    },
    {
        original: 'images/biodiversity-plants-flowers-3.jpg',
        thumbnail: 'images/biodiversity-plants-flowers-3.jpg',
        description: `More plants and flowers after project completion`,
        originalHeight: '450px',
    },
]

function GalleryPage() {
    return (
        <>
        <section className="react-gallery-section">
            <h2>
                Gallery
            </h2>
            <p>Plantings Gallery</p>
            <article className="react-gallery-article">
                <ImageGallery items={images} />
            </article>
        </section>
        </>
    );
}
export default GalleryPage;