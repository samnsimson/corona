import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TotalActiveCases from "../components/totalActiveCases"
import TotalCuredCases from "../components/totalCuredCases"
import TotalDeadCases from "../components/totalDeadCases"
import TotalDataInDoughnut from "../components/totalDataInDoughnut"
import CoronaChecker from "../components/CoronaChecker"
import Imgstopcovid from "../components/Images/Stopcovid"
import Stayhome from "../components/Images/Stayhome"
import HelplineSnippet from "../components/HelplineSnippet"
import LineChartComponent from "../components/LineChartComponent"
import ReactGA from "react-ga"

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    ReactGA.initialize(process.env.GATSBY_GOOGLE_UA)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <Layout>
        <SEO title="Corona in India Visualized" />
        <Row>
          <Container>
            <div className="mb-3">
              <CoronaChecker />
            </div>
            <Row>
              <Col xs="12" className="my-2">
                <Row>
                  <Col md="4">
                    <TotalDataInDoughnut />
                  </Col>
                  <Col md="8">
                    <LineChartComponent />
                  </Col>
                </Row>
              </Col>
              <Col xs="12" className="my-2">
                <Row>
                  <Col md="6">
                    <TotalActiveCases />
                  </Col>
                  <Col md="6">
                    <TotalCuredCases />
                  </Col>
                </Row>
              </Col>
              <Col xs="12" className="my-2">
                <Row>
                  <Col md="6">
                    <TotalDeadCases />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>
      </Layout>
    )
  }
}
