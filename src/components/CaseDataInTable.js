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
		}
	}

	componentDidMount() {
		this.fetchdata().then(result => {
			this.setState(
				{
					tableData: result.data,
				},
				() => {
					this.setState({
						loading: false,
					})
				}
			)
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
				<Table borderless style={{ fontSize: "14px" }}>
					<thead style={{ background: "#DBEEFB" }}>
						<tr>
							<th>STATE/UT</th>
							<th>A</th>
							<th>C</th>
							<th>D</th>
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
			</div>
		)
	}
}
