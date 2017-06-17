import React, { Component } from 'react';
import Draggable from 'react-draggable'; // Both at the same time
import './App.css';

import PlaneSVG from './components/plane';
import SettingsBox from './components/zoom-slider';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {zoom: 1,
									view: 0,
									sr71: true,
									xb70: true,
									a380: false,
									f4p: false,
									f111: false,
									an72: false,
									c172: false,
									rafale: false,
									su34: false,
									};
		this.handleSetZoom = this.handleSetZoom.bind(this);
		this.handleHidePlane = this.handleHidePlane.bind(this);
	}

	handleSetZoom(zoom){
			this.setState({zoom: zoom});
	}
	handleHidePlane(plane, bool){
		this.setState({[plane]: bool});
	}
	handleChangeView(view){
		this.setState({view: view});
	}

	render() {
		console.log("Render!");

		return (
			<div className="App">
				<SettingsBox onZoom={this.handleSetZoom} onPlaneCheck={this.handleHidePlane} onChangeView={this.handleChangeView.bind(this)} />

				<div className="planes-display " style={{zoom: this.state.zoom, "-moz-transform": "scale(" + this.state.zoom + ")", "-moz-transform-origin": "0 0"}}>
					{this.state.sr71 ? 
						<Draggable axis="both" handle=".handle" position={null}>
							<div className="wrap-drag">
								<div className="handle">Drag: SR-71</div>
								<PlaneSVG plane="sr71" view={this.state.view}/> 
							</div>
						</Draggable>
					: null}
						
					{this.state.xb70 ? 
						<Draggable axis="both" handle=".handle" position={null}>
							<div className="wrap-drag">
								<div className="handle">Drag: XB-70</div>
								<PlaneSVG plane="xb70" view={this.state.view}/>
							</div>
						</Draggable>
					: null}

					{this.state.a380 ? 
						<Draggable axis="both" handle=".handle" position={null}>
							<div className="wrap-drag">
								<div className="handle">Drag: A380-800</div>
								<PlaneSVG plane="a380" view={this.state.view}/> 
							</div>
						</Draggable>
					: null}

					{this.state.f4p ? 
						<Draggable axis="both" handle=".handle" position={null}>
							<div className="wrap-drag">
								<div className="handle">Drag: F-4 Phantom II</div>
								<PlaneSVG plane="f4p" view={this.state.view}/> 
							</div>
						</Draggable>
					: null}

					{this.state.f111 ? 
						<Draggable axis="both" handle=".handle" position={null}>
							<div className="wrap-drag">
								<div className="handle">Drag: F-111</div>
								<PlaneSVG plane="f111" view={this.state.view}/> 
							</div>
						</Draggable>
					: null}

					{this.state.an72 ? 
						<Draggable axis="both" handle=".handle" position={null}>
							<div className="wrap-drag">
								<div className="handle">Drag: An-72</div>
								<PlaneSVG plane="an72" view={this.state.view}/> 
							</div>
						</Draggable>
					: null}

					{this.state.c172 ? 
						<Draggable axis="both" handle=".handle" position={null}>
							<div className="wrap-drag">
								<div className="handle">Drag: Cessna 172</div>
								<PlaneSVG plane="c172" view={this.state.view}/> 
							</div>
						</Draggable>
					: null}

					{this.state.rafale ? 
						<Draggable axis="both" handle=".handle" position={null}>
							<div className="wrap-drag">
								<div className="handle">Drag: Dassault Rafale</div>
								<PlaneSVG plane="rafale" view={this.state.view}/> 
							</div>
						</Draggable>
					: null}

					{this.state.su34 ? 
						<Draggable axis="both" handle=".handle" position={null}>
							<div className="wrap-drag">
								<div className="handle">Drag: Su-34</div>
								<PlaneSVG plane="su34" view={this.state.view}/> 
							</div>
						</Draggable>
					: null}
				</div>
			</div>
		);
	}
}

export default App;
