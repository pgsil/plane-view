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
									a380: false
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
				</div>
			</div>
		);
	}
}

export default App;
