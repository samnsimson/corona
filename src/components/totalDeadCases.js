import React from "react"
import axios from "axios"
import BarChart from "../components/BarChart"
import PlotGenerator from "../components/plotGenerator"
import { Col } from "reactstrap"
import moment from "moment"

export default class totalDeadCases extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			Deadcasesarray: [],
			plotdataArray: [],
		}
		this.getDeadCases = this.getDeadCases.bind(this)
	}

	componentDidMount() {
		this.getDeadCases().then(result => {
			this.setState(
				{
					Deadcasesarray: result.data,
				},
				() => {
					this.setState({
						plotdataArray: PlotGenerator.simpleBarChart(
							this.state.Deadcasesarray,
							"state",
							"deadcases",
							"#FFE0E6",
							"#f96d87",
							"Dead cases"
						),
					})
				}
			)
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.plotdataArray !== prevState.plotdataArray) {
			this.setState({
				Deadcasesarray: this.state.Deadcasesarray,
				plotdataArray: this.state.plotdataArray,
			})
		}
	}

	getDeadCases = async () => {
		try {
			const data = await axios.get("http://localhost:3333/api/")
			return data
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		return (
			<Col sm="12" className="mt-3 mb-2">
				<p className="mb-0">
					<strong>TOTAL DEATH IN EACH STATE{"  "}</strong>
				</p>
				<p className="mb-0">
					<small>
						<b>DATE:</b> {moment().format("DD/MM/YYYY")}
					</small>
				</p>
				<BarChart dataSet={this.state.plotdataArray} />
			</Col>
		)
	}
}
