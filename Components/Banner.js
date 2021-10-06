import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Banner() {
  return (
    <div className="relative">
    
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={2000}
        showArrows={false}
        >
            <div>
                <img loading="lazy" src="/pic1.jpg"/>
            </div>
            <div>
                <img  loading="lazy" src="/pic2.jpg" />
            </div>
            <div>
                <img loading="lazy" src="/pic3.jpg" />
            </div>
        </Carousel>
      </div>
   
  );
}

export default Banner;
