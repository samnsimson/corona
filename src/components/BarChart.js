import React, { Component } from "react"
import { HorizontalBar } from "react-chartjs-2"

export default class BarChart extends Component {
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
				<HorizontalBar
					data={this.state.dataSet}
					height={200}
					options={{
						legend: {
							display: true,
							position: "top",
						},
						maintainAspectRatio: true,
					}}
				/>
			</div>
		)
	}
}
