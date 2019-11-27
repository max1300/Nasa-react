import React, {Component} from "react";
import Sound from 'react-sound';
import vador from "../Star_Wars-_The_Imperial_March_Darth_Vaders_Theme.mp3"

class Mysound extends Component  {
    render() {
        return (
            <Sound
                url={vador}
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