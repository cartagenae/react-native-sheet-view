# react-native-sheet-view
A bottom sheet component for react native

-----

### Usage

```
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

import BottomSheet from 'react-native-sheet-view';

const App = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const showBottomSheet = () => {
    setBottomSheetVisible(true);
  }

  const hideBottomSheet = () => {
    setBottomSheetVisible(false);
  }

  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
  ];

  return (
    <View
      style={styles.container}
    >
      <Text>Example usage of your react-native-sheet-view</Text>
      <Button
        title='Show Bottom Sheet'
        onPress={showBottomSheet}
      />
      <BottomSheet
        visible={isBottomSheetVisible}
        headerTitle='Bottom Sheet'
        options={options}
        showCancelText={true}
        cancelText='Cancel'
        onCancel={hideBottomSheet}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App;
```
