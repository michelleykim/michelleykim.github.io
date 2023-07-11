import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../Swiper.css";

const About = () => {
	return (
		<div id="about" className="carousel">
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
					<div className="slideContent">
						<p>Welcome to my corner of the internet!</p>
						<p>
							I am a student at the University of British Columbia pursuing
							bachelor in Computer Science and masters in Business Management.
						</p>
						<p>I love to design and node for people.</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent">
						<p>When I'm not coding,</p>
						<p>
							I'm excercising, organizing hackathons, learning languages, or
							making music.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent">
						<p>Let's connect!</p>
						<p>email</p>
						<p>github</p>
						<p>linkedin</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default About;
