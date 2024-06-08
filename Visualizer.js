import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Audio, AudioAPI } from 'expo-av';

export default function Visualizer({ track }) {
  const sound = useRef(new Audio.Sound());
  const [soundData, setSoundData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadSound = async () => {
      await sound.current.unloadAsync();
      await sound.current.loadAsync({ uri: track.preview_url });
      await sound.current.playAsync();
      setIsPlaying(true);
    };

    if (track) {
      loadSound();
    }

    return () => {
      sound.current.unloadAsync();
    };
  }, [track]);

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(async () => {
        const { value } = await sound.current.getStatusAsync();
        if (value.didJustFinish) {
          setIsPlaying(false);
        } else {
          const soundData = await AudioAPI.getAudioBuffer({
            uri: track.preview_url,
          });
          setSoundData(soundData.getChannelData(0));
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [isPlaying, track]);

  return (
    <View style={styles.container}>
      {soundData.length > 0 && (
        <View style={styles.waveformContainer}>
          {soundData.map((data, index) => (
            <View
              key={index}
              style={[
                styles.waveformBar,
                {
                  height: Math.abs(data) * 100,
                  backgroundColor: `rgba(0, 0, 0, ${Math.abs(data)})`,
                },
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveformContainer: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  waveformBar: {
    width: 2,
    marginHorizontal: 1,
  },
});