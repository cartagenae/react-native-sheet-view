import React, { useMemo } from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

import Modal from 'react-native-modal';

const BottomSheet = ({
  visible,
  options = [],
  onCancel,
  onSelect,
  cancelText = 'Cancel',
  headerTitle,
  backgroundColor = '#fff',
  showCancelText = false,
  lineColor = 'lightgray',
  titleColor = '#000',
}) => {
  const handleSelectOption = (index) => {
    onSelect?.(index);
    onCancel?.();
  };

  // Memoize dynamic styles for better performance with React 19
  const containerStyle = useMemo(() => [
    styles.container,
    {
      marginBottom: Platform.OS === 'ios'
        ? 40
        : 0,
      width: Platform.OS === 'ios'
        ? '95%'
        : '100%',
    }
  ], []);

  const contentContainerStyle = useMemo(() => ({
    backgroundColor,
    borderRadius: Platform.OS === 'ios'
      ? 10
      : 0,
  }), [backgroundColor]);

  const titleContainerStyle = useMemo(() => [
    styles.title,
    {
      borderTopLeftRadius: Platform.OS === 'ios'
        ? 10
        : 0,
      borderTopRightRadius: Platform.OS === 'ios'
        ? 10
        : 0,
      borderBottomWidth: 1,
      borderBottomColor: lineColor,
    }
  ], [lineColor]);

  const titleTextStyle = useMemo(() => ({
    fontSize: 12,
    color: titleColor,
  }), [titleColor]);

  const cancelContainerStyle = useMemo(() => ({
    backgroundColor,
    borderRadius: Platform.OS === 'ios'
      ? 10
      : 0,
    borderColor: 'gray',
  }), [backgroundColor]);

  const cancelTextStyle = useMemo(() => ({
    color: Platform.OS === 'ios'
      ? '#2b70de'
      : 'red',
    fontWeight: '600',
    fontSize: 20,
  }), []);

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.5}
      onBackdropPress={onCancel}
      style={styles.modal}
      animationOut='slideOutDown'
      animationOutTiming={500}
    >
      <View style={containerStyle}>
        <View style={contentContainerStyle}>
          {
            headerTitle && (
              <View style={titleContainerStyle}>
                <Text style={titleTextStyle}>
                  {headerTitle}
                </Text>
              </View>
            )
          }
          {
            options.map((option, index) => {
              const isLastOption = index === options.length - 1;
              const optionStyle = [
                styles.option,
                {
                  borderBottomWidth: Platform.OS === 'ios'
                    ? (isLastOption ? 0 : 1)
                    : 1,
                  borderBottomColor: Platform.OS === 'ios'
                    ? (isLastOption ? null : lineColor)
                    : lineColor,
                }
              ];

              return (
                <Pressable
                  key={`option-${index}-${option}`}
                  style={optionStyle}
                  onPress={() => handleSelectOption(index)}
                >
                  <Text style={styles.optionText}>
                    {option}
                  </Text>
                </Pressable>
              );
            })
          }
        </View>

        {
          Platform.OS === 'ios' && (
            <View style={styles.spacer} />
          )
        }

        {
          showCancelText && (
            <View style={cancelContainerStyle}>
              <Pressable
                style={styles.cancelButton}
                onPress={onCancel}
              >
                <Text style={cancelTextStyle}>
                  {cancelText}
                </Text>
              </Pressable>
            </View>
          )
        }
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    elevation: 5,
  },
  title: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  option: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    color: '#2b70de',
    fontWeight: '500',
    fontSize: 20,
  },
  cancelButton: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    height: 15,
  },
});

export default BottomSheet;