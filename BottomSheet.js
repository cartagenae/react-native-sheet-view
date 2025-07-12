import React from 'react';
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
  options,
  onCancel,
  onSelect,
  cancelText,
  headerTitle,
  backgroundColor,
  showCancelText,
  lineColor,
  titleColor,
}) => {
  const handleSelectOption = (index) => {
    onSelect(index);
    onCancel();
  };

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.5}
      onBackdropPress={onCancel}
      style={styles.modal}
      animationOut='slideOutDown'
      animationOutTiming={500}
    >
      <View
        style={[
          styles.container,
          {
            marginBottom: Platform.OS === 'ios'
              ? 40
              : 0,
            width: Platform.OS === 'ios'
              ? '95%'
              : '100%'
          }
        ]}
      >
        <View
          style={{
            backgroundColor: backgroundColor !== undefined
              ? backgroundColor
              : '#fff',
            borderRadius: Platform.OS === 'ios'
              ? 10
              : 0,
          }}
        >
          {
            headerTitle !== undefined && ((
              <View
                style={[
                  styles.title,
                  {
                    borderTopLeftRadius: Platform.OS === 'ios'
                      ? 10
                      : 0,
                    borderTopRightRadius: Platform.OS === 'ios'
                      ? 10
                      : 0,
                    borderBottomWidth: 1,
                    borderBottomColor: lineColor !== undefined
                      ? lineColor
                      : 'lightgray',
                  }
                ]}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: titleColor !== undefined
                      ? titleColor
                      : '#fff'
                  }}
                >
                  {headerTitle}
                </Text>
              </View>
            ))
          }
          {
            options.map((option, index) => (
              <Pressable
                key={index}
                style={[
                  styles.option,
                  {
                    borderBottomWidth: Platform.OS === 'ios'
                      ? index < options.length - 1
                        ? 1
                        : 0
                      : 1,
                    borderBottomColor: Platform.OS === 'ios'
                    ? index < options.length - 1
                      ? lineColor !== undefined
                        ? lineColor
                        : 'lightgray'
                      : null
                    : lineColor !== undefined
                      ? lineColor
                      : 'lightgray'
                  }
                ]}
                onPress={() => (
                  handleSelectOption(index)
                )}
              >
                <Text
                  style={{
                    color: '#2b70de',
                    fontWeight: 500,
                    fontSize: 20,
                  }}
                >
                  {option}
                </Text>
              </Pressable>
            ))
          }
        </View>

        {
          Platform.OS === 'ios' && ((
            <View
              style={{
                height: 15
              }}
            />
          ))
        }

        {
          showCancelText === true && ((
            <View
              style={{
                backgroundColor: backgroundColor !== undefined
                  ? backgroundColor
                  : '#fff',
                borderRadius: Platform.OS === 'ios'
                  ? 10
                  : 0,
                borderColor: 'gray',
              }}
            >
              <Pressable
                style={[
                  styles.cancelButton,
                ]}
                onPress={onCancel}
              >
                <Text
                  style={{
                    color: Platform.OS === 'ios'
                      ? '#2b70de'
                      : 'red',  
                    fontWeight: 600,
                    fontSize: 20,
                  }}
                >
                  {
                    cancelText !== undefined
                      ? cancelText
                      : 'Cancel'
                  }
                </Text>
              </Pressable>
            </View>
          ))
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
  cancelButton: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomSheet;