import React from "react"
import { Line } from "react-chartjs-2"

export default class LineChart extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataSet: props.dataSet,
			chartHeight: 200,
			responsive: true,
			maintainAspectRatio: true,
			wrapperHeight: null,
		}
	}

	componentDidMount() {
		console.log(window.innerWidth)
		if (window.innerWidth < 428) {
			this.setState(
				{
					chartHeight: 300,
					wrapperHeight: 300,
					maintainAspectRatio: false,
				},
				() => {
					console.log(this.state)
				}
			)
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			this.setState({
				dataSet: this.props.dataSet,
			})
		}
	}

	render() {
		return (
			<div style={{ height: this.state.wrapperHeight }}>
				<Line
					data={this.state.dataSet}
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
										labelString: "Day",
									},
								},
							],
							yAxes: [
								{
									display: true,
									scaleLabel: {
										display: false,
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
