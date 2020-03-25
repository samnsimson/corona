import React from "react"
import PlotGenerator from "../components/plotGenerator"
import moment from "moment"
import { Line } from "react-chartjs-2"

export default class Global extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			countryData: props.countryData,
			dataSets: [],
			loading: true,
		}
	}

	componentDidMount() {
		this.setState({
			dataSets: PlotGenerator.LineChartAllCountry(this.state.countryData),
		})
	}

	render() {
		return (
			<Line
				data={this.state.dataSets}
				options={{
					responsive: true,
					tooltips: {
						mode: "index",
						intersect: false,
					},
					hover: {
						mode: "nearest",
						intersect: true,
					},
					scales: {
						xAxes: [
							{
								display: true,
								scaleLabel: {
									display: true,
									labelString: "Days",
								},
							},
						],
						yAxes: [
							{
								display: true,
								scaleLabel: {
									display: true,
									labelString: "Cases",
								},
							},
						],
					},
				}}
			/>
		)
	}
}
