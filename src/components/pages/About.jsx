import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../Swiper.css";

const About = () => {
	return (
		<div className="carousel">
			<Swiper
				direction={"vertical"}
				mousewheel={true}
				spaceBetween={30}
				slidesPerView={1.95}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Mousewheel, Pagination]}
				className="swiper"
			>
				<SwiperSlide className="slide">
					<div className="slideContent">Slide a</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent">Slide b</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent">Slide c</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default About;
