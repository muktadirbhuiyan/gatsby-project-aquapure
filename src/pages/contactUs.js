import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const contactUs = () => (
  <Layout>
    <Seo title="Contact us" />
    <div className="breadcrumb-area">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title">
										<h2>Contact us</h2>
										<ul className="breadcrumb">
										   <li><a href="/">Home</a></li>
										   <li className="active">contact</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <!-- .row--> */}
						</div>
						{/* <!-- .container--> */}
					</div>
					{/* <!-- .breadcrumb-area--> */}

					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="map-head">
						    		<h2>Location map</h2>
						    	</div>
							</div>
							{/* <!-- .col-md-12--> */}
						</div>
						{/* <!-- .row--> */}
					</div>
					{/* <!-- .container--> */}

					<div className="map-area">
						<div id="mapCanvas" className="map-canvas"></div>
					</div>
					{/* <!-- .map-area--> */}

					<div className="container">
						<div className="row">
							<div className="form-section">
								<div className="col-md-8 col-xs-12 col-sm-8">
									<div className="main-contact-form">
										<h4>Contact</h4>
										<p>Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque. Penatibus et magnis dis parturient montes, nascetur ridiculus mus commodo ligula eget dolor.</p>
										<form action="">
											<input type="text" id="full-name" name="name" placeholder="Name"/>
											<input type="email" id="email" name="email" placeholder="Email"/>
											<input type="text" id="subject" name="subject" placeholder="Subject"/>
											<textarea name="message" id="message" cols="30" rows="4" placeholder="Message"></textarea>
											<input type="submit" className="btn" value="submit"/>
										</form>
									</div>
								</div>
								<div className="col-md-4 col-xs-12 col-sm-4">
									<div className="office-location">
										<div className="contact-us head-office">
											<h4>Head Office</h4>
											<address>
                      No.42-2,Ln 70, Shenlin Rd., Shengang Dist,  <br/>Taichung City 429, Taiwan(R.O.C.)
											</address>
											<address>
											 	<span>Email :</span> 
												<a href="info@aquapure.net">info@aquapure.net</a> 
											</address>
											<address>
											 	<span>Phones :</span> 
												Main: +886-4-2562-5880 <br/>
												Fax: +886-4-2562-8680 <br/>
											</address>
										</div>
										<div className="contact-us newyork-office">
											<h4>Newyork Office</h4>
											<address>
												3456 E. Wieding Road <br/>Tucson AZ, 3456
											</address>
											<address>
											 	<span>Email :</span> 
												<a href="info@aquapure.net">info@aquapure.net</a> 
											</address>
											<address>
											 	<span>Phones :</span> 
                         Main: +886-4-2562-5880 <br/>
												Fax: +886-4-2562-8680 <br/>
											</address>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
  </Layout>
)

export default contactUs
