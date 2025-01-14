"use client";
import { useEffect, useState } from "react";
import style from "./images-slideshow.module.css";

import project11 from "../../assets/project-fraerm1.webp";
import project12 from "../../assets/project-fraerm2.webp";
import project13 from "../../assets/project-fraerm3.webp";
import project21 from "../../assets/project-food-menu1.webp";
import project22 from "../../assets/project-food-menu2.webp";
import project23 from "../../assets/project-food-menu3.webp";
import project31 from "../../assets/project-todo1.webp";
import project32 from "../../assets/project-todo2.webp";
import project33 from "../../assets/project-todo3.webp";

const images = [
  { image: project11, alt: "A picture of project" },
  { image: project12, alt: "A picture of project" },
  { image: project13, alt: "A picture of project" },
  { image: project21, alt: "A picture of project" },
  { image: project22, alt: "A picture of project" },
  { image: project23, alt: "A picture of project" },
  { image: project31, alt: "A picture of project" },
  { image: project32, alt: "A picture of project" },
  { image: project33, alt: "A picture of project" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.slideshow}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          className={index === currentImageIndex ? style.active : ""}
          alt={image.alt}
          width={364}
          height={400}
          priority
        />
      ))}
    </div>
  );
}
