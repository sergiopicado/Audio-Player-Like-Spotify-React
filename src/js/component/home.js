import React from "react";

import SongList from "./songList.js";
import PlayStopButtons from "./buttons.js";
export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			fetchData: [],
			mp3: "",
			songPosition: 0
		};
		this.player = null;
	}
	pause() {
		this.player.pause();
	}
	play() {
		this.player.play();
	}
	forwardBackward(event) {
		if (
			event.target.id === "forward" &&
			this.state.songPosition < 22 &&
			this.state.songPosition >= 0
		) {
			this.player.src =
				"https://assets.breatheco.de/apis/sound/" + this.state.mp3;

			this.setState({ songPosition: this.state.songPosition + 1 });
			this.setState({
				mp3: this.state.fetchData[this.state.songPosition].url
			});
		}

		if (
			event.target.id === "backward" &&
			this.state.songPosition >= 0 &&
			this.state.songPosition < 22
		) {
			this.player.src =
				"https://assets.breatheco.de/apis/sound/" + this.state.mp3;
			this.setState({ songPosition: this.state.songPosition - 1 });
			this.setState({
				mp3: this.state.fetchData[this.state.songPosition].url
			});
		}
	}
	playSong(event) {
		this.player.src = "https://assets.breatheco.de/apis/sound/";
		this.setState({
			songPosition: parseInt(event.target.id)
		});
		this.setState({
			mp3: this.state.fetchData[this.state.songPosition].url
		});
		this.player.src =
			"https://assets.breatheco.de/apis/sound/" + this.state.mp3;
	}
	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(response => response.json())
			.then(data => {
				this.setState({ fetchData: data });
			});
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<SongList
						songs={this.state.fetchData}
						method={this.playSong.bind(this)}
					/>
				</div>
				<div className="row">
					<audio autoPlay ref={t => (this.player = t)}></audio>
				</div>
				<div className="row">
					<PlayStopButtons
						forwardBackward={this.forwardBackward.bind(this)}
						pause={this.pause.bind(this)}
						play={this.play.bind(this)}
					/>
				</div>
			</div>
		);
	}
}
export default Home;
