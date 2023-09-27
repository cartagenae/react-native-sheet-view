# React Native Sheet View
###### A simple bottom sheet component for any React Native project

iOS                 | Android
:------------------:|:------------------:
![MainDemonstration](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/1b8c9f66-d629-4294-96af-0bf0e2af0984) | ![MainDemonstration](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/9eb8b864-6206-43f8-988b-b49a76cdfc38)

---

### Installation
```
npm install --save react-native-sheet-view
```
or
```
yarn add react-native-sheet-view
```

---

### Import the BottomSheet component

```
import BottomSheet from 'react-native-sheet-view';
```

---

### Usage

```
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
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
      <Text>Example usage of your react-native-sheet-view component</Text>

      <Button
        title='Show Bottom Sheet'
        onPress={showBottomSheet}
      />

      <BottomSheet
        visible={isBottomSheetVisible}
        options={options}
        onSelect={(index) => {
          Alert.alert(
            `${options[index]`,
            `You selected ${options[index]}`,
            [
              {
                text: 'OK',
              },
            ],
          )
        }}
        onCancel={hideBottomSheet}
        showCancelText={true}
        cancelText='Cancel'
        headerTitle='Bottom Sheet'
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
---
### Props

| Prop                | Type            | Required  | Description                                                    |
| :---                | :---            | :---      | :---                                                           |
| **visible**         | *useState Hook* | ***Yes*** | Display or hide the bottom sheet                               |
| **options**         | *string array*  | ***Yes*** | Displays the options available for your bottom sheet           |
| **onSelect**        | *function*      | ***Yes*** | Dispatches the action selected for the option once selected    |
| **onCancel**        | *function*      | ***Yes*** | Dispatches the action canceled for the option already selected |
| **headerTitle**     | *string*        | No        | Shows your input as the header title of your bottom sheet      |
| **titleColor**      | *string*        | No        | Change the color of your title text if you have a headerTitle  |
| **showCancelText**  | *boolean*       | No        | Shows the Cancel button detached below the bottom sheet        |
| **cancelText**      | *string*        | No        | Shows your input as the cancel text in the cancel button       |
| **lineColor**       | *string*        | No        | Change the color of the lines between each option              |
| **backgroundColor** | *string*        | No        | Change the color of the background of your bottom sheet        |

---

### headerTitle

> Shows your input as the header title of your bottom sheet

iOS                 | Android
:------------------:|:------------------:
![HeaderTitle](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/8fa4440b-a33e-4b71-9a0c-25cebc9522bd) | ![HeaderTitle](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/6e851555-4408-4402-a744-eee8d6857b2f)

```
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onSelect={(index) => {
    Alert.alert(
      `${options[index]`,
      `You selected ${options[index]}`,
      [
        {
          text: 'OK',
        },
      ],
    )
  }}
  onCancel={hideBottomSheet}
  headerTitle='Header Title'
/>
```

---

### titleColor
> Change the color of your title text if you have a headerTitle

***You won't see any changes if you don't have a headerTitle***

iOS                 | Android
:------------------:|:------------------:
![TitleColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/22e95466-9940-4671-a670-a5b9d871cbeb) | ![TitleColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/77bc06a0-6835-4618-9d27-e7afa6107bd7)

```
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onSelect={(index) => {
    Alert.alert(
      `${options[index]`,
      `You selected ${options[index]}`,
      [
        {
          text: 'OK',
        },
      ],
    )
  }}
  onCancel={hideBottomSheet}
  headerTitle='Header Title'
  titleColor='purple'
/>
```

---

### showCancelText
> Shows the Cancel button detached below the bottom sheet

***Default: false***

iOS                 | Android
:------------------:|:------------------:
![ShowCancelText](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/1da004b3-ff3d-4e86-88fb-0b73c1718741) | ![ShowCancelText](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/1326ae26-8f53-44f6-9615-0597eba14223)

```
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onSelect={(index) => {
    Alert.alert(
      `${options[index]`,
      `You selected ${options[index]}`,
      [
        {
          text: 'OK',
        },
      ],
    )
  }}
  onCancel={hideBottomSheet}
  showCancelText={true}
/>
```

---

### cancelText
> Shows your input as the cancel text in the cancel button

***You won't see any changes if you don't have showCancelText set to true***

iOS                 | Android
:------------------:|:------------------:
![CancelText](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/edabdbe5-ae11-4fe6-9f2f-9ec37f237412) | ![CancelText](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/6f354f6c-dc5b-4d1f-a159-4840bccaa975)

```
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onSelect={(index) => {
    Alert.alert(
      `${options[index]`,
      `You selected ${options[index]}`,
      [
        {
          text: 'OK',
        },
      ],
    )
  }}
  onCancel={hideBottomSheet}
  showCancelText={true}
  cancelText='Cancelar' // <- Spanish word for 'Cancel'
/>
```

---

### lineColor
> Change the color of the lines between each option

iOS                 | Android
:------------------:|:------------------:
![LineColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/88d9ecf8-badc-49e3-ad9e-2daede87ef77) | ![LineColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/08c61477-7754-4cbe-93a6-88ab6b0282b1)

```
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onSelect={(index) => {
    Alert.alert(
      `${options[index]`,
      `You selected ${options[index]}`,
      [
        {
          text: 'OK',
        },
      ],
    )
  }}
  onCancel={hideBottomSheet}
  lineColor='red'
/>
```

---

### backgroundColor
> Change the color of the background of your bottom sheet

iOS                 | Android
:------------------:|:------------------:
![BackgroundColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/d27f34e9-d6b9-4556-acd3-ba776562c63e) | ![BackgroundColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/19bb348f-fba0-434e-9a6c-3086bddc2c53)

```
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onSelect={(index) => {
    Alert.alert(
      `${options[index]`,
      `You selected ${options[index]}`,
      [
        {
          text: 'OK',
        },
      ],
    )
  }}
  onCancel={hideBottomSheet}
  backgroundColor='purple'
/>
```

---

## License
React Native Sheet View is under the **MIT License**. See bundled <a href='https://github.com/cartagenae/react-native-sheet-view/blob/main/LICENSE' alt='license file'>**LICENSE**</a> file for details.
