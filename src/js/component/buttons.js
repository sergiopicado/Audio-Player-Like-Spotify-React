import React from "react";
import PropTypes from "prop-types";

const PlayStopButtons = props => {
	return (
		<div className="col-12">
			<div className="col-12 d-flex justify-content-center">
				<button
					className="btn btn-danger"
					id="backward"
					onClick={props.forwardBackward}>
					<i className="fas fa-backward" id="backward"></i>
				</button>

				<button className="btn btn-danger" onClick={props.pause}>
					<i className="fas fa-pause"></i>
				</button>

				<button className="btn btn-danger" onClick={props.play}>
					<i className="fas fa-play"></i>
				</button>

				<button
					className="btn btn-danger"
					id="forward"
					onClick={props.forwardBackward}>
					<i className="fas fa-forward" id="forward"></i>
				</button>
			</div>
		</div>
	);
};
PlayStopButtons.propTypes = {
	forwardBackward: PropTypes.func,
	pause: PropTypes.func,
	play: PropTypes.func
};
export default PlayStopButtons;
