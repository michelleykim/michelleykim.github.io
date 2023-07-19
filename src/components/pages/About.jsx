import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../Swiper.css";
import "./About.css";

const About = () => {
	return (
		<div id="abouts" className="carousel">
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
					<div className="slideContent about">
						<p className="title">Hi, I'm Michelle!👋</p>
						<p className="subtitle">
							I am a student at the University of British Columbia pursuing{" "}
							<b style={{ fontWeight: "bold" }}>
								bachelor in Computer Science and masters in Business Management
							</b>{" "}
							dual degree program.
						</p>
						<p
							className="subtitle"
							style={{ fontSize: "24px", fontStyle: "italic" }}
						>
							<i>I design and code for people.</i>
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent about">
						<p className="title">When I'm not coding,</p>
						<p className="subtitle">🥋 I'm excercising</p>
						<p className="subtitle">📅 I'm planning hackathons</p>
						<p className="subtitle">🌏 I'm learning languages</p>
						<p className="subtitle">🎵 I'm making music</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent about">
						<p className="title">Let's connect!</p>
						<a href="mailto:yeojin011016@gmail.com?subject=Me&body=Sent from michelleykim.github.io!">
							📌 email
						</a>
						<a href="https://github.com/michelleykim">📌 GitHub</a>
						<a href="https://www.linkedin.com/in/michelle-yeojin-kim/">
							📌 LinkedIn
						</a>
						<p className="subtitle">
							<br />
							... or play some claw machine games 👀
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default About;
