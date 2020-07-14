import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import OwlCarousel from 'react-owl-carousel-loop'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import gatsbyImage from "../images/gatsby-icon.png"


const options = {
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        359: {
            items: 2
        },
        550: {
            items: 3
        },
        989: {
            items:5

        }
    },
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
	<div className="section percayso-team" id="secMeetTeam">
		<div className="slider-box">
			<OwlCarousel
			className="owl-theme"
			loop
			items={5}
			{...options}
			>
			<img src={gatsbyImage} alt="" />
			<img src={gatsbyImage} alt="" />
			<img src={gatsbyImage} alt="" />
			<img src={gatsbyImage} alt="" />
			<img src={gatsbyImage} alt="" />
			<img src={gatsbyImage} alt="" />
			<img src={gatsbyImage} alt="" />
			<img src={gatsbyImage} alt="" />
			<img src={gatsbyImage} alt="" />
			<img src={gatsbyImage} alt="" />
			
			</OwlCarousel>
		</div>
	</div>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
