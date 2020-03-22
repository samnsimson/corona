import React from "react"
import axios from "axios"
import { Link } from "gatsby"
import { Row, Col, Card, CardTitle, CardText, CardBody } from "reactstrap"

export default class AboutCorona extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			description: "",
		}
	}

	fetchData = async () => {
		try {
			const data = await axios.get("http://localhost:3333/api/intro")
			this.setState({
				description: data.data,
			})
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		this.fetchData()
		return (
			<Row>
				<Col sm="12">
					<Card>
						<CardBody>
							<CardTitle>
								<strong>About CORONA (COVID-19)</strong>
							</CardTitle>
							<CardText>
								{Array.isArray(this.state.description) &&
								this.state.description.length
									? this.state.description[0].description
									: null}
								<small>
									source:{" "}
									<Link to="https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_India">
										Wikipedia
									</Link>
								</small>
							</CardText>
						</CardBody>
					</Card>
				</Col>
			</Row>
		)
	}
}
