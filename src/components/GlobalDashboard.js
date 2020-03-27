import React from "react"
import { get } from "axios"
import Spinner from "../components/Spinners"
import {
	Row,
	Col,
	Card,
	CardText,
	CardTitle,
	Container,
	CardDeck,
} from "reactstrap"

export default class GlobalDashboard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			globalData: null,
			loading: true,
			curedPercentage: null,
			deadPercentage: null,
		}
	}

	componentDidMount() {
		this.fetchData().then(result => {
			this.setState(
				{
					globalData: result.data,
				},
				() => {
					let cured =
						(this.state.globalData.recovered / this.state.globalData.cases) *
						100
					let dead =
						(this.state.globalData.deaths / this.state.globalData.cases) * 100
					this.setState({
						loading: false,
						curedPercentage: this.roundToTwo(cured),
						deadPercentage: this.roundToTwo(dead),
					})
				}
			)
		})
	}

	fetchData = async () => {
		try {
			return await get(process.env.GATSBY_GLOBAL_TOTAL)
		} catch (err) {
			console.log(err)
		}
	}

	numberWithCommas = x => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

	roundToTwo = num => {
		return +(Math.round(num + "e+2") + "e-2")
	}

	style = {
		cardPrimary: {
			background: "rgba(165, 218, 255,0.3)",
			minHeight: "105px",
		},
		cardSuccess: {
			background: "rgba(219, 242, 242, 0.6)",
			minHeight: "105px",
		},
		cardDanger: {
			background: "rgba(255, 224, 230, 0.3)",
			minHeight: "105px",
		},
	}

	render() {
		return (
			<Container fluid className="my-5">
				<CardDeck>
					<Card
						body
						className="border-0 px-0 d-flex h-100 align-items-center justify-content-between"
						style={this.style.cardPrimary}
					>
						{this.state.loading ? (
							<Spinner />
						) : (
							<Row style={{ width: "100%" }}>
								<Col>
									<CardTitle className="text-primary mb-0">
										Active Cases
									</CardTitle>
								</Col>
								<Col
									style={{ minHeight: "100%" }}
									className="d-flex  align-items-center justify-content-center"
								>
									<h3 className="text-primary mb-0">
										<span>
											<b>
												{this.numberWithCommas(this.state.globalData.cases)}
											</b>
										</span>
									</h3>
								</Col>
							</Row>
						)}
					</Card>
					<Card
						body
						className="border-0 px-0 d-flex h-100 align-items-center justify-content-between"
						style={this.style.cardSuccess}
					>
						{this.state.loading ? (
							<Spinner />
						) : (
							<Row style={{ width: "100%" }}>
								<Col>
									<CardTitle className="text-success mb-0">
										Cured Cases
									</CardTitle>
									<CardText style={{ lineHeight: "16px" }}>
										<small style={{ fontSize: "14px" }}>
											<span style={{ color: "rgb(128, 186, 186)" }}>
												In percentage:
												<br />
											</span>
											<span className="text-success">
												<b>{this.state.curedPercentage}%</b>
											</span>
										</small>
									</CardText>
								</Col>
								<Col
									style={{ minHeight: "100%" }}
									className="d-flex  align-items-center justify-content-center"
								>
									<h3 className="text-success mb-0">
										<span>
											<b>
												{this.numberWithCommas(this.state.globalData.recovered)}
											</b>
										</span>
									</h3>
								</Col>
							</Row>
						)}
					</Card>
					<Card
						body
						className="border-0 px-0 d-flex h-100 align-items-center justify-content-between"
						style={this.style.cardDanger}
					>
						{this.state.loading ? (
							<Spinner />
						) : (
							<Row style={{ width: "100%" }}>
								<Col>
									<CardTitle className="text-danger mb-0">Dead Cases</CardTitle>
									<CardText style={{ lineHeight: "16px" }}>
										<small style={{ fontSize: "14px" }}>
											<span style={{ color: "rgb(214, 173, 178)" }}>
												In percentage:
												<br />
											</span>
											<span className="text-danger">
												<b>{this.state.deadPercentage}%</b>
											</span>
										</small>
									</CardText>
								</Col>
								<Col
									style={{ minHeight: "100%" }}
									className="d-flex align-items-center justify-content-center"
								>
									<h3 className="text-danger mb-0">
										<span>
											<b>
												{this.numberWithCommas(this.state.globalData.deaths)}
											</b>
										</span>
									</h3>
								</Col>
							</Row>
						)}
					</Card>
				</CardDeck>
			</Container>
		)
	}
}
