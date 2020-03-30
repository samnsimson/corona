import React, { Component } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TotalActiveCases from "../components/totalActiveCases"
import TotalCuredCases from "../components/totalCuredCases"
import TotalDeadCases from "../components/totalDeadCases"
import TotalDataInDoughnut from "../components/totalDataInDoughnut"
import CaseDashboard from "../components/CaseDashboard"
import CaseTable from "../components/CaseDataInTable"
import LineChartComponent from "../components/LineChartComponent"
import NewCaseData from "../components/NewCasesComponent"
import IndiaMap from "../components/IndiaMap"
import Howtoprevent from "../components/Images/howtoprotect"
import Stopcovid from "../components/Images/Stopcovid"
import Stayhome from "../components/Images/Stayhome"
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
        <SEO title="Home | Corona in India Visualized" />
        <Row>
          <Container>
            <Row>
              <CaseDashboard />
            </Row>
            <Row>
              <Col xs="12" className="my-2">
                <Row>
                  <Col md="8">
                    <LineChartComponent />
                  </Col>
                  <Col md="4">
                    <TotalDataInDoughnut />
                  </Col>
                </Row>
                <Row>
                  <Col md="8">
                    <NewCaseData />
                    <TotalActiveCases />
                    <TotalCuredCases />
                    <TotalDeadCases />
                  </Col>
                  <Col md="4">
                    <CaseTable />
                    <Link
                      to="/globaldata"
                      className="btn btn-warning btn-block my-3"
                    >
                      Check world wide data
                    </Link>
                    <Howtoprevent className="mt-2 mb-3" />
                    <Stopcovid className="mt-2 mb-3" />
                    <Stayhome className="mt-2 mb-3" />
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
