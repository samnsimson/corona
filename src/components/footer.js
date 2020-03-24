import React from "react"
import { Link } from "gatsby"
import { Col, Container } from "reactstrap"
export default class footer extends React.Component {
	render() {
		return (
			<Container fluid className="pt-3">
				<Col xs="12" className="py-3">
					<Container style={{ fontSize: "14px" }}>
						<p>
							<b>Disclaimer: </b> <Link to="/">coronavisindia.com</Link> is a
							privately owned website that is not owned or operated by any state
							or federal government agency. The contents in this website are
							curated from various sources to get you all the information about
							the latest Corona Virus outbreak all in one place. **The contents
							in this website are not ment to infuse wrong data to its users.
							the data are curated from various approved websites and are
							updated on a regular basis to provide the latest information
							available. **The contents in this website are not accurate and
							user verification with the live information/medical professional
							is adviced. The corona virus checker result is not final and users
							are strongly adviced to consult with a medical professional.{" "}
							<b>Sources: </b>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.mohfw.gov.in/"
							>
								www.mohfw.gov.in
							</a>
							{`, `}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://in.pinterest.com/search/pins/?q=corona%20virus&rs=typed&term_meta[]=corona%7Ctyped&term_meta[]=virus%7Ctyped"
							>
								pinterest.com
							</a>
							{`, `}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.wikipedia.org/"
							>
								wikipedia.org
							</a>
							{`, `}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.who.int/"
							>
								who.int
							</a>
							{`, `}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.cdc.gov/"
							>
								cdc.gov
							</a>
							. <b>Compliants: </b> If you have any complaints regarding this
							website please write to the email address{" "}
							<a href="mailto:contact@coranavisindia.com">
								contact@coranavisindia.com
							</a>
						</p>
						<p>
							<b>Need a website?</b> Do you need a website/app built to grow you
							business? We can help you have one. reach out to us @{" "}
							<a href="mailto:contact@coranavisindia.com">
								contact@coranavisindia.com
							</a>
						</p>
					</Container>
				</Col>
				<Col xs="12" className="text-center py-3">
					© {new Date().getFullYear()},{` `}
					<a href="https:/coronavisindia.com">CoronaVisIndia</a>
					<br /> by{" "}
					<a href="https://www.linkedin.com/in/samnishanthsimson/">
						Sam Simson
					</a>
				</Col>
			</Container>
		)
	}
}
