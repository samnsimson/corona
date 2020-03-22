import React from "react"
import { Doughnut } from "react-chartjs-2"
import { Row } from "reactstrap"

export default class DoughnutChart extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataSet: props.dataSet,
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.dataSet !== this.props.dataSet) {
			this.setState({
				dataSet: this.props.dataSet,
			})
		}
	}

	render() {
		return (
			<Doughnut
				data={this.state.dataSet}
				height={150}
				options={{
					legend: {
						display: true,
						position: "right",
					},
					responsive: true,
					cutoutPercentage: 35,
					maintainAspectRatio: true,
				}}
			/>
		)
	}
}
