import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "./Swiper.css";

const Projects = () => {
	return (
		<div className="carousel">
			<Swiper
				direction={"vertical"}
				loop={true}
				mousewheel={true}
				spaceBetween={30}
				slidesPerView={1.8}
				centeredSlides={true}
				pagination={{
					el: ".swiper-pagination",
					clickable: true,
				}}
				modules={[Pagination]}
				className="swiper"
			>
				<SwiperSlide className="slide">Slide 1</SwiperSlide>
				<SwiperSlide className="slide">Slide 2</SwiperSlide>
				<SwiperSlide className="slide">Slide 3</SwiperSlide>
				<SwiperSlide className="slide">Slide 4</SwiperSlide>
				<SwiperSlide className="slide">Slide 5</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Projects;
