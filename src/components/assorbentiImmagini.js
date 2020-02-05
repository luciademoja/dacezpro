import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "antd"
import Slider from "react-slick";

const AssorbentiImmagini = () => (
  <StaticQuery
    query={graphql`
      query AssorbentiImmaginiQuery {
        source: allFile(filter: { absolutePath: { regex: "/assorbenti/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Slider
        autoplay
        effect={data.source.edges.length === 1 ? 'fade' : 'scrollx'}
        dots={true}
        infinite={true}
        slidesToShow={3}
        slidesToScroll={1}
        speed={2000}
        autoplaySpeed={2000}
        cssEase="linear"
      >
        {data.source.edges && data.source.edges.map(({ node }, i) => (
          <div key={i}  className="carousel-image">
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        ))}
      </Slider>
    )}
  />
)

export default AssorbentiImmagini