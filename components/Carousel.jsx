//carousels/Bootstrap.js
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Box } from "@mui/system";

const projects = [
  {
    id: 1,
    title: "Photography",
    body: "Bootstrap Carousel Example",
    imageUrl: "/../public/assets/bg2.jpg",
    docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
  },
  {
    id: 2,
    title: "City Views",
    body: "Bootstrap Carousel Example",
    imageUrl: "/../public/assets/bg.jpg",
    docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
  },
  {
    id: 3,
    title: "Wild Life",
    body: "Bootstrap Carousel Example",
    imageUrl: "/../public/assets/bg2.jpg",
    docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
  },
  {
    id: 4,
    title: "Foods and Culture",
    body: "Bootstrap Carousel Example",
    imageUrl: "/../public/assets/bg.jpg",
    docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
  },
];

export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Box>
      <Carousel onSelect={handleSelect}>
        {projects.map((item) => (
          <Carousel.Item key={item.id} interval={4000}>
            <Image src={item.imageUrl} alt="slides" height={800} width={1000} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}
