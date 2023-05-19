import React from "react";

export const Image = React.memo(({ src, alt }) => {
    console.log('Rendering Image:', src);
    return <img src={src} alt={alt} />;
});
