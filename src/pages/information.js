import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "reactstrap"
import AboutCorona from "../components/AboutCorona"
import Stayhome from "../components/Images/Stayhome"
import CoronaChecker from "../components/CoronaChecker"
import ReactGA from "react-ga"

export default class information extends React.Component {
	componentDidMount() {
		ReactGA.initialize(process.env.GATSBY_GOOGLE_UA)
		ReactGA.pageview(window.location.pathname + window.location.search)
	}
	render() {
		return (
			<Layout>
				<SEO title="Corona Virus - Information | Coronavisindia" />
				<Row className="my-5">
					<Col>
						<AboutCorona />
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<div className="mb-5">
							<h5>When to get tested for Novel Corona Virus aka COVID-19?</h5>
							<p>
								Source:{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.mohfw.gov.in/"
								>
									Ministry of Health & Family Welfare
								</a>
							</p>
							<div>
								<p>
									You are not required to get tested for COVID-19 if do not have
									any symptoms like Cough, fever or difficulty in breathing
								</p>
								<Link to="" className="btn btn-warning mb-2">
									Take an online test now
								</Link>
								<p>
									If you have any of the above symptoms and have travelled to
									any of the COVID-19 affected countries including Italy, Iran,
									Republic of Korea, France, Spain, Germany, UAE etc or you are
									a contact of a laboratory confirmed positive case immediately
									call the State Helpline Number or Ministry of Health & Family
									Welfare, Government of India's{" "}
									<b>
										24x7 helpline <a href="tel:00123978046">011-2397 8046</a>
									</b>
								</p>
								<p>
									Download the pdf to read the interventions proposed by the
									Government
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.mohfw.gov.in/pdf/SocialDistancingAdvisorybyMOHFW.pdf"
									className="btn btn-sm btn-info"
								>
									Download the full PDF
								</a>
							</div>
						</div>
						<hr />
						<div className="mb-5">
							<h5>
								Advisory on Social Distancing Measure in view of spread of
								COVID-19 disease
							</h5>
							<p>
								Source:{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.mohfw.gov.in/"
								>
									Ministry of Health & Family Welfare
								</a>
							</p>
							<div>
								<p>
									Social distancing is a non-pharmaceutical infection prevention
									and control intervention implemented to avoid/decrease contact
									between those who are infected with a disease causing pathogen
									and those who are not, so as to stop or slow down the rate and
									extent of disease transmission in a community. This eventually
									leads to decrease in spread, morbidity and mortality due to
									the disease.
								</p>

								<p>
									Download the pdf to read the interventions proposed by the
									Government
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.mohfw.gov.in/pdf/SocialDistancingAdvisorybyMOHFW.pdf"
									className="btn btn-sm btn-info"
								>
									Download the full PDF
								</a>
							</div>
						</div>
						<hr />
						<Stayhome className="mb-5" />
					</Col>
					<Col md="6">
						<div className="mb-5">
							<h5>Instructions for peoples being home quarantined</h5>
							<p>
								Source:{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.mohfw.gov.in/"
								>
									Ministry of Health & Family Welfare
								</a>
							</p>
							<div>
								<p>
									The home quarantined person should: Stay in a well-ventilated
									single-room preferably with an attached/separate toilet. If
									another family member needs to stay in the same room, it’s
									advisable to maintain a distance of at least 1 meter between
									the two.
									<br />
								</p>
								<ul>
									<li>
										Needs to stay away from elderly people, pregnant women,
										children
									</li>
									<li>Restrict his/her movement within the house.</li>
									<li>
										Under no circumstances attend any social/religious gathering
									</li>
									<li>
										The home quarantine period is for 14 days from contact with
										a confirmed case or earlier if a suspect case (of whom the
										index person is a contact) turns out negative on laboratory
										testing
									</li>
								</ul>
								<p>
									Download the pdf to read more instructions to be followed
									proposed by the Government of India
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.mohfw.gov.in/pdf/Guidelinesforhomequarantine.pdf"
									className="btn btn-sm btn-info"
								>
									Download the full PDF
								</a>
							</div>
						</div>
						<hr />
						<div className="mb-5">
							<h5>Guidelines on use of masks by public</h5>
							<p>
								Source:{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.mohfw.gov.in/"
								>
									Ministry of Health & Family Welfare
								</a>
							</p>
							<div>
								<p>
									Medical masks should not be used by healthy persons who are
									not having any symptoms because it create a false sense of
									security that can lead to neglecting other essential measures
									such as washing of hands.
								</p>
								<p>
									Use of medical three layer masks when ill, will prevent your
									infection from spreading to others. However you also need to
									wash your hands frequently to avoid spreading infection to
									others.{" "}
								</p>
								<p>
									Close family contacts of such suspect/confirmed cases
									undergoing home care should also use Triple layer medical
									mask.
								</p>
								<p>
									A medical mask, if properly worn, will be effective for 8
									hours. If it gets wet in between, it needs to be changed
									immediately.
								</p>
								<p>
									Download the pdf to read the full guide of using the masks
									proposed by the Government
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.mohfw.gov.in/pdf/SocialDistancingAdvisorybyMOHFW.pdf"
									className="btn btn-sm btn-info"
								>
									Download the full PDF
								</a>
							</div>
						</div>
						<hr />
					</Col>
				</Row>
				<CoronaChecker />
			</Layout>
		)
	}
}
