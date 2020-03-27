import React from "react"
import axios from "axios"
import PlotGenerator from "../components/plotGenerator"
import BarChart from "../components/BarChart"
import { Col } from "reactstrap"
import moment from "moment"
import Spinner from "../components/Spinners"

export default class NewCasesComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			newCasesData: [],
			plotDataArray: [],
			loading: true,
		}
	}

	componentDidMount() {
		this.fetchNewCasesData().then(result => {
			this.setState(
				{
					newCasesData: result,
				},
				() => {
					this.setState(
						{
							plotDataArray: PlotGenerator.simpleBarChart(
								this.state.newCasesData,
								"day",
								"new",
								"rgba(0, 123, 255,0.6)",
								"#6291c4",
								"No. of New Cases"
							),
						},
						() => {
							this.setState({
								loading: false,
							})
						}
					)
				}
			)
		})
	}

	fetchNewCasesData = async () => {
		try {
			const data = await axios.get(`${process.env.GATSBY_API_URL}/new`)
			return data.data
		} catch (err) {
			if (err) console.log(err)
		}
	}

	render() {
		return (
			<Col sm="12" className="mb-3">
				<p className="mb-0">
					<strong>NEW CASES IN INDIA</strong>
				</p>
				<p className="mb-0">
					<small>
						<b>DATE:</b> {moment().format("DD/MM/YYYY")}
					</small>
				</p>
				{this.state.loading ? (
					<Spinner />
				) : (
					<BarChart dataSet={this.state.plotDataArray} />
				)}
			</Col>
		)
	}
}
