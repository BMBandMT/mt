import styled from "styled-components"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import Container from "../container"
import { RichText } from "prismic-reactjs"
import linkResolver from "../../utils/linkResolver"
import prismicHtmlSerializer from "../../gatsby/htmlSerializer"
import Img from "gatsby-image"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
const LeftRightStyle = styled.div`
> div{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  .left{
    width:calc(50% - 30px);
  }
  .right{
    width:calc(50% - 30px);
  }
}
`

export const AnimateLeftRight = ({ slice }) => {
  console.log(slice)
  return (
    <LeftRightStyle>
      <Container>
        <div className="left">
          {slice.primary.left_title && (
            <ScrollAnimation
              animateIn="animate__fadeIn"
              delay={900}
              animateOnce={false}
            >
              <div className="left-title">
                <h2>{slice.primary.left_title.text}</h2>
              </div>
            </ScrollAnimation>
          )}
          {slice.primary.left_copy && (
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOnce={false}
            >
              <div className="left-copy">
                <RichText
                  render={slice.primary.left_copy.raw}
                  linkResolver={linkResolver}
                  htmlSerializer={prismicHtmlSerializer}
                />
              </div>
            </ScrollAnimation>
          )
          }
          {slice.primary.left_image.localFile && (
            <div className="left-image">
              <ScrollAnimation
                animateIn="animate__slideInLeft"
                animateOnce={false}
              >
                <div className="left-shadow"></div>
              </ScrollAnimation>

              <div className="left-image-inner">
                <Img fluid={slice.primary.left_image.localFile.childImageSharp.fluid} />
              </div>
            </div>
          )
          }
        </div>
        <div className="right">
          {slice.primary.right_title && (
            <ScrollAnimation
              animateIn="animate__fadeIn"
              delay={900}
              animateOnce={false}
            >
              <div className="right-title">
                <h2>{slice.primary.right_title.text}</h2>
              </div>
            </ScrollAnimation>
          )}
          {slice.primary.right_copy && (
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOnce={false}
            >
              <div className="right-copy">
                <RichText
                  render={slice.primary.right_copy.raw}
                  linkResolver={linkResolver}
                  htmlSerializer={prismicHtmlSerializer}
                />
              </div>
            </ScrollAnimation>
          )
          }
          {slice.primary.right_image.localFile && (
            <div className="right-image">
              <ScrollAnimation
                animateIn="animate__slideInRight"
                animateOnce={false}
              >
                <div className="right-shadow"></div>
              </ScrollAnimation>
              <div className="right-image-inner">
                <Img fluid={slice.primary.right_image.localFile.childImageSharp.fluid} />
              </div>
            </div>
          )
          }
        </div>
      </Container>
    </LeftRightStyle>
  )
}

export default AnimateLeftRight
