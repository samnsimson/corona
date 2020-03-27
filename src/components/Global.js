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
			chartHeight: 200,
			responsive: true,
			maintainAspectRatio: true,
			wrapperHeight: null,
		}
	}

	componentDidMount() {
		if (window.innerWidth < 428) {
			this.setState({
				chartHeight: 300,
				wrapperHeight: 300,
				maintainAspectRatio: false,
			})
		}
		this.setState({
			dataSets: PlotGenerator.LineChartAllCountry(this.state.countryData),
		})
	}

	render() {
		return (
			<div style={{ height: this.state.wrapperHeight }}>
				<Line
					data={this.state.dataSets}
					height={this.state.chartHeight}
					options={{
						responsive: this.state.responsive,
						maintainAspectRatio: this.state.maintainAspectRatio,
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
			</div>
		)
	}
}
