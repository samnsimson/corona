import React from "react"
import axios from "axios"
import { Col } from "reactstrap"
import moment from "moment"
import PlotGenerator from "../components/plotGenerator"
import LineChart from "../components/LineChart"

export default class LineChartComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			lineDataArray: [],
			plotDataArray: [],
		}
	}

	componentDidMount() {
		this.fetchLineData().then(result => {
			this.setState(
				{
					lineDataArray: result,
				},
				() => {
					this.setState({
						plotDataArray: PlotGenerator.LineChart(
							this.state.lineDataArray,
							"day",
							"total"
						),
					})
				}
			)
		})
	}

	fetchLineData = async () => {
		try {
			const data = await axios.get(
				"https://coronavizserver.herokuapp.com/api/linechart"
			)
			return data.data
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		return (
			<Col sm="12" className="mb-3">
				<p className="mb-0">
					<strong>CASE GROWTH IN INDIA</strong>
				</p>
				<p className="mb-0">
					<small>
						<b>DATE:</b> {moment().format("DD/MM/YYYY")}
					</small>
				</p>
				<LineChart dataSet={this.state.plotDataArray} />
			</Col>
		)
	}
}
