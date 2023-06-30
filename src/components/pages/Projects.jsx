import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../Swiper.css";

const Projects = () => {
	return (
		<div className="carousel">
			<Swiper
				direction={"vertical"}
				loop={true}
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
					<div className="slideContent">Slide 1</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent">Slide 2</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent">Slide 3</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent">Slide 4</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent">Slide 5</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Projects;
