import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
const HeroStyle = styled.div`
  height: 100%;
  text-align: justify;
  p,
  h2 {
    color: #000000;
  }
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
                <h2>Executive Summary</h2>
                <p>
                  Massive Therapeutics is a Jamaica-based cannabis producer poised to leverage upcoming Jamaican export agreements to become a highly profitable global supplier of medical and legal adult-use cannabis. With over 20 years of agricultural partnerships in Jamaica’s Blue Mountains, Massive Therapeutics aims to establish licensed production in Jamaica to cultivate, process and distribute cannabis to a client base of global cannabis companies and pharmaceutical organizations, considerably reducing these companies’ supply chain costs.
                </p>
                <p>
                  Where a North American licensed producer of cannabis will spend roughly $400 to cultivate one pound of medical-grade cannabis, Massive Therapeutics can produce the same amount for just over $100. Backdropped by upcoming Jamaican cannabis export legislation, Massive Therapeutics begins its Jamaican operations best positioned to leverage Jamaica’s economy, production potential, and strategic export regime to supply the global industry.
                </p>
                <h2>Shareholder Structure</h2>
                <p>
                  Massive Therapeutics is incorporated in Kingston, Jamaica. Out of 10,000,000 issued shares, Massive Therapeutics will offer 2,500,000 shares to investors at $1 each, capping any dilution in company stock.
                </p>
                <h2>
                  Greenhouse Structure, Syndication, and Production
                </h2>
                <p>
                  Massive Therapeutics will operate 50 modern hybrid greenhouses on its Jamaican estate, retaining 2 greenhouses corporately and offering 48 for joint venture partnership. Specifically, Massive Therapeutics’ will offer its greenhouses for syndication with cannabis and pharmaceutical companies in need of low-cost supply. Doing so will allow countless global cannabis companies, strained by chronic supply fragmentation and high costs, the opportunity to integrate with a cost-friendly supplier outside their jurisdiction. Joint venture opportunities are also available to financial syndicates interested in investing in and profit-sharing with large-scale cannabis cultivation.
                </p>
                <p>
                  Operating at full production, Massive Therapeutics conservatively estimates 50 modern hybrid greenhouses to produce over 23 million grams of medical-grade cannabis flower per year.
                </p>
                <h2>Total Revenues</h2>
                <p>
                  Sold conservatively at a wholesale price of $2/gram—roughly 30% the cannabis price index in North America—Massive Therapeutics expects a yearly revenue of over $46.5 million with 50 fully operational hybrid greenhouses per year.
                </p>
                <h2>Earnings Per Share</h2>
                <p>
                  Considering a 50% profit share in revenues from 48 greenhouses, as well as total revenues from Massive Therapeutics’ two corporate greenhouses, shareholders can expect Massive Therapeutics to return an earnings per share (EPS) of $4.65 each year.
                </p>
                <h2>Growth Potential</h2>
                <p>
                  The global cannabis market is among the fastest growing industries in the world. In 2020, the US market topped $16 billion, and the European market is expected to value $147 billion by 2028. Massive Therapeutics is able to solve high supply chain costs for cannabis companies across this global market, particularly in burgeoning European jurisdictions. The relative fact that 50 greenhouses can quickly be consumed by any number of these companies remains our most salient market consideration.
                </p>
                <p>
                  Further, while Massive Therapeutics’ financial projections are calibrated for a wholesale cannabis price of $2/gram, even doubling this sale price would still undercut North American cannabis prices by over 30%. With the opportunity to extend into direct-to-market business and retail operations, Massive Therapeutics’ revenues represent a fraction of our growth potential.
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
