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

		data.map(item => {
			let xLabel = this.checkfordate(item[x])
			state.labels.push(xLabel)
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
			state.labels.push(item.key.replace(" Cases", ""))
			state.datasets[0].data.push(item.value)
		})
		return state
	}

	LineChart = (data, x = null, y = null, bg = null, border = null) => {
		let datasets = [],
			labels = []
		data.map(item => {
			labels.push(moment(item[x], "MM-DD-YYYY").format("MMM-D"))
			datasets.push(item[y])
		})
		let chart = {
			labels: labels,
			datasets: [
				{
					label: "Total No. of cases",
					fill: true,
					backgroundColor: bg,
					borderColor: border,
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
			labels.push(moment(item.date, "YYYY-M-DD").format("MMM-D"))
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

	checkfordate(x) {
		var date_regex = /^((0|1)\d{1})-((0|1|2|3)\d{1})-((19|20|21)\d{2})/g
		return date_regex.test(x) ? moment(x, "MM-DD-YYYY").format("MMM-DD") : x
	}
}

export default new PlotGenerator()
