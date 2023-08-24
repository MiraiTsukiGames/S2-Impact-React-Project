import React, { useState, useEffect } from "react";
import { tracks } from "../data/tracks";
import styles from "./Audio.module.css";

export default function Track({ audioRef }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[trackIndex].src;
      audioRef.current.loop = true;
    }
  }, [audioRef, trackIndex]);

  const handleTrackChange = (index) => {
    setTrackIndex(index);
    setCurrentTrack(tracks[index]);
  };

  return (
    <>
      <h2 className={styles.sounds}>Sounds</h2>
      <audio ref={audioRef} src={currentTrack.src} />
      <div className={styles.buttons}>
      {tracks.map((sound, index) => (
        <button key={sound.id}
          onClick={() => handleTrackChange(index)}
          className={index === trackIndex ? styles.active : ""}
          >
          {sound.icon}
          </button>
      ))}
      </div>
    </>
  );
}
