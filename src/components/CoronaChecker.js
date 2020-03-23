import React from "react"
import { Jumbotron, Button, Row, Col } from "reactstrap"
import QuizSlider from "../components/QuizSlider"

export default class CoronaChecker extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			jumboBg: "rgba(192,225,247,0.5)",
			showButton: true,
		}
		this.toggleButton = this.toggleButton.bind(this)
	}

	toggleButton = () => {
		this.setState({
			showButton: !this.state.showButton,
		})
	}

	render() {
		return (
			<Row
				className="mt-5"
				style={{
					backgroundColor: this.state.jumboBg,
					borderRadius: "0px",
					border: "1px solid #29a9ff",
					padding: "2em",
				}}
			>
				<Col xs="12">
					<h2 className="text-center" style={{ color: "#177fc4" }}>
						Check if you are vulnerable to <b>CORONA</b> or not
					</h2>
					<p className="text-center">
						By answering few simple question let us find if you are vulnerable
						to Corona aka COVID-19 or not.**
					</p>
					<p className="lead text-center">
						{this.state.showButton ? (
							<Button color="primary" onClick={this.toggleButton}>
								Check now
							</Button>
						) : null}
					</p>
					{this.state.showButton == false ? <QuizSlider /> : null}
				</Col>
			</Row>
		)
	}
}

