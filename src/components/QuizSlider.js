import React from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
import {
	ButtonGroup,
	Input,
	Badge,
	Button,
	Row,
	Col,
	Progress,
} from "reactstrap"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default class QuizSlider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			quizData: [],
			sum: "",
			percentage: "",
			quizResultArray: [
				"You show very less symptoms. It is less likely that you are being affected by COVID-19",
				"You are showing mild symptoms of COVID-19. You are likely to be affected by the virus",
				"You are vulnerable to the virus and you show strong symptoms related to COVID-19.",
			],
			progressBg: "",
			resultToDisplay: "",
			advice: [],
		}
		this.tempValueArray = []
		this.resultantArray = []
		this.handleClick = this.handleClick.bind(this)
		this.generateResult = this.generateResult.bind(this)
		this.calcPercentage = this.calcPercentage.bind(this)
		this.next = this.next.bind(this)
		this.goToFirst = this.goToFirst.bind(this)
	}

	componentDidMount() {}

	handleClick = e => {
		e.preventDefault()
		let tempValue = e.target.value.replace(/\s+/g, "")
		tempValue = tempValue.toLowerCase()
		this.tempValueArray.push(tempValue)
		console.log(this.tempValueArray)
		this.next()
	}

	generateResult = e => {
		this.setState(
			{
				quizData: this.tempValueArray,
			},
			() => {
				this.state.quizData.map(item => {
					switch (item) {
						case "below35":
							this.resultantArray.push(10)
							break
						case "35to65":
							this.resultantArray.push(20)
							break
						case "above65":
							this.resultantArray.push(30)
							break
						case "male":
							this.resultantArray.push(12)
							break
						case "female":
							this.resultantArray.push(8)
							break
						case "lessthan5days":
							this.resultantArray.push(10)
							break
						case "5to10days":
							this.resultantArray.push(20)
							break
						case "morethan10days":
							this.resultantArray.push(30)
							break
						case "yes":
							this.resultantArray.push(20)
							break
						case "no":
							this.resultantArray.push(0)
							break
						default:
							this.resultantArray.push(0)
					}
				})
				var sum = this.resultantArray.reduce(function(a, b) {
					return a + b
				}, 0)
				console.log(this.resultantArray)
				this.setState(
					{
						sum: sum,
					},
					() => {
						this.calcPercentage(sum)
					}
				)
			}
		)
	}

	calcPercentage = sum => {
		let percentage = Math.floor((sum / 192) * 100)
		let report = "",
			progressBg = "",
			advice = ""
		if (percentage <= 40) {
			report = this.state.quizResultArray[0]
			progressBg = "success"
			advice = [
				"Stay away from the deceased",
				"Wash your hands properly",
				"Avoid public gatherings",
				"Follow precautions",
			]
		} else if (percentage > 40 && percentage <= 65) {
			report = this.state.quizResultArray[1]
			progressBg = "warning"
			advice = [
				"Consult with a Doctor",
				"Stay away from the deceased",
				"Wash your hands properly",
				"Avoid public gatherings",
			]
		} else {
			report = this.state.quizResultArray[2]
			progressBg = "danger"
			advice = [
				"Please colsult with a Doctor!",
				"Isolate yourself",
				"Follow medical advice",
			]
		}
		this.setState(
			{
				percentage: percentage,
				resultToDisplay: report,
				progressBg: progressBg,
				advice: advice,
			},
			() => {
				this.next()
			}
		)
	}

	next = e => {
		this.slider.slickNext()
	}

	goToFirst = e => {
		this.setState(
			{
				quizData: [],
				sum: "",
				percentage: "",
			},
			() => {
				this.tempValueArray = []
				this.resultantArray = []
				this.slider.slickGoTo(0)
			}
		)
	}

	render() {
		const options = {
			dots: false,
			infinite: false,
			fade: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			swipe: false,
			adaptiveHeight: true,
		}
		return (
			<Slider ref={c => (this.slider = c)} {...options} className="mt-5 mb-3">
				<div className="slideElement d-flex justify-content-center">
					<div className="text-center">
						<h4 className="text-center mb-4">What is your age?</h4>
						<ButtonGroup>
							<Input
								type="button"
								className="btn btn-info"
								value="Below 35"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="35 to 65"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="Above 65"
								onClick={this.handleClick}
							/>
						</ButtonGroup>
					</div>
				</div>
				<div className="slideElement d-flex justify-content-center">
					<div className="text-center">
						<h4 className="text-center mb-4">What is your gender?</h4>
						<ButtonGroup>
							<Input
								type="button"
								className="btn btn-info"
								value="Male"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="Female"
								onClick={this.handleClick}
							/>
						</ButtonGroup>
					</div>
				</div>
				<div className="slideElement d-flex flex-row justify-content-center">
					<div className="text-center">
						<h4 className="text-center mb-4">How long do you have fever?</h4>
						<ButtonGroup>
							<Input
								type="button"
								className="btn btn-info"
								value="No fever"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="Less than 5 days"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="5 to 10 days"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="More than 10 days"
								onClick={this.handleClick}
							/>
						</ButtonGroup>
					</div>
				</div>
				<div className="slideElement d-flex flex-row justify-content-center">
					<div className="text-center">
						<h4 className="text-center mb-4">Do you have dry cough?</h4>
						<ButtonGroup>
							<Input
								type="button"
								className="btn btn-info"
								value="Yes"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="No"
								onClick={this.handleClick}
							/>
						</ButtonGroup>
					</div>
				</div>
				<div className="slideElement d-flex flex-row justify-content-center">
					<div className="text-center">
						<h4 className="text-center mb-4">
							Are you experiencing shortness of breath?
						</h4>
						<ButtonGroup>
							<Input
								type="button"
								className="btn btn-info"
								value="Yes"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="No"
								onClick={this.handleClick}
							/>
						</ButtonGroup>
					</div>
				</div>
				<div className="slideElement d-flex flex-row justify-content-center">
					<div className="text-center">
						<h4 className="text-center mb-4">
							Are you experiencing persistent pain or pressure in the chest?
						</h4>
						<ButtonGroup>
							<Input
								type="button"
								className="btn btn-info"
								value="Yes"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="No"
								onClick={this.handleClick}
							/>
						</ButtonGroup>
					</div>
				</div>
				<div className="slideElement d-flex flex-row justify-content-center">
					<div className="text-center">
						<h4 className="text-center mb-4">Is you lips or face bluish?</h4>
						<ButtonGroup>
							<Input
								type="button"
								className="btn btn-info"
								value="Yes"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="No"
								onClick={this.handleClick}
							/>
						</ButtonGroup>
					</div>
				</div>
				<div className="slideElement d-flex flex-row justify-content-center">
					<div className="text-center">
						<h4 className="text-center mb-4">
							Are you feeling confused or inability to arouse?
						</h4>
						<ButtonGroup>
							<Input
								type="button"
								className="btn btn-info"
								value="Yes"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="No"
								onClick={this.handleClick}
							/>
						</ButtonGroup>
					</div>
				</div>
				<div className="slideElement d-flex flex-row justify-content-center">
					<div className="text-center">
						<h4 className="text-center mb-4">
							Do you have other medical conditions
							<br />
							(such as asthma, diabetes, or heart disease)?
						</h4>
						<ButtonGroup>
							<Input
								type="button"
								className="btn btn-info"
								value="Yes"
								onClick={this.handleClick}
							/>
							<Input
								type="button"
								className="btn btn-info"
								value="No"
								onClick={this.handleClick}
							/>
						</ButtonGroup>
					</div>
				</div>
				<div className="slideElement d-flex flex-row justify-content-center">
					<div className="text-center">
						<h4 className="text-center">
							You have answered all the questions!
						</h4>
						<p className="text-center">
							Please click the button below to see the report
						</p>
						<div className="btn-group">
							<Button color="info" onClick={this.generateResult}>
								See Report
							</Button>
						</div>
					</div>
				</div>
				<div className="slideElement">
					<Row>
						<Col md="3">
							<h1
								className={`mb-3 text-${this.state.progressBg}`}
								style={{ fontSize: "4.5rem" }}
							>
								<b>{this.state.percentage}%</b>
							</h1>
							<Progress
								animated
								color={this.state.progressBg}
								value={this.state.percentage}
								max="100"
							>
								{this.state.percentage}%
							</Progress>
							<p>
								<small>symptoms matched</small>
							</p>
						</Col>
						<Col md="6">
							<h5>
								<b>{this.state.resultToDisplay}</b>
							</h5>
							{Array.isArray(this.state.advice) && this.state.advice.length ? (
								<Advice advice={this.state.advice} />
							) : null}

							<p style={{ fontSize: "14px", lineHeight: "12px" }}>
								<small>
									These results are not accurate. Please consult a medical
									professional for any other symptoms that are severe or
									concerning
								</small>
							</p>
						</Col>
						<Col>
							<p className="my-0">
								<strong>What's next?</strong>
							</p>
							<p className="my-0">
								<Link to="/">How to protect yourself</Link>
							</p>
							<p className="my-0">
								<Link to="#">What to do if you are sick?</Link>
							</p>
							<p className="my-0">
								<Link to="#">What the Government says</Link>
							</p>
							<Button color="primary" size="sm" onClick={this.goToFirst}>
								Recheck
							</Button>
						</Col>
					</Row>
				</div>
			</Slider>
		)
	}
}

const Advice = props => {
	return (
		<Col sm="12" className="px-0 mb-2">
			{props.advice.map((item, key) => {
				return (
					<Badge
						color="info"
						key={key}
						className="mx-1 py-1 px-2"
						style={{ borderRadius: 0 }}
					>
						{item}
					</Badge>
				)
			})}
		</Col>
	)
}
