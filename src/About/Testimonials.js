import React from "react";
import image from "./Images/Quotation.png";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      <section className="testimonial container section">
        <div>
          <h2 className="section_title">People Talks About Me!</h2>
          <p className="section_subtitle">
            Some of my beloved colleagues and clients talk about me.
          </p>
        </div>
        <Swiper
          className="testimonial_container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 48,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {Data.map(({ id, designation, title, description }) => {
            return (
              <SwiperSlide className="testimonial_card" key={id}>
                <img src={image} alt="" className="testimonial_img"></img>
                <p className="testimonial_description">{description}</p>
                <h3 className="testimonial_name">{title}</h3>
                <h5 className="designstion">{designation}</h5>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
