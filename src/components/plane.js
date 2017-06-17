import React, { Component } from 'react';

import sr71top from '../svg/sr71-top.svg';
import sr71side from '../svg/sr71-side.svg';
import sr71front from '../svg/sr71-front.svg';

import xb70top from '../svg/xb70-top.svg';
import xb70side from '../svg/xb70-side.svg';
import xb70front from '../svg/xb70-front.svg';

import a380top from '../svg/a380-top.svg';
import a380side from '../svg/a380-side.svg';
import a380front from '../svg/a380-front.svg';

import f4ptop from '../svg/f4p-top.svg';
import f4pside from '../svg/f4p-side.svg';
import f4pfront from '../svg/f4p-front.svg';

import f111top from '../svg/f111-top.svg';
import f111side from '../svg/f111-side.svg';
import f111front from '../svg/f111-front.svg';

import an72top from '../svg/an72-top.svg';
import an72side from '../svg/an72-side.svg';
import an72front from '../svg/an72-front.svg';

import c172top from '../svg/c172-top.svg';
import c172side from '../svg/c172-side.svg';
import c172front from '../svg/c172-front.svg';

import rafaletop from '../svg/rafale-top.svg';
import rafaleside from '../svg/rafale-side.svg';
import rafalefront from '../svg/rafale-front.svg';

import su34top from '../svg/su34-top.svg';
import su34side from '../svg/su34-side.svg';
import su34front from '../svg/su34-front.svg';



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
					xb70: {0: xb70top, 1:  xb70side, 2: xb70front},
					a380: {0: a380top, 1:  a380side, 2: a380front},
					f4p: {0: f4ptop, 1:  f4pside, 2: f4pfront},
					f111: {0: f111top, 1: f111side, 2: f111front},
					an72: {0: an72top, 1: an72side, 2: an72front},
					c172: {0: c172top, 1: c172side, 2: c172front},
					rafale: {0: rafaletop, 1: rafaleside, 2: rafalefront},
					su34: {0: su34top, 1: su34side, 2: su34front}
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