import React, { Component } from 'react';

import sr71top from '../svg/sr71-top.svg';
import sr71side from '../svg/sr71-side.svg';
import sr71front from '../svg/sr71-front.svg';

import xb70top from '../svg/xb70-top.svg';
import xb70side from '../svg/xb70-side.svg';
import xb70front from '../svg/xb70-front.svg';

class PlaneSVG extends Component {
	constructor(props) {
		super(props);
		this.state = {svg: this.getPlaneSvg(this.props)};
	}

	componentWillReceiveProps(nextProps){
		this.setState({view: nextProps.view});
		this.setState({svg: this.getPlaneSvg(nextProps)});
	}

	getPlaneSvg(props){
		let planeSvgs = {sr71: {0: sr71top, 1: sr71side, 2: sr71front},
					xb70: {0: xb70top, 1:  xb70side, 2: xb70front}
					};

		let plane = props.plane;
		let pView = props.view;

		console.log("YO" + planeSvgs[plane][pView])
		return planeSvgs[plane][pView]
	}
	render() {
		return (
		<div className="PlaneSVG">
			<object type="image/svg+xml" data={this.state.svg} className="plane-svg" aria-label={this.props.plane}></object>
		</div>
		);
	}
}

export default PlaneSVG;