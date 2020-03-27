import React from "react"
import { get } from "axios"
import {
	Row,
	Col,
	Card,
	Container,
	CardDeck,
	CardTitle,
	CardText,
} from "reactstrap"
import Spinner from "../components/Spinners"
import { Finance } from "financejs"

export default class CaseDashboard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dashboardData: [],
			curedPercentage: null,
			deadPercentage: null,
			growthRate: null,
		}
	}

	componentDidMount() {
		this.fetchDashData().then(result => {
			this.setState(
				{
					dashboardData: result,
				},
				() => {
					let cured = this.roundToTwo(
						(parseInt(this.state.dashboardData[2].value) /
							(parseInt(this.state.dashboardData[0].value) +
								parseInt(this.state.dashboardData[1].value))) *
							100
					)

					let died = this.roundToTwo(
						(parseInt(this.state.dashboardData[3].value) /
							(parseInt(this.state.dashboardData[0].value) +
								parseInt(this.state.dashboardData[1].value))) *
							100
					)
					this.fetchAllDataForGrowthRateCalc().then(result => {
						let finance = new Finance()
						let GR = finance.CAGR(
							1,
							parseInt(this.state.dashboardData[0].value) +
								parseInt(this.state.dashboardData[1].value),
							result.length
						)
						this.setState({
							growthRate: GR,
							curedPercentage: cured,
							deadPercentage: died,
						})
					})
				}
			)
		})
	}

	roundToTwo = num => {
		return +(Math.round(num + "e+2") + "e-2")
	}

	fetchDashData = async () => {
		try {
			const data = await get(`${process.env.GATSBY_API_URL}/sum`)
			return data.data
		} catch (err) {
			console.log(err)
		}
	}

	fetchAllDataForGrowthRateCalc = async () => {
		try {
			const data = await get(`${process.env.GATSBY_API_URL}`)
			return data.data
		} catch (err) {
			console.log(err)
		}
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
						{this.state.dashboardData.length === 0 ? (
							<Spinner />
						) : (
							<Row style={{ width: "100%" }}>
								<Col>
									<CardTitle className="text-primary mb-0">
										Active Cases
									</CardTitle>
									<CardText style={{ lineHeight: "16px" }}>
										<small style={{ fontSize: "14px" }}>
											<span style={{ color: "rgb(159, 186, 204)" }}>
												Average Growth Rate:
											</span>{" "}
											<span className="text-primary">
												<b>{this.state.growthRate}%</b>
											</span>
										</small>
									</CardText>
								</Col>
								<Col
									style={{ minHeight: "100%" }}
									className="d-flex  align-items-center justify-content-center"
								>
									<h3 className="text-primary">
										<span>
											<b>
												{parseInt(this.state.dashboardData[0].value) +
													parseInt(this.state.dashboardData[1].value)}
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
						{this.state.dashboardData.length === 0 ? (
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
									<h3 className="text-success">
										<span>
											<b>{this.state.dashboardData[2].value}</b>
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
						{this.state.dashboardData.length === 0 ? (
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
									<h3 className="text-danger">
										<span>
											<b>{this.state.dashboardData[3].value}</b>
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
