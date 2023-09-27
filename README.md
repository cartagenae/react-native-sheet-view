# React Native Sheet View
A bottom sheet component for react native

iOS                 | Android
:------------------:|:------------------:
![MainDemonstration](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/15147c1f-cfd4-49da-9915-c2642ce9c819) | ![MainDemonstration](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/035955c9-951a-49d8-a982-de18c7296e81)


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
![HeaderTitle](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/ef5fb926-f360-4d90-a072-2eb854e38876) | ![HeaderTitle](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/54cb92ca-241c-416e-82c4-4457268fe358)

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
![TitleColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/a7cafb3a-fba3-4231-95fd-59228815b03a) | ![TitleColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/e9b505b9-54a2-4323-9fb0-036cf75376c1)

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
![ShowCancelText](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/34824134-1ef1-4ce6-bac8-991c8983a036) | ![ShowCancelText](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/5c1a2323-9739-4894-a2c6-cffaa4e6357e)

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
![CancelText](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/73ad42f5-5b7f-41d1-908a-714bc2592564) | ![CancelText](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/e91ce92c-6104-4595-b552-7626c831f504)

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
![LineColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/673a4ead-42b2-44b0-a229-97482e87928a) | ![LineColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/1c892949-808b-43ee-b7cf-21da65359d06)

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
![BackgroundColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/bf2cdbd4-084f-482f-a1ea-a36f24ad7e3a) | ![BackgroundColor](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/eff12fc0-92ee-40be-a994-ea30af2a6fb0)

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
React Native Floating Action Button is under the **MIT License**. See bundled **License** file for details.
