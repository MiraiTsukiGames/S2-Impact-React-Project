import React, { useState, useEffect } from "react";
import { tracks } from "../data/tracks";
import Button from "../button/Button";
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
      <p>Select a sound</p>
      <audio ref={audioRef} src={currentTrack.src} />
      {tracks.map((sound, index) => (
        <Button
          key={sound.id}
          onClick={() => handleTrackChange(index)}
          text={sound.title}
        />
      ))}
    </>
  );
}
