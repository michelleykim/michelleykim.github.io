import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import Chip from "../Chip";
import "swiper/css";
import "swiper/css/pagination";
import "../Swiper.css";
import "./Projects.css";
import michelleykim from "../../assets/projects/michelleykim.png";
import sketchconnect from "../../assets/projects/sketchconnect.png";
import ledgeit from "../../assets/projects/ledgeit.mp4";
import bluenav from "../../assets/projects/bluenav.mp4";
import happyhour from "../../assets/projects/happyhour.png";
import spellrise from "../../assets/projects/spellrise.png";
import starfarm from "../../assets/projects/starfarm.png";

const Projects = () => {
	return (
		<div id="projects" className="carousel">
			<Swiper
				direction={"vertical"}
				loop={true}
				mousewheel={true}
				spaceBetween={30}
				slidesPerView={1.75}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Mousewheel, Pagination]}
				className="swiper"
			>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p className="title">michelleykim.github.io</p>
						<p className="subtitle">
							a portfolio website designed and created entirely by myself
						</p>
						<div className="detail">
							<div className="chips">
								<Chip text="HTML" />
								<Chip text="CSS" />
								<Chip text="JavaScript" />
								<Chip text="React" />
								<Chip text="Redux" />
							</div>
							<img
								className="project-image"
								src={michelleykim}
								alt="screenshot of portfolio website"
							></img>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p className="title">Sketch-Connect</p>
						<p className="subtitle">
							collaborate with friends to make an artwork together
						</p>
						<div className="detail">
							<div className="chips">
								<Chip text="HTML" />
								<Chip text="CSS" />
								<Chip text="JavaScript" />
								<Chip text="React" />
								<Chip text="Redux" />
								<Chip text="Express" />
								<Chip text="MongoDB" />
								<Chip text="Node" />
							</div>
							<img
								className="project-image"
								src={sketchconnect}
								alt="screenshot of sketchconnect"
							></img>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p className="title">BlueNav</p>
						<p className="subtitle">
							making navigating degree requirements easy for UBC students
						</p>
						<div className="detail">
							<div className="chips">
								<Chip text="HTML" />
								<Chip text="CSS" />
								<Chip text="JavaScript" />
								<Chip text="React" />
								<Chip text="Redux" />
								<Chip text="Golang" />
							</div>
							<video className="project-image" controls>
								<source src={bluenav} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p className="title">Ledge-it</p>
						<p className="subtitle">
							making managing finance easy for university students
						</p>
						<div className="detail">
							<div className="chips">
								<Chip text="HTML" />
								<Chip text="CSS" />
								<Chip text="JavaScript" />
								<Chip text="ReactNative" />
							</div>
							<video className="project-image" controls>
								<source src={ledgeit} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p className="title">Happy Hour</p>
						<p className="subtitle">
							making organizing group events easy with google calendar sync
						</p>
						<div className="detail">
							<div className="chips">
								<Chip text="HTML" />
								<Chip text="CSS" />
								<Chip text="JavaScript" />
								<Chip text="Vue" />
							</div>
							<img
								className="project-image"
								src={happyhour}
								alt="screenshot of happy hour"
							></img>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p className="title">Spellrise</p>
						<p className="subtitle">
							become a powerful magician in search of lost memories
						</p>
						<div className="detail">
							<div className="chips">
								<Chip text="C++" />
								<Chip text="Unity" />
							</div>
							<img
								className="project-image"
								src={spellrise}
								alt="screenshot of spellrise"
							></img>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide">
					<div className="slideContent project">
						<p className="title">Star Farm</p>
						<p className="subtitle">
							a pixel art, resource management adventure for everyone
						</p>
						<div className="detail">
							<div className="chips">
								<Chip text="C++" />
								<Chip text="Unity++" />
							</div>
							<img
								className="project-image"
								src={starfarm}
								alt="screenshot of star farm"
							></img>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Projects;
