import React from "react";
import PropTypes from "prop-types";

const SongList = props => {
	return (
		<div className="col-12">
			{props.songs.map((song, index) => {
				return (
					<div
						className="song col-12 text-center"
						id={index}
						key={index}
						onClick={props.method}>
						{song.name}
					</div>
				);
			})}
		</div>
	);
};

SongList.propTypes = {
	songs: PropTypes.array,
	method: PropTypes.func
};

export default SongList;
