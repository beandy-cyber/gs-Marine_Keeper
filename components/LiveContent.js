import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Video } from 'expo-av';
import fetchProjectById from '../api';

const LiveContent = () => {
  const [project, setProject] = useState(null);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [score, setScore] = useState(0);
  const route = useRoute();
  const { projectId } = route.params;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await fetchProjectById(projectId);
        setProject(data);
      } catch (error) {
        console.error('Erro ao buscar projeto:', error);
      }
    };

    fetchProject();
  }, [projectId]);

  const handleButtonPress = () => {
    if (!buttonPressed) {
      setButtonPressed(true);
      setScore(score + 1);
      alert('Obrigada pela sua ajuda! Já acionamos os órgãos reponsáveis');
    }
  };

  if (!project) {
    return <ActivityIndicator style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://videos.pexels.com/video-files/9570351/9570351-hd_1280_720_60fps.mp4' }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping
        isMuted={true}
      />
      <Text style={styles.title}>{project.project_name}</Text>
      <Text style={styles.description}>{project.project_long_description}</Text>
      <Button
        title={buttonPressed ? "Aguarde a verificação no local" : "Acione quando necessário"}
        onPress={handleButtonPress}
        color={buttonPressed ? "#add8e6" : "#007BFF"}
        disabled={buttonPressed}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FBFBFF',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
  },
});

export default LiveContent;
