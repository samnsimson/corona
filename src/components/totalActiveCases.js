import React from "react"
import axios from "axios"
import BarChart from "../components/BarChart"
import PlotGenerator from "../components/plotGenerator"
import { Col, Row } from "reactstrap"
import moment from "moment"

export default class totalActiveCases extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activecasesarray: [],
			plotdataArray: [],
		}
		this.getActiveCases = this.getActiveCases.bind(this)
	}

	componentDidMount() {
		this.getActiveCases().then(result => {
			this.setState(
				{
					activecasesarray: result.data,
				},
				() => {
					this.setState({
						plotdataArray: PlotGenerator.simpleBarChart(
							this.state.activecasesarray,
							"state",
							"activecases",
							"#D7ECFB",
							"#66c1ff",
							"Active cases"
						),
					})
				}
			)
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.plotdataArray !== prevState.plotdataArray) {
			this.setState({
				activecasesarray: this.state.activecasesarray,
				plotdataArray: this.state.plotdataArray,
			})
		}
	}

	getActiveCases = async () => {
		try {
			const data = await axios.get("https://coronavizserver.herokuapp.com/api/")
			return data
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		return (
			<Col sm="12" className="mb-3">
				<p className="mb-0">
					<strong>ACTIVE CASES IN EACH STATE{"  "}</strong>
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
