import React from "react"
import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	Col,
	Row,
	Table,
} from "reactstrap"

export default class HelplineSnippet extends React.Component {
	style = {
		cards: {
			backgroundColor: "rgba(215, 236, 251, 0.3)",
			borderRadius: "0px",
		},
	}
	render() {
		return (
			<Row className="mb-5">
				<Col sm="12">
					<Card body style={this.style.cards} className="px-0">
						<CardTitle className="px-2 mb-0 text-center">
							<b>HELPLINE CONTACTS</b>
						</CardTitle>
						<hr />
						<Table borderless>
							<tr>
								<td>Phone:</td>
								<td>
									<strong>
										<a href="tel:+911123978046">+91-11-23978046</a>
									</strong>
									<br />
									<span>Toll Free</span>
								</td>
							</tr>
							<tr>
								<td>Email:</td>
								<td>
									<strong>
										<a href="mailto:ncov2019@gov.in">ncov2019@gov.in</a>
									</strong>
									,{" "}
									<strong>
										<a href="mailto:ncov2019@gmail.com">ncov2019@gmail.com</a>
									</strong>
								</td>
							</tr>
						</Table>
					</Card>
				</Col>
			</Row>
		)
	}
}
