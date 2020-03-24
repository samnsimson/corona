import React from "react"
import { Container, Row, Col, Table } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactGA from "react-ga"

export default class whattoeat extends React.Component {
	componentDidMount() {
		ReactGA.initialize(process.env.GATSBY_GOOGLE_UA)
		ReactGA.pageview(window.location.pathname + window.location.search)
	}

	render() {
		return (
			<Layout>
				<SEO title="What to eat? - Corona in India Visualized" />
				<Container>
					<Row className="mt-5 mb-3">
						<Col sm="12">
							<h4>What to eat to boost your immune response</h4>
							<p>
								Our immune systems may have blind spots. This might mean that
								our immune response doesn’t recognise certain bugs or the bugs
								have sneaky evasion strategies. But a healthy lifestyle will
								improve your immune response and help fight against the invading
								microbes
							</p>
						</Col>
					</Row>
					<Row>
						<Col md="12">
							<p>
								Immune boosting foods adviced by{" "}
								<a href="https://www.apollohospitals.com/">Apollo Hospitals</a>
							</p>
							<Table borderless>
								<thead style={{ backgroundColor: "rgba(215, 236, 251, 0.9)" }}>
									<tr>
										<th>FRUITS</th>
										<th>VEGETABLES</th>
										<th>NUTS</th>
										<th>LIQUIDS</th>
									</tr>
								</thead>
								<tbody style={{ backgroundColor: "rgba(215, 236, 251, 0.3)" }}>
									<tr>
										<td>Oranges/Sweet Lime</td>
										<td>Carrots/Beets</td>
										<td>Almonds (soaked overnight)</td>
										<td>2.5 - 3L / Day</td>
									</tr>
									<tr>
										<td>Pineapple</td>
										<td>Spinach/Palak</td>
										<td>Walnuts</td>
										<td>Fresh water</td>
									</tr>
									<tr>
										<td>Fresh Berries</td>
										<td>Cabbage</td>
										<td>
											<b>MISC</b>
										</td>
										<td>Coconut water</td>
									</tr>
									<tr>
										<td>Papaya</td>
										<td>Cauliflower</td>
										<td>Lemon</td>
										<td>Green Tea</td>
									</tr>
									<tr>
										<td>Kiwi</td>
										<td>Broccoli</td>
										<td>Garlic</td>
										<td>
											Homemade <br />
											Vitamin-C fruit juice
										</td>
									</tr>
									<tr>
										<td>Guava</td>
										<td>Egg plant/Brinjal</td>
										<td>Ginger</td>
										<td>Milk</td>
									</tr>
									<tr>
										<td>Tomatoes</td>
										<td>Capsicum/Bell peppers</td>
										<td>Turmeric</td>
										<td>Butter Milk</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
				</Container>
			</Layout>
		)
	}
}
