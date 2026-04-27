import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {
  InlineModal,
  InlineModalProvider,
} from 'react-native-screens/experimental';
import PressableWithFeedback from '@apps/shared/PressableWithFeedback';

export default function TestInlineModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <InlineModalProvider>
      <View style={styles.container}>
        <Text style={styles.title}>InlineModal Test</Text>
        <Text style={styles.providerText}>Full Screen Provider</Text>
        <View style={styles.spacing} />
        <Button title="Open Inline Modal" onPress={() => setIsOpen(true)} />
        <InlineModal isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
          <View style={styles.modalContent}>
            <PressableWithFeedback style={styles.pressable}>
              <Text style={styles.text}>Test Pressable</Text>
            </PressableWithFeedback>
            <View style={styles.spacing} />
            <Text style={styles.modalTitle}>Inline Modal Content</Text>
            <View style={styles.spacing} />
            <Button title="Dismiss from JS" onPress={() => setIsOpen(false)} />
          </View>
        </InlineModal>
      </View>
    </InlineModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  providerText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 12,
  },
  spacing: {
    height: 24,
  },
  pressable: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
  },
});
