import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../Swiper.css";
import "./Projects.css";

const Projects = () => {
	return (
		<div id="projects" className="carousel">
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
					<div className="slideContent project">michelleykim.github.io</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">Sketch-Connect</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">BlueNav</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">Ledge-it</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">Star Farm</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">Happy Hour</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">Spellrise</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Projects;
