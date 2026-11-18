"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
const SLIDE_DISTANCE = _reactNative.Dimensions.get('window').height;
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
  titleColor = '#000'
}) => {
  const [presented, setPresented] = (0, _react.useState)(visible);
  const presentedRef = (0, _react.useRef)(visible);
  const backdropOpacity = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const translateY = (0, _react.useRef)(new _reactNative.Animated.Value(SLIDE_DISTANCE)).current;
  (0, _react.useEffect)(() => {
    if (visible) {
      setPresented(true);
      return;
    }
    if (!presentedRef.current) {
      return;
    }
    const animation = _reactNative.Animated.parallel([_reactNative.Animated.timing(backdropOpacity, {
      toValue: 0,
      duration: MOTION_DURATION,
      easing: _reactNative.Easing.in(_reactNative.Easing.cubic),
      useNativeDriver: true
    }), _reactNative.Animated.timing(translateY, {
      toValue: SLIDE_DISTANCE,
      duration: MOTION_DURATION,
      easing: _reactNative.Easing.in(_reactNative.Easing.cubic),
      useNativeDriver: true
    })]);
    animation.start(({
      finished
    }) => {
      if (finished) {
        presentedRef.current = false;
        setPresented(false);
      }
    });
    return () => animation.stop();
  }, [visible, backdropOpacity, translateY]);
  (0, _react.useEffect)(() => {
    if (!presented || !visible) {
      return;
    }
    presentedRef.current = true;
    backdropOpacity.setValue(0);
    translateY.setValue(SLIDE_DISTANCE);
    const animation = _reactNative.Animated.parallel([_reactNative.Animated.timing(backdropOpacity, {
      toValue: 1,
      duration: MOTION_DURATION,
      easing: _reactNative.Easing.out(_reactNative.Easing.cubic),
      useNativeDriver: true
    }), _reactNative.Animated.timing(translateY, {
      toValue: 0,
      duration: MOTION_DURATION,
      easing: _reactNative.Easing.out(_reactNative.Easing.cubic),
      useNativeDriver: true
    })]);
    animation.start();
    return () => animation.stop();
  }, [presented, visible, backdropOpacity, translateY]);
  const handleSelectOption = index => {
    onSelect?.(index);
    onCancel?.();
  };

  // Memoize dynamic styles for React 19 compatibility.
  const containerStyle = (0, _react.useMemo)(() => [styles.container, {
    marginBottom: _reactNative.Platform.OS === 'ios' ? 40 : 0,
    width: _reactNative.Platform.OS === 'ios' ? '95%' : '100%'
  }], []);
  const contentContainerStyle = (0, _react.useMemo)(() => ({
    backgroundColor,
    borderRadius: _reactNative.Platform.OS === 'ios' ? 10 : 0
  }), [backgroundColor]);
  const titleContainerStyle = (0, _react.useMemo)(() => [styles.title, {
    borderTopLeftRadius: _reactNative.Platform.OS === 'ios' ? 10 : 0,
    borderTopRightRadius: _reactNative.Platform.OS === 'ios' ? 10 : 0,
    borderBottomWidth: 1,
    borderBottomColor: lineColor
  }], [lineColor]);
  const titleTextStyle = (0, _react.useMemo)(() => ({
    fontSize: 12,
    color: titleColor
  }), [titleColor]);
  const cancelContainerStyle = (0, _react.useMemo)(() => ({
    backgroundColor,
    borderRadius: _reactNative.Platform.OS === 'ios' ? 10 : 0,
    borderColor: 'gray'
  }), [backgroundColor]);
  const cancelTextStyle = (0, _react.useMemo)(() => ({
    color: _reactNative.Platform.OS === 'ios' ? '#2b70de' : 'red',
    fontWeight: '600',
    fontSize: 20
  }), []);
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.Modal, {
    visible: presented,
    transparent: true,
    animationType: "none",
    onRequestClose: () => onCancel?.(),
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.View, {
      style: styles.modal,
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.Animated.View, {
        pointerEvents: visible ? 'auto' : 'none',
        style: [styles.backdrop, {
          opacity: backdropOpacity
        }],
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.Pressable, {
          style: _reactNative.StyleSheet.absoluteFill,
          onPress: () => onCancel?.()
        }, void 0, false)
      }, void 0, false), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.Animated.View, {
        style: [containerStyle, {
          transform: [{
            translateY
          }]
        }],
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.View, {
          style: contentContainerStyle,
          children: [headerTitle && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.View, {
            style: titleContainerStyle,
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.Text, {
              style: titleTextStyle,
              children: headerTitle
            }, void 0, false)
          }, void 0, false), options.map((option, index) => {
            const isLastOption = index === options.length - 1;
            const optionStyle = [styles.option, {
              borderBottomWidth: _reactNative.Platform.OS === 'ios' ? isLastOption ? 0 : 1 : 1,
              borderBottomColor: _reactNative.Platform.OS === 'ios' ? isLastOption ? undefined : lineColor : lineColor
            }];
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.Pressable, {
              style: optionStyle,
              onPress: () => handleSelectOption(index),
              children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.Text, {
                style: styles.optionText,
                children: option
              }, void 0, false)
            }, `option-${index}-${option}`, false);
          })]
        }, void 0, true), _reactNative.Platform.OS === 'ios' && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.View, {
          style: styles.spacer
        }, void 0, false), showCancelText && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.View, {
          style: cancelContainerStyle,
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.Pressable, {
            style: styles.cancelButton,
            onPress: () => onCancel?.(),
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactNative.Text, {
              style: cancelTextStyle,
              children: cancelText
            }, void 0, false)
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
};
const styles = _reactNative.StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  backdrop: {
    ..._reactNative.StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  container: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    elevation: 5
  },
  title: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  option: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionText: {
    color: '#2b70de',
    fontWeight: '500',
    fontSize: 20
  },
  cancelButton: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spacer: {
    height: 15
  }
});
var _default = exports.default = BottomSheet;