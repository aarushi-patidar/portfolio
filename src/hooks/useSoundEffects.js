import { useState, useEffect, useCallback } from 'react';
import { soundSynth } from '../utils/audioSynthesizer';

export function useSoundEffects() {
  const [isMuted, setIsMuted] = useState(true);

  // Sync with global synthesizer
  useEffect(() => {
    soundSynth.setMuted(isMuted);
  }, [isMuted]);

  const toggleSound = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      soundSynth.setMuted(next);
      if (!next) {
        // Play a warm audio feedback clink when user un-mutes
        soundSynth.playClink();
      }
      return next;
    });
  }, []);

  const enableSound = useCallback(() => {
    setIsMuted(false);
    soundSynth.setMuted(false);
  }, []);

  const setMuted = useCallback((muted) => {
    setIsMuted(muted);
    soundSynth.setMuted(muted);
  }, []);

  return {
    isMuted,
    toggleSound,
    enableSound,
    setMuted,
    playEngineRev: (duration, pitch) => soundSynth.playEngineRev(duration, pitch),
    playClink: () => soundSynth.playClink(),
    playFlagFlutter: () => soundSynth.playFlagFlutter(),
    playPageTurn: () => soundSynth.playPageTurn(),
    playLightBeep: (freq) => soundSynth.playLightBeep(freq),
    playLightsOut: () => soundSynth.playLightsOut(),
    playFanfare: () => soundSynth.playFanfare()
  };
}
