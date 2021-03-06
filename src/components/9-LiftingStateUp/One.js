import React, { Component } from "react";

class One extends Component {
	render() {
		return (
			<div>
				<h3 className="my-4 py-2" style={{ color: "Green" }}>
					Count : {this.props.count}
				</h3>
				<button className="btn btn-primary mx-4" onClick={this.props.Increment}>
					Increment
				</button>
				<button className="btn btn-danger mx-4" onClick={this.props.Decrement}>
					Decrement
				</button>
			</div>
		);
	}
}

export default One;
