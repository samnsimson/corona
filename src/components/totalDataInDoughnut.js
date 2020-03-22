import React from "react"
import axios from "axios"
import DoughnutChart from "../components/DoughnutChart"
import PlotGenerator from "../components/plotGenerator"
import {
	Row,
	Col,
	Table,
	Progress,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
} from "reactstrap"
import moment from "moment"

export default class totalDataInDoughnut extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			DoughnutData: {},
		}
		this.fetchDoughnutData = this.fetchDoughnutData.bind(this)
	}

	componentDidMount() {
		this.fetchDoughnutData().then(res => {
			this.setState(
				{
					DoughnutData: res.data,
				},
				() => {
					this.setState({
						plotdataArray: PlotGenerator.DoughnutChart(
							this.state.DoughnutData,
							["#56b2ef", "#FFD54F", "#499B9B", "#CC5B70"],
							["#1a7dbf", "#c48900", "#0E5E5E", "#893746"],
							"Case History"
						),
					})
				}
			)
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.DoughnutData !== prevState.DoughnutData) {
			this.setState(
				{
					DoughnutData: this.state.DoughnutData,
				},
				() => {
					console.log(this.state.DoughnutData)
				}
			)
		}
	}

	fetchDoughnutData = async () => {
		try {
			const data = await axios.get("http://localhost:3333/api/sum")
			return data
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		return (
			<Row className="my-5">
				<Col xs="12">
					<p>
						<strong>CASE HISTORY</strong>
					</p>
				</Col>
				<DoughnutChart dataSet={this.state.plotdataArray} />
				<Col className="my-3">
					{Array.isArray(this.state.DoughnutData) &&
					this.state.DoughnutData.length ? (
						<CaseInWords data={this.state.DoughnutData} />
					) : null}
				</Col>
			</Row>
		)
	}
}

const CaseInWords = props => {
	console.log(`this first ${JSON.stringify(props.data[0].value)}`)
	return (
		<Card>
			<CardHeader>
				<small>
					<strong>CASE HISTORY IN NUMBERS</strong>
					<br />
					<span style={{ fontSize: "12px" }}>
						<b>DATE: </b>
						{moment().format("DD/MM/YYYY")}
					</span>
				</small>
			</CardHeader>
			<CardBody className="p-0">
				<Table responsive borderless className="mb-0">
					<tbody>
						<tr>
							<td>Confirmed cases</td>
							<td>-</td>
							<td className="align-middle pb-0 text-right">
								<b className="text-info">{Number(props.data[0].value)}</b>
							</td>
						</tr>
						<tr>
							<td>Foreign cases</td>
							<td>-</td>
							<td className="align-middle pb-0 text-right">
								<b className="text-info">{Number(props.data[1].value)}</b>
							</td>
						</tr>
						<tr>
							<td>Crued cases</td>
							<td>-</td>
							<td className="align-middle pb-0 text-right">
								<b className="text-success">{Number(props.data[2].value)}</b>
							</td>
						</tr>
						<tr>
							<td>Dead cases</td>
							<td>-</td>
							<td className="align-middle pb-0 text-right">
								<b className="text-danger">{Number(props.data[3].value)}</b>
							</td>
						</tr>
					</tbody>
				</Table>
			</CardBody>
			<CardFooter className="text-muted p-0">
				<Table borderless className="mb-0">
					<tbody>
						<tr>
							<td>
								<small>
									<strong>TOTAL ACTIVE CASES</strong>
								</small>
							</td>
							<td className="align-middle pb-0 text-right">
								<b className="text-info">
									{Number(props.data[0].value) + Number(props.data[1].value)}
								</b>
							</td>
						</tr>
					</tbody>
				</Table>
			</CardFooter>
		</Card>
	)
}
