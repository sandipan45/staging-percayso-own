import React,{Component} from 'react'

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

export class sliderdemo extends Component { 
 render()  
        { 
		return (
			<div>
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
		)
		}
}

export default sliderdemo