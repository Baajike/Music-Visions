import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function FeatureCard({
  title,
  description,
  image,
  backgroundColor,
  borderRadius,
  shadow,
}) {
  return (
    <View style={[styles.card, { backgroundColor, borderRadius, shadow }]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 16,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  hover: {
    backgroundColor: '#f0f0f0',
  },
  active: {
    backgroundColor: '#ccc',
  },
});