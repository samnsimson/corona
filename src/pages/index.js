import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TotalActiveCases from "../components/totalActiveCases"
import TotalCuredCases from "../components/totalCuredCases"
import TotalDeadCases from "../components/totalDeadCases"
import TotalDataInDoughnut from "../components/totalDataInDoughnut"
import CoronaChecker from "../components/CoronaChecker"
import AboutCorona from "../components/AboutCorona"
import Imgstopcovid from "../components/Images/Stopcovid"
import Stayhome from "../components/Images/Stayhome"

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <Layout>
        <SEO title="Corona in India Visualized" />
        <Row>
          <Container>
            <CoronaChecker />
            <Row>
              <Col md="4">
                <TotalDataInDoughnut />
                <Imgstopcovid className="mb-5" />
                <Stayhome className="mb-5" />
              </Col>
              <Col md="8">
                <Row className="mt-5">
                  <TotalActiveCases />
                  <TotalCuredCases />
                  <TotalDeadCases />
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>
      </Layout>
    )
  }
}
