import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
const HeroStyle = styled.div`
  height: 100%;
  header {
    /* display: none; */
  }
  footer {
    padding-top: 0px;
    border-top: 0px;
  }
  .footer-border {
    background-color: black;
  }
  .footer-container {
    display: none;
  }
  .conf-inner {
    padding: 175px 0px 100px 0px;
    .conf-inner-inner {
      background-color: white;
      padding: 50px;
      max-width: 800px;
      margin: 0 auto;
    }
  }
  h2,
  h3 {
    display: inline-block;
    margin: 20px 0px 10px 0px;
    font-size: 20px;
  }
  p {
    display: inline-block;
    margin: 0px 0px 10px 0px;
    font-size: 15px;
    line-height: 20px;
    a {
      color: black;
      display: inline-block;
      margin-top: 40px;
      font-weight: bold;
    }
  }
`

class Conf extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <HeroStyle>
        <Layout>
          <Helmet>
            <meta name="robots" content="noindex"></meta>
          </Helmet>
          <BackgroundImage
            id="conf"
            fluid={this.props.data.heroBg.childImageSharp.fluid}
          >
            <Container className="conf-inner">
              <div className="conf-inner-inner">
                <h2>Executive Summary </h2>
                <p>
                  Blue Mountain Best is a commercial grower, processor and
                  exporter of Jamaican Blue Mountain coffee. Allowing luxury
                  coffee companies to directly source certified Blue Mountain
                  beans from our single estate—as well as from hundreds of
                  partner family farms, to whom we commit high-paying farmgate
                  prices, as well needed extension services—Blue Mountain Best
                  enters the historic Jamaican coffee market as a modern,
                  equitable and sustainable coffee producer best suited to
                  increase production and pursue worldwide retail growth for
                  this historic and rare luxury product.{" "}
                </p>
                <p>
                  Certified Jamaican Blue Mountain beans, which retain a
                  protected status in the region, earn the world’s highest
                  unitvvalue for their export. Where the average global export
                  price for Arabica coffee hovers around $4 per
                  kilogram,vJamaican Blue Mountain beans command an average unit
                  price of roughly $22-$35 for the same quantity. At market,
                  Jamaican Blue Mountain coffee consistently retails over $100
                  per pound, retaining an indestructible reputation as the most
                  sought after coffee in the world.{" "}
                </p>
                <h2>Shareholder Structure </h2>
                <p>
                  Blue Mountain Best is incorporated as a C-Corporation in the
                  state of Wyoming. Out of 10,000,000 issued shares, Blue
                  Mountain Best will offer 2,500,000 shares to investors at $1
                  each, capping any dilution in company stock.{" "}
                </p>
                <h2>
                  Acreage Structure, Syndication, Production and Processing{" "}
                </h2>
                <p>
                  Blue Mountain Best will operate an estate in Jamaica sized
                  over 1,050 acres, with 550 acres dedicated to certified Blue
                  Mountain coffee production. 50 of Blue Mountain Best’s acres
                  will be retained corporately, and 500 will be offered for
                  joint-venture partnership.{" "}
                </p>
                <p>
                  Specifically, Blue Mountain Best will offer its acres for
                  syndication with coffee importing associations, traders,
                  luxury buyers, and roasters seeking entrance into the
                  sought-after Jamaican coffee market and integration with a
                  sustainable Blue Mountain coffee producer. Joint venture
                  opportunities are also available to financial syndicates
                  interested in investing in and profit-sharing with luxury
                  coffee production.{" "}
                </p>
                <p>
                  In addition to its own production, Blue Mountain Best will
                  source and process Jamaican Blue Mountain coffee from a
                  network of over 400-500 small family farms.{" "}
                </p>
                <h2>Wholesale Revenues </h2>
                <p>
                  Conservatively, Blue Mountain Best’s yearly wholesale revenue
                  from exported certified Blue Mountain coffee will exceed $13
                  million per year at full potential.{" "}
                </p>
                <h2>Earnings Per Share </h2>
                <p>
                  Considering a 50% profit share in revenue from 500 acres, as
                  well as total revenues from Blue Mountain Best’s 50 corporate
                  acres, stakeholders can expect Blue Mountain Best to return an
                  earnings per share (EPS) of roughly $1.31 per year.{" "}
                </p>
                <h2>Growth and Retail Potential </h2>
                <p>
                  Blue Mountain Best’s financial projections are calibrated from
                  the wholesale export of luxury Blue Mountain coffee, yet these
                  conservative figures do not account for Blue Mountain Best’s
                  status as a single estate producer. While our highest
                  wholesale price figures at $15.90/pound, importers routinely
                  pay upwards of $27/pound for single origin certified Blue
                  Mountain coffee.{" "}
                </p>
                <p>
                  In addition, with opportunity and interest to market directly
                  to the consumer, $13 million per year in wholesale revenue,
                  taken from over 850,000 pounds of exportable Blue Mountain
                  coffee, could quickly become over $80 million in yearly retail
                  revenue, dwarfing the projected profits in this business
                  model.
                </p>
              </div>
            </Container>
          </BackgroundImage>
        </Layout>
      </HeroStyle>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query dossier2Query {
        heroBg: file(relativePath: { eq: "MTDossierAsset.png" }) {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Conf data={data} {...props} />}
  />
)
