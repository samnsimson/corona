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
		data.map(item => {
			state.labels.push(item.key)
			state.datasets[0].data.push(item.value)
		})
		return state
	}
}

export default new PlotGenerator()
