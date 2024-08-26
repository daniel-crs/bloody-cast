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

export function PodcastPlayer({ audio }) {
    return (
        <MediaController className={styles.bg} audio>
            <audio
                slot="media"
                src={audio}
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