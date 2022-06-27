import ImageGallery from "react-image-gallery";
import { Builder } from "@builder.io/react";

const images = [
  {
    original: "/images/product/product3.jpg",
    thumbnail: "/images/product/product3.jpg",
  },
  {
    original: "/images/product/product4.jpg",
    thumbnail: "/images/product/product4.jpg",
  },
  {
    original: "/images/product/product1.jpg",
    thumbnail: "/images/product/product1.jpg",
  },
  {
    original: "/images/product/product2.jpg",
    thumbnail: "/images/product/product2.jpg",
  },
];

const Component = () => {
  return (
    <ImageGallery
      showFullscreenButton={false}
      showPlayButton={false}
      startIndex={3}
      items={images}
      showThumbnails={true}
      renderLeftNav={(onClick, disabled) => {
        return (
          <button
            className="image-gallery-left-nav"
            disabled={disabled}
            onClick={onClick}
          />
        );
      }}
      renderRightNav={(onClick, disabled) => {
        return (
          <button
            className="image-gallery-right-nav"
            disabled={disabled}
            onClick={onClick}
          />
        );
      }}
    />
  );
};


Builder.registerComponent(Component, {
name: "Image Gallery",
  inputs: [],
});
