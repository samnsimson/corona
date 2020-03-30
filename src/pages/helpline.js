import React from "react"
import { Row, Col, Table } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactGA from "react-ga"

export default class helpline extends React.Component {
	componentDidMount() {
		ReactGA.initialize(process.env.GATSBY_GOOGLE_UA)
		ReactGA.pageview(window.location.pathname + window.location.search)
	}

	render() {
		return (
			<Layout>
				<SEO
					title="Helpline | Corona in India Visualized"
					description="Government of India and its states has provided a list of helpline numbers to know and get information about the pandemic in india. View the list of phone numbers"
				></SEO>
				<Row className="my-5">
					<Col xs="12" className="pb-3">
						<h1 style={{ fontSize: "1rem" }}>
							<b>HELPLINE NUMBERS FOR EACH STATE</b>
						</h1>
					</Col>
					<Col md="6">
						<Table borderless>
							<thead style={{ backgroundColor: "rgba(215, 236, 251, 0.9)" }}>
								<tr>
									<th>States</th>
									<th>Phone numbers</th>
								</tr>
							</thead>
							<tbody style={{ backgroundColor: "rgba(215, 236, 251, 0.3)" }}>
								<tr>
									<td>Andhra Pradesh</td>
									<td>
										<a rel="noopener noreferrer" href="tel:08662410978">
											0866-2410978
										</a>
									</td>
								</tr>
								<tr>
									<td>Arunachal Pradesh</td>
									<td>
										<a rel="noopener noreferrer" href="tel:9436055743">
											9436055743
										</a>
									</td>
								</tr>
								<tr>
									<td>Assam </td>
									<td>
										<a rel="noopener noreferrer" href="tel:6913347770">
											6913347770
										</a>
									</td>
								</tr>
								<tr>
									<td>Bihar </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Chhattisgarh</td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Goa </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Gujarat </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Haryana</td>
									<td>
										<a rel="noopener noreferrer" href="tel:8558893911">
											8558893911
										</a>
									</td>
								</tr>
								<tr>
									<td>Himachal Pradesh </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Jharkhand </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Karnataka </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Kerala </td>
									<td>
										<a rel="noopener noreferrer" href="tel:04712552056">
											0471-2552056
										</a>
									</td>
								</tr>
								<tr>
									<td>Madhya Pradesh </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Maharashtra </td>
									<td>
										<a rel="noopener noreferrer" href="tel:02026127394">
											02026127394
										</a>
									</td>
								</tr>
								<tr>
									<td>Manipur </td>
									<td>
										<a rel="noopener noreferrer" href="tel:3852411668">
											3852411668
										</a>
									</td>
								</tr>
								<tr>
									<td>Meghalaya </td>
									<td>
										<a rel="noopener noreferrer" href="tel:108">
											108
										</a>
									</td>
								</tr>
								<tr>
									<td>Mizoram </td>
									<td>
										<a rel="noopener noreferrer" href="tel:102">
											102
										</a>
									</td>
								</tr>
								<tr>
									<td>Nagaland </td>
									<td>
										<a rel="noopener noreferrer" href="tel:7005539653">
											7005539653
										</a>
									</td>
								</tr>
								<tr>
									<td>Odisha </td>
									<td>
										<a rel="noopener noreferrer" href="tel:9439994859">
											9439994859
										</a>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col md="6">
						<Table borderless>
							<thead style={{ backgroundColor: "rgba(215, 236, 251, 0.9)" }}>
								<tr>
									<th>
										<strong>States</strong>
									</th>
									<th>
										<strong>Phone numbers</strong>
									</th>
								</tr>
							</thead>
							<tbody style={{ backgroundColor: "rgba(215, 236, 251, 0.3)" }}>
								<tr>
									<td>Punjab </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Rajasthan </td>
									<td>
										<a rel="noopener noreferrer" href="tel:01412225624">
											01412225624
										</a>
									</td>
								</tr>
								<tr>
									<td>Sikkim </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Tamil Nadu </td>
									<td>
										<a rel="noopener noreferrer" href="tel:04429510500">
											04429510500
										</a>
									</td>
								</tr>
								<tr>
									<td>Telangana </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Tripura </td>
									<td>
										<a rel="noopener noreferrer" href="tel:03812315879">
											03812315879
										</a>
									</td>
								</tr>
								<tr>
									<td>Uttarakhand </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Uttar Pradesh </td>
									<td>
										<a rel="noopener noreferrer" href="tel:18001805145">
											18001805145
										</a>
									</td>
								</tr>
								<tr>
									<td>West Bengal </td>
									<td>
										<a rel="noopener noreferrer" href="tel:1800313444222">
											1800313444222
										</a>
										{`, `}
										<a rel="noopener noreferrer" href="tel:03323412600">
											03323412600
										</a>
									</td>
								</tr>
								<tr>
									<td>Andaman and NicobarIslands </td>
									<td>
										<a rel="noopener noreferrer" href="tel:03192232102">
											03192232102
										</a>
									</td>
								</tr>
								<tr>
									<td>Chandigarh </td>
									<td>
										<a rel="noopener noreferrer" href="tel:9779558282">
											9779558282
										</a>
									</td>
								</tr>
								<tr>
									<td>Dadra and Nagar Haveli and Daman & Diu </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Delhi </td>
									<td>
										<a rel="noopener noreferrer" href="tel:01122307145">
											011-22307145
										</a>
									</td>
								</tr>
								<tr>
									<td>Jammu & Kashmir </td>
									<td>
										<a rel="noopener noreferrer" href="tel:01912520982">
											01912520982
										</a>
										{`, `}
										<a rel="noopener noreferrer" href="tel:01942440283">
											0194-2440283
										</a>
									</td>
								</tr>
								<tr>
									<td>Ladakh </td>
									<td>
										<a rel="noopener noreferrer" href="tel:01982256462">
											01982256462
										</a>
									</td>
								</tr>
								<tr>
									<td>Lakshadweep </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
								<tr>
									<td>Puducherry </td>
									<td>
										<a rel="noopener noreferrer" href="tel:104">
											104
										</a>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Layout>
		)
	}
}
