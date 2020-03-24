import React from "react"
import { Spinner } from "reactstrap"

export default class Spinners extends React.Component {
	render() {
		return (
			<div
				className="d-flex flex-row justify-content-center align-item-center"
				style={{ height: "4rem" }}
			>
				<Spinner
					type="grow"
					color="primary"
					style={{ width: "1.75rem", height: "1.75rem" }}
				/>
				<Spinner
					type="grow"
					color="primary"
					style={{ width: "1.75rem", height: "1.75rem" }}
				/>
				<Spinner
					type="grow"
					color="primary"
					style={{ width: "1.75rem", height: "1.75rem" }}
				/>
			</div>
		)
	}
}
