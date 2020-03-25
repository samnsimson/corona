import moment from "moment"

class PlotGenerator {
	simpleBarChart = (
		data,
		x = null,
		y = null,
		bgColor = null,
		borderColor = null,
		label = null
	) => {
		const state = {
			labels: [],
			datasets: [
				{
					label: label,
					backgroundColor: bgColor,
					borderColor: borderColor,
					borderWidth: 2,
					data: [],
				},
			],
		}
		data.map(function(item) {
			state.labels.push(item[x])
			state.datasets[0].data.push(item[y])
		})
		return state
	}

	DoughnutChart = (data, bgArray, hoverBroderArray, label) => {
		const state = {
			labels: [],
			datasets: [
				{
					backgroundColor: bgArray,
					hoverBorderColor: hoverBroderArray,
					hoverBorderWidth: 3,
					data: [],
				},
			],
		}
		data.map(function(item) {
			state.labels.push(item.key)
			state.datasets[0].data.push(item.value)
		})
		return state
	}

	LineChart = (data, x, y) => {
		let datasets = [],
			labels = []
		data.map(item => {
			labels.push(moment(item.day, "MM-DD-YYYY").format("MMM-D"))
			datasets.push(item.total)
		})
		let chart = {
			labels: labels,
			datasets: [
				{
					label: "No. of Corona virus cases",
					fill: true,
					backgroundColor: "rgba(252, 176, 66,0.6)",
					borderColor: "rgb(170, 114, 35)",
					pointRadius: 5,
					data: datasets,
				},
			],
		}
		return chart
	}

	LineChartAllCountry = data => {
		let datasets = [],
			labels = []
		data.map(item => {
			labels.push(moment(item.date).format("MMM-D"))
			datasets.push(item.confirmed)
		})

		let chart = {
			labels: labels,
			datasets: [
				{
					label: "No. of Corona virus cases",
					fill: true,
					backgroundColor: "rgba(252, 176, 66,0.6)",
					borderColor: "rgb(170, 114, 35)",
					pointRadius: 5,
					data: datasets,
				},
			],
		}
		return chart
	}
}

export default new PlotGenerator()
