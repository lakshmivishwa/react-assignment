import React from "react";
import { Image } from "../ImageCompnent/ImageComponent";
const ImageGallery = ({ images }) => {
    console.log('Rendering ImageGallery'); // For demonstration purposes

    return (
        <div>
            {images.map((image, index) => (
                <Image key={index} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
};

export default ImageGallery;
