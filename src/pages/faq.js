import React from "react"
import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	CardDeck,
	Row,
	Col,
} from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoronaChecker from "../components/CoronaChecker"
import Imagehowtoprotect from "../components/Images/howtoprotect"
import Imgstopcovid from "../components/Images/Stopcovid"
import Stayhome from "../components/Images/Stayhome"
import ReactGA from "react-ga"

export default class faq extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		ReactGA.initialize("UA-132752395-4")
		ReactGA.pageview(window.location.pathname + window.location.search)
	}

	style = {
		cards: {
			backgroundColor: "rgba(215, 236, 251, 0.3)",
			borderRadius: "0px",
		},
	}

	render() {
		return (
			<Layout>
				<SEO title="Frequently asked questions about CORONA Virus" />
				<Row className="mt-5">
					<Col xs="12">
						<h4 className="py-2">FREQUENTLY ASKED QUESTIONS</h4>
					</Col>
					<Col md="8">
						<CardDeck className="mb-5">
							<Card style={this.style.cards}>
								<CardBody>
									<CardTitle>
										<strong>
											Does the virus affect older people 🧑‍🤝‍🧑, or are younger
											people 👯 also susceptible?
										</strong>
									</CardTitle>
									<hr />
									<CardText>
										People of <b>all ages can be infected</b> by the virus.
										Older people and those with pre-existing medical conditions
										(such as asthma, diabetes, heart disease) appear to be more
										vulnerable to becoming severely ill with the virus. WHO
										advise people of all ages to take steps to protect
										themselves from the virus.
									</CardText>
								</CardBody>
							</Card>
							<Card style={this.style.cards}>
								<CardBody>
									<CardTitle>
										<strong>
											Are there any specific medicines 💉 to prevent or treat
											the new Coronavirus?
										</strong>
									</CardTitle>
									<hr />
									<CardText>
										To date, there is <b>no specific medicine recommended</b> to
										prevent or treat the virus. Some specific treatments are
										under investigation and be tested through clinical trials
										<br />
										<br />
										However National Task force for COVID-19 constituted by
										Indian Council of Medical Research recommends the use of
										Hydroxy-chloroquine for prophylaxis of SARS-Cov-2 infection
										for high risk population.
									</CardText>
								</CardBody>
							</Card>
						</CardDeck>
						<CardDeck className="mb-5">
							<Card style={this.style.cards}>
								<CardBody>
									<CardTitle>
										<strong>
											Can washing hands with Soap or Sanitizers prevent the new
											Coronavirus?
										</strong>
									</CardTitle>
									<hr />
									<CardText>
										<b>"YES",</b> using Soap and Sanitizers can prevent you from
										getting infected by the virus. Soap and Sanitizers have good
										amount of chemicals in it and makes your hand slippery. The
										tidal nature of the water then washes away all the germs
										from your hand. So washing your hand properly atleast about
										20sec is adviced.
									</CardText>
								</CardBody>
							</Card>

							<Card style={this.style.cards}>
								<CardBody>
									<CardTitle>
										<strong>
											Does eating Chicken 🐔 or Mutton 🐐 spread the new
											Coronavirus?
										</strong>
									</CardTitle>
									<hr />
									<CardText>
										There is{" "}
										<b>
											no evidence that the virus spreads from Chicken or Mutton
										</b>{" "}
										so there is no chance of getting infected by the virus by
										eating Chicken or Mutton. However avoiding Non-veg food
										during sick is adviced.
										<br />
										<br />
										Drink boiled water, Cook your food well and Wash your hands
										before eating.
									</CardText>
								</CardBody>
							</Card>
						</CardDeck>
						<CardDeck className="mb-5">
							<Card style={this.style.cards}>
								<CardBody>
									<CardTitle>
										<strong>
											Do vaccines 💉 against pneumonia protect you against the
											new Coronavirus?
										</strong>
									</CardTitle>
									<hr />
									<CardText>
										No. Vaccines against pneumonia, such as pneumococcal vaccine
										and Haemophilus influenza type B (Hib) vaccine,{" "}
										<b>do not provide protection</b> against the new
										coronavirus. The virus is so new and different that it needs
										its own vaccine.
										<br />
										<br />
										Vaccines against respiratory illness is highly recommended
										to protect your health
									</CardText>
								</CardBody>
							</Card>
							<Card style={this.style.cards}>
								<CardBody>
									<CardTitle>
										<strong>
											Can pets 🐩🐈 at home spread the new Coronavirus?
										</strong>
									</CardTitle>
									<hr />
									<CardText>
										At present, there is no evidence that companion animals/pets
										such as dogs, cats can be infected with the virus. However,
										it is always a good idea to wash your hands with soap and
										water after contact with pets. This protects you agains
										various common bacteria susc as <b>E. coli</b> and{" "}
										<b>Salmonella</b> that can pass between pets and humans.
									</CardText>
								</CardBody>
							</Card>
						</CardDeck>
					</Col>
					<Col md="4">
						<Imagehowtoprotect className="mb-5" />
						<Stayhome className="mb-5" />
						<Imgstopcovid className="mb-5" />
					</Col>
				</Row>
				<CoronaChecker />
			</Layout>
		)
	}
}
