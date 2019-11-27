import React, {Component} from "react";
import Sound from 'react-sound';
import avengers from "./The_Avengers.mp3"

class Mysound extends Component  {
    render() {
        return (
            <Sound
                url={avengers}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300 /* in milliseconds */}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
            />

        );
    }
}
export default Mysound;