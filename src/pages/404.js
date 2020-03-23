import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<div
			id="notfound"
			className="d-flex h-100 align-items-center justify-content-center"
		>
			<div className="notfound">
				<div className="notfound-404">
					<h1>404</h1>
				</div>
				<h2>Oops! This Page Could Not Be Found</h2>
				<p>
					Sorry but the page you are looking for does not exist, have been
					removed. name changed or is temporarily unavailable
				</p>
				<Link to="/">Go To Homepage</Link>
			</div>
		</div>
	</Layout>
)

export default NotFoundPage
