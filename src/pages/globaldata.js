import React from "react"
import axios from "axios"
import GlobalChart from "../components/Global"
import Spinner from "../components/Spinners"
import { Row, Col, Card, CardText, CardTitle } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Global from "../components/Global"
import GlobalDash from "../components/GlobalDashboard"
import ReactGA from "react-ga"

export default class globaldata extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			allCountryData: [],
			loading: true,
		}
	}

	componentDidMount() {
		ReactGA.initialize(process.env.GATSBY_GOOGLE_UA)
		ReactGA.pageview(window.location.pathname + window.location.search)
		axios.get(process.env.GATSBY_ALL_COUNTRY).then(result => {
			let countryObj = []
			let allCountries = Object.entries(result.data)
			Object.entries(result.data).map(country => {
				let filteredData = country[1].filter(obj => {
					return obj.confirmed !== 0
				})
				countryObj.push({
					name: country[0],
					data: filteredData,
				})
			})
			countryObj = countryObj.filter(obj => {
				return obj.name !== "India"
			})
			this.setState(
				{
					allCountryData: countryObj,
				},
				() => {
					this.setState({
						loading: false,
					})
				}
			)
		})
	}

	style = {
		cards: {
			borderRadius: "0",
			padding: "12px",
			marginBottom: "1.5em",
		},
	}

	render() {
		return (
			<Layout>
				<SEO title="Corona Virus - Information | Coronavisindia" />
				<Row className="my-5">
					<Col xs="12">
						<h4>GLOBAL CONFIRMED CASES</h4>
					</Col>
					<Col xs="12">
						<Row>
							<GlobalDash />
						</Row>
					</Col>
					{this.state.loading ? (
						<Spinner />
					) : (
						this.state.allCountryData.map((country, key) => {
							return (
								<Col key={key} md="6">
									<Card body style={this.style.cards}>
										<CardTitle className="text-center">
											<b>{country.name}</b>
										</CardTitle>
										<Global countryData={country.data} />
									</Card>
								</Col>
							)
						})
					)}
				</Row>
			</Layout>
		)
	}
}
