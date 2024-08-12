import styles from "./PodcastPlayer.module.css"

import { 
    MediaController, 
    MediaControlBar,
    MediaPlayButton,
    MediaTimeDisplay,
    MediaTimeRange,
    MediaPlaybackRateButton,
    MediaMuteButton
  } from 'media-chrome/react';

export function PodcastPlayer() {
    return (
        <MediaController className={styles.bg} audio>
            <audio
                slot="media"
                src="https://stream.mux.com/O4h5z00885HEucNNa1rV02wZapcGp01FXXoJd35AHmGX7g/audio.m4a"
            ></audio>
            <MediaControlBar className={styles.container}>
                <MediaTimeDisplay showDuration className={styles.timer}></MediaTimeDisplay>
                <MediaTimeRange className={styles.rangeLine}></MediaTimeRange>
                <div className={styles.buttons}>
                    <MediaPlaybackRateButton className={styles.rate}></MediaPlaybackRateButton>
                    <MediaPlayButton className={styles.play}></MediaPlayButton>
                    <MediaMuteButton className={styles.mute}></MediaMuteButton>
                </div>
            </MediaControlBar>
        </MediaController>
    )
}