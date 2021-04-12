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
          <ScrollAnimation
            animateIn="animate__lightSpeedInLeft"
            animateOnce={false}
          >
            {slice.primary.left_copy && (
              <RichText
                render={slice.primary.left_copy.raw}
                linkResolver={linkResolver}
                htmlSerializer={prismicHtmlSerializer}
              // serializeHyperlink={myCustomLink}
              />
            )
            }
            {slice.primary.left_image.localFile && (
              <div className="left-image">
                <Img fluid={slice.primary.left_image.localFile.childImageSharp.fluid} />
              </div>
            )
            }
          </ScrollAnimation>
        </div>
        <div className="right">
          <ScrollAnimation
            animateIn="animate__lightSpeedInRight"
            animateOnce={false}
          >
            {slice.primary.right_copy && (
              <RichText
                render={slice.primary.right_copy.raw}
                linkResolver={linkResolver}
                htmlSerializer={prismicHtmlSerializer}
              // serializeHyperlink={myCustomLink}
              />
            )
            }
            {slice.primary.right_image.localFile && (
              <div className="right-image">
                <Img fluid={slice.primary.right_image.localFile.childImageSharp.fluid} />
              </div>
            )
            }
          </ScrollAnimation>
        </div>
      </Container>
    </LeftRightStyle>
  )
}

export default AnimateLeftRight
