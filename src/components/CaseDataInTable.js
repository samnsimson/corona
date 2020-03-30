import React from "react"
import { Table, Col, Row } from "reactstrap"
import { get } from "axios"
import Spinner from "../components/Spinners"

export default class CaseDataInTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tableData: [],
			loading: true,
			ASC: false,
			ddefaultSortKey: "activecases",
		}
	}

	componentDidMount() {
		this.fetchdata().then(result => {
			this.setState(
				{
					tableData: this.sortData(result.data, "activecases", this.state.ASC),
				},
				() => {
					this.setState({
						loading: false,
					})
				}
			)
		})
	}

	sortData = (array, key, asc) => {
		return asc
			? array.sort((a, b) => a[key] - b[key])
			: array.sort((a, b) => b[key] - a[key])
	}

	toggleSortOrder = key => {
		this.setState({
			tableData: this.sortData(this.state.tableData, key, !this.state.ASC),
			ASC: !this.state.ASC,
		})
	}

	fetchdata = async () => {
		try {
			return await get(process.env.GATSBY_API_URL)
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		return (
			<div>
				<span style={{ fontSize: "12px", color: "#d3d3d3" }}>
					Click on A, C or D to sort
				</span>
				<Table borderless style={{ fontSize: "14px" }}>
					<thead style={{ background: "#DBEEFB" }}>
						<tr>
							<th>STATE/UT</th>
							<th
								style={{ cursor: "pointer" }}
								onClick={() => this.toggleSortOrder("activecases")}
							>
								A
							</th>
							<th
								style={{ cursor: "pointer" }}
								onClick={() => this.toggleSortOrder("curedcases")}
							>
								C
							</th>
							<th
								style={{ cursor: "pointer" }}
								onClick={() => this.toggleSortOrder("deadcases")}
							>
								D
							</th>
						</tr>
					</thead>
					<tbody style={{ background: "#F3F9FE" }}>
						{this.state.loading ? (
							<Spinner />
						) : (
							this.state.tableData.map((row, i) => {
								return (
									<tr key={i}>
										<td className="py-0" style={{ color: "rgba(0,0,0,0.4)" }}>
											{row.state}
										</td>
										<td className="text-primary py-0">{row.activecases}</td>
										<td className="text-success py-0">
											{row.curedcases.toString().replace(/0/g, "-")}
										</td>
										<td className="text-danger py-0">
											{row.deadcases.toString().replace(/0/g, "-")}
										</td>
									</tr>
								)
							})
						)}
					</tbody>
				</Table>
				<div>
					<span
						className="d-flex justify-content-between"
						style={{ fontSize: "12px" }}
					>
						<span className="text-primary">
							<b>A</b> - Active
						</span>
						<span className="text-success">
							<b>B</b> - Cured
						</span>
						<span className="text-danger">
							<b>D</b> - Dead
						</span>
					</span>
				</div>
			</div>
		)
	}
}
