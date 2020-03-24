import React from "react"
import axios from "axios"
import BarChart from "../components/BarChart"
import PlotGenerator from "../components/plotGenerator"
import { Col } from "reactstrap"
import moment from "moment"

export default class totalCuredCases extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			Curedcasesarray: [],
			plotdataArray: [],
		}
		this.getCuredCases = this.getCuredCases.bind(this)
	}

	componentDidMount() {
		this.getCuredCases().then(result => {
			this.setState(
				{
					Curedcasesarray: result.data,
				},
				() => {
					this.setState({
						plotdataArray: PlotGenerator.simpleBarChart(
							this.state.Curedcasesarray,
							"state",
							"curedcases",
							"#DBF2F2",
							"#5cbcbc",
							"Cured cases"
						),
					})
				}
			)
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.plotdataArray !== prevState.plotdataArray) {
			this.setState({
				Curedcasesarray: this.state.Curedcasesarray,
				plotdataArray: this.state.plotdataArray,
			})
		}
	}

	getCuredCases = async () => {
		try {
			const data = await axios.get(process.env.API_URL)
			return data
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		return (
			<Col sm="12" className="mt-3 mb-2">
				<p className="mb-0">
					<strong>CURED CASES IN EACH STATE{"  "}</strong>
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
