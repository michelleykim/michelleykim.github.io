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
					<div className="slideContent project">
						<p>michelleykim.github.io</p>
						<p>a portfolio website designed and created entirely by myself</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p>Sketch-Connect</p>
						<p>collaborate with friends to make an artwork together</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p>BlueNav</p>
						<p>making navigating degree requirements easy for UBC students</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p>Ledge-it</p>
						<p>making managing finance easy for university students</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p>Happy Hour</p>
						<p>making organizing group events easy with google calendar sync</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p>Spellrise</p>
						<p>become a powerful magician in search of lost memories</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p>Star Farm</p>
						<p>a pixel art, resource management adventure for everyone</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Projects;
