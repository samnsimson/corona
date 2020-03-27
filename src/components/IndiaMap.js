import React from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"

import { get } from "axios"

export default class IndiaMap extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			geographies: [],
			caseData: [],
			hover: null,
			fillColor: "rgba(178, 57, 75, 0.2)",
		}
		this.fillColor = this.fillColor.bind(this)
	}

	componentDidMount() {
		this.fetchMapData().then(result => {
			this.setState({
				geographies: feature(result, result.objects.india).features,
			})
		})
		this.fetchCaseData().then(result => {
			this.setState(
				{
					caseData: result,
				},
				() => {
					console.log(this.state.caseData)
				}
			)
		})
	}

	fetchMapData = async () => {
		const data = await get(`${process.env.GATSBY_API_URL}/india`)
		return data.data
	}

	fetchCaseData = async () => {
		try {
			const data = await get(process.env.GATSBY_API_URL)
			return data.data
		} catch (err) {
			console.log(err)
		}
	}

	projection = geoMercator()
		.scale(1200)
		.center([83, 23])
		.translate([750 / 2, 750 / 2])

	fillColor = state => {
		const obj = { state: state }
		const check = this.state.caseData.some(e => e.state === obj.state)
		if (check) {
			let thisstate = this.state.caseData.filter(e => {
				return e.state === state
			})
			console.log(thisstate)
		}
	}

	render() {
		return (
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 750 750"
				preserveAspectRatio="xMidYMid meet"
			>
				<g className="states">
					{this.state.geographies.map((d, i) => (
						<path
							key={`path-${i}`}
							d={geoPath().projection(this.projection)(d)}
							className="state"
							fill={this.state.fillColor}
							stroke="#FFFFFF"
							strokeWidth={0.5}
							onClick={() => this.fillColor(d.properties.ST_NM)}
						/>
					))}
				</g>
			</svg>
		)
	}
}
