import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import "./Home.css"

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length - 1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="container2">


				<div>
					<h1 style={{ fontSize: "45px" , color:"whitesmoke" }}>GPGCS CLASS ROOM</h1>
					<p style={{ fontWeight: "200" }}>Video and audio conferencing tool developed by </p>
					<p style={{ fontWeight: "200" }}>Muhammad Shoaib Mumtaz (BSSIT.16.40)</p>
					<p style={{ fontWeight: "200" }}>Muhammad Hassan Shakeel (BSSIT.16.43)</p>
				</div>

				<div style={{
					background: "", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "10px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "15px" }}>Click Go to start a new meeting, or you can paste a link to join existing one.</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "25px"  }}>Start Meeting / Join Meeting</Button>
				</div>
			</div>
		)
	}
}

export default Home;