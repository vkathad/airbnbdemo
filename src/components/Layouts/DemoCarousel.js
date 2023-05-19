import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function DemoCarousel() {
  return (
    <Carousel showThumbs={false} showArrows={false}>
      <div>
        <button>like</button>
        <img
          className="rounded-xl"
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="firs"
        />
      </div>
      <div>
        <button>like</button>
        <img
          className="rounded-xl"
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="firs"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
    </Carousel>
  );
}
