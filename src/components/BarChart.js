import React, { Component } from "react"
import { Bar } from "react-chartjs-2"

export default class BarChart extends Component {
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
		if (window.innerWidth < 428) {
			this.setState({
				chartHeight: 300,
				wrapperHeight: 300,
				maintainAspectRatio: false,
			})
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
				<Bar
					data={this.state.dataSet}
					height={this.state.chartHeight}
					options={{
						responsive: this.state.responsive,
						maintainAspectRatio: this.state.maintainAspectRatio,
						legend: {
							display: true,
							position: "top",
						},
					}}
				/>
			</div>
		)
	}
}
