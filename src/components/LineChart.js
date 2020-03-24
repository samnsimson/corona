import React from "react"
import { Line } from "react-chartjs-2"

export default class LineChart extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataSet: props.dataSet,
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
			<div>
				<Line
					data={this.state.dataSet}
					height={200}
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
										labelString: "Day",
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
