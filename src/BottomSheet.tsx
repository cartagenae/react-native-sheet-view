
import { useEffect, useMemo, useRef, useState } from 'react';

import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

export type BottomSheetProps = {
  visible: boolean;
  options?: string[];
  onCancel?: () => void;
  onSelect?: (index: number) => void;
  cancelText?: string;
  headerTitle?: string;
  backgroundColor?: string;
  showCancelText?: boolean;
  lineColor?: string;
  titleColor?: string;
};

const SLIDE_DISTANCE = Dimensions.get('window').height;
const MOTION_DURATION = 280;

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
}: BottomSheetProps) => {
  const [presented, setPresented] = useState(visible);
  const presentedRef = useRef(visible);

  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(SLIDE_DISTANCE)).current;

  useEffect(() => {
    if (visible) {
      setPresented(true);
      return;
    }

    if (!presentedRef.current) {
      return;
    }

    const animation = Animated.parallel([
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: MOTION_DURATION,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: SLIDE_DISTANCE,
        duration: MOTION_DURATION,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
    ]);

    animation.start(({ finished }) => {
      if (finished) {
        presentedRef.current = false;
        setPresented(false);
      }
    });

    return () => animation.stop();
  }, [visible, backdropOpacity, translateY]);

  useEffect(() => {
    if (!presented || !visible) {
      return;
    }

    presentedRef.current = true;

    backdropOpacity.setValue(0);
    translateY.setValue(SLIDE_DISTANCE);

    const animation = Animated.parallel([
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: MOTION_DURATION,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: MOTION_DURATION,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]);

    animation.start();

    return () => animation.stop();
  }, [presented, visible, backdropOpacity, translateY]);

  const handleSelectOption = (index: number) => {
    onSelect?.(index);
    onCancel?.();
  };

  // Memoize dynamic styles for React 19 compatibility.
  const containerStyle = useMemo<ViewStyle[]>(
    () => [
      styles.container,
      {
        marginBottom: Platform.OS === 'ios' ? 40 : 0,
        width: Platform.OS === 'ios' ? '95%' : '100%',
      },
    ],
    []
  );

  const contentContainerStyle = useMemo<ViewStyle>(
    () => ({
      backgroundColor,
      borderRadius: Platform.OS === 'ios' ? 10 : 0,
    }),
    [backgroundColor]
  );

  const titleContainerStyle = useMemo<ViewStyle[]>(
    () => [
      styles.title,
      {
        borderTopLeftRadius: Platform.OS === 'ios' ? 10 : 0,
        borderTopRightRadius: Platform.OS === 'ios' ? 10 : 0,
        borderBottomWidth: 1,
        borderBottomColor: lineColor,
      },
    ],
    [lineColor]
  );

  const titleTextStyle = useMemo<TextStyle>(
    () => ({
      fontSize: 12,
      color: titleColor,
    }),
    [titleColor]
  );

  const cancelContainerStyle = useMemo<ViewStyle>(
    () => ({
      backgroundColor,
      borderRadius: Platform.OS === 'ios' ? 10 : 0,
      borderColor: 'gray',
    }),
    [backgroundColor]
  );

  const cancelTextStyle = useMemo<TextStyle>(
    () => ({
      color: Platform.OS === 'ios' ? '#2b70de' : 'red',
      fontWeight: '600',
      fontSize: 20,
    }),
    []
  );

  return (
    <Modal
      visible={presented}
      transparent
      animationType="none"
      onRequestClose={() => onCancel?.()}
    >
      <View style={styles.modal}>
        <Animated.View
          pointerEvents={visible ? 'auto' : 'none'}
          style={[
            styles.backdrop,
            { opacity: backdropOpacity },
          ]}
        >
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => onCancel?.()}
          />
        </Animated.View>

        <Animated.View
          style={[
            containerStyle,
            { transform: [{ translateY }] },
          ]}
        >
          <View style={contentContainerStyle}>
            {headerTitle && (
              <View style={titleContainerStyle}>
                <Text style={titleTextStyle}>
                  {headerTitle}
                </Text>
              </View>
            )}

            {options.map((option, index) => {
              const isLastOption =
                index === options.length - 1;

              const optionStyle: ViewStyle[] = [
                styles.option,
                {
                  borderBottomWidth:
                    Platform.OS === 'ios'
                      ? isLastOption
                        ? 0
                        : 1
                      : 1,
                  borderBottomColor:
                    Platform.OS === 'ios'
                      ? isLastOption
                        ? undefined
                        : lineColor
                      : lineColor,
                },
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
            })}
          </View>

          {Platform.OS === 'ios' && (
            <View style={styles.spacer} />
          )}

          {showCancelText && (
            <View style={cancelContainerStyle}>
              <Pressable
                style={styles.cancelButton}
                onPress={() => onCancel?.()}
              >
                <Text style={cancelTextStyle}>
                  {cancelText}
                </Text>
              </Pressable>
            </View>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
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
