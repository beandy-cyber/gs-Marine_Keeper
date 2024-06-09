import React, { useEffect, useState } from 'react';
import { Avatar, Card, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import api from '../api';

const Content = () => {
  const [projects, setProjects] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await api();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const handleCardPress = (projectId) => {
    navigation.navigate('LiveContent', { projectId });
  };

  return (
    <>
      {projects.map(project => (
        <Card
          key={project.id}
          style={{ margin: "10px" }}
          onPress={() => handleCardPress(project.id)}
        >
          <Card.Title title={project.project_name}/>
          <Card.Cover source={{ uri: 'https://images.pexels.com/photos/3157890/pexels-photo-3157890.jpeg?auto=compress&cs=tinysrgb&w=600' }} />
          <Text style={{ margin:"10px" }}>{project.project_short_description}</Text>
          <Card.Actions>
            <Avatar.Icon size={24} icon="account-multiple" style={{ backgroundColor: '#0B4F6C' }} />
            <Button>
              <Text style={{ color: '#0B4F6C' }}>2</Text>
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </>
  );
};

export default Content;
