import React, { useState, useEffect } from "react";
import { Tracks } from "../data/Tracks";
import styles from "./Audio.module.css";

export default function Track({ audioRef, isActive }) {
  const [trackIndex, setTrackIndex] = useState(0); // Track index hook
  const [currentTrack, setCurrentTrack] = useState(Tracks[trackIndex]); // Current track hook

  // useEffect for trackIndex and audioRef
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = Tracks[trackIndex].src;
      audioRef.current.loop = true;
    }
  }, [audioRef, trackIndex]);

  // Handle function
  const handleTrackChange = (index) => {
    setTrackIndex(index);
    setCurrentTrack(Tracks[index]);
  };

  return (
    <>
      <h2 className={styles.sounds}>Sounds</h2>
      <audio ref={audioRef} src={currentTrack.src} />
      <div className={styles.buttons}>
        {Tracks.map((sound, index) => (
          <button
            key={sound.id}
            onClick={() => handleTrackChange(index)}
            className={index === trackIndex ? styles.active : ""}
            disabled={isActive}
          >
            {sound.title}
          </button>
        ))}
      </div>
    </>
  );
}
