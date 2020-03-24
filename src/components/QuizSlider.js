import React from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
import { Badge, Button, Row, Col, Progress } from "reactstrap"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default class Quiz extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			quizData: [],
			sum: "",
			percentage: "",
			quizResultArray: [
				"You show very less symptoms. It is less likely that you are vulnerable/affected by COVID-19",
				"You are showing mild symptoms that match closely with that of COVID-19.",
				"You are vulnerable to the virus and you show strong symptoms related to COVID-19.",
			],
			progressBg: "",
			resultToDisplay: "",
			advice: [],
			rSelected: null,
			setRSelected: null,
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

	questionArray = [
		{
			type: "age",
			question: "What is your age?",
			answer: [
				{
					name: "Below 35",
					value: 10,
				},
				{
					name: "35 to 65",
					value: 20,
				},
				{
					name: "Above 65",
					value: 30,
				},
			],
		},
		{
			type: "gender",
			question: "What is your gender?",
			answer: [
				{
					name: "Male",
					value: 12,
				},
				{
					name: "Female",
					value: 8,
				},
			],
		},
		{
			type: "fever",
			question: "How long do you have fever?",
			answer: [
				{
					name: "No Fever",
					value: 100,
				},
				{
					name: "Less than 5 days",
					value: 22,
				},
				{
					name: "5 to 10 days",
					value: 44,
				},
				{
					name: "More than 10 days",
					value: 88,
				},
			],
		},
		{
			type: "caugh",
			question: "Do you have dry caugh?",
			answer: [
				{
					name: "Yes",
					value: 68,
				},
				{
					name: "No",
					value: 0,
				},
			],
		},
		{
			type: "fatigue",
			question: "Do you feel fatigued?",
			answer: [
				{
					name: "Yes",
					value: 38,
				},
				{
					name: "No",
					value: 0,
				},
			],
		},
		{
			type: "breath",
			question: "Are you experiencing shortness of breath?",
			answer: [
				{
					name: "Yes",
					value: 19,
				},
				{
					name: "No",
					value: 0,
				},
			],
		},
		{
			type: "breath",
			question: "Are you experiencing pain in muscles or joints?",
			answer: [
				{
					name: "Yes",
					value: 15,
				},
				{
					name: "No",
					value: 0,
				},
			],
		},
		{
			type: "breath",
			question: "Are you having a sore throat?",
			answer: [
				{
					name: "Yes",
					value: 14,
				},
				{
					name: "No",
					value: 0,
				},
			],
		},
		{
			type: "breath",
			question: "Are you having headache?",
			answer: [
				{
					name: "Yes",
					value: 14,
				},
				{
					name: "No",
					value: 0,
				},
			],
		},
		{
			type: "breath",
			question: "Are you having chills?",
			answer: [
				{
					name: "Yes",
					value: 12,
				},
				{
					name: "No",
					value: 0,
				},
			],
		},
		{
			type: "breath",
			question: "Are you feeling nausea or vomiting?",
			answer: [
				{
					name: "Yes",
					value: 5,
				},
				{
					name: "No",
					value: 0,
				},
			],
		},
		{
			type: "breath",
			question:
				"Do you have other medical conditions such as asthma, diabetes or heart attack?",
			answer: [
				{
					name: "Yes",
					value: 25,
				},
				{
					name: "No",
					value: 0,
				},
			],
		},
	]

	setRSelected = value => {
		this.setState(
			{
				rSelected: value,
			},
			() => {
				console.log(this.state.rSelected)
			}
		)
	}

	handleClick = value => {
		if (value === 100) {
			this.slider.slickGoTo(this.questionArray.length)
		} else {
			this.tempValueArray.push(value)
			this.next()
		}
	}

	generateResult = e => {
		this.setState(
			{
				quizData: this.tempValueArray,
			},
			() => {
				var sum = this.state.quizData.reduce(function(a, b) {
					return a + b
				}, 0)
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
		let percentage = Math.floor((sum / 340) * 100)
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
				{this.questionArray.map((item, key) => {
					return (
						<div
							key={key}
							className="slideElement d-flex justify-content-center"
						>
							<div className="text-center">
								<h4 className="text-center mb-4">{item.question}</h4>
								{item.answer.map((elem, key) => {
									return (
										<Button
											key={key}
											color="primary"
											onClick={() => this.handleClick(elem.value)}
											className="mx-2"
										>
											{elem.name}
										</Button>
									)
								})}
							</div>
						</div>
					)
				})}
				<div className="slideElement d-flex flex-row justify-content-center">
					<div className="text-center">
						<h4 className="text-center">
							You have answered all the questions!
						</h4>
						<p className="text-center">
							Please click the button below to see the report
						</p>
						<div className="btn-group">
							<Button color="warning" onClick={this.generateResult}>
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
								<Link to="/information">How to protect yourself</Link>
							</p>
							<p className="my-0">
								<Link to="/information">What to do if you are sick?</Link>
							</p>
							<p className="my-0">
								<Link to="/information">What the Government says</Link>
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
