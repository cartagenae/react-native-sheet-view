# React Native Sheet View

###### A simple, customizable bottom sheet component for React Native, with JavaScript and TypeScript support.

| iOS | Android |
| :---: | :---: |
| ![iOS demonstration](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/1b8c9f66-d629-4294-96af-0bf0e2af0984) | ![Android demonstration](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/9eb8b864-6206-43f8-988b-b49a76cdfc38) |

> **Version note:** The TypeScript examples and API below describe the new `src/BottomSheet.tsx` implementation. They apply to a release containing that implementation and its generated `dist` files, not necessarily the currently published npm version. The screenshots were taken from the earlier version; verify their appearance against the updated component before release.

---

## Features

- Bottom sheet options displayed in a native React Native `Modal`
- Animated entrance, exit, and dimmed backdrop
- Tap outside the sheet to dismiss it
- Optional header and cancel button
- Customizable background, title, and divider colors
- JavaScript (JSX) and TypeScript (TSX) support, including bundled type declarations
- iOS and Android support

## Installation

```bash
npm install react-native-sheet-view
```

Or:

```bash
yarn add react-native-sheet-view
```

No separate `@types/react-native-sheet-view` package is required for the new TypeScript-enabled release.

## Import

Default import:

```tsx
import BottomSheet from 'react-native-sheet-view';
```

Named import:

```tsx
import { BottomSheet } from 'react-native-sheet-view';
```

TypeScript prop type:

```tsx
import BottomSheet, { type BottomSheetProps } from 'react-native-sheet-view';
```

---

## JavaScript usage (JSX)

```jsx
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import BottomSheet from 'react-native-sheet-view';

export default function App() {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const hideBottomSheet = () => setBottomSheetVisible(false);

  return (
    <View style={styles.container}>
      <Text>React Native Sheet View</Text>
      <Button
        title="Show Bottom Sheet"
        onPress={() => setBottomSheetVisible(true)}
      />

      <BottomSheet
        visible={isBottomSheetVisible}
        options={options}
        onSelect={(index) => {
          Alert.alert(options[index], `You selected ${options[index]}`);
        }}
        onCancel={hideBottomSheet}
        showCancelText={true}
        cancelText="Cancel"
        headerTitle="Bottom Sheet"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

**Selection behavior:** The component calls `onSelect(index)` and then `onCancel()` when an option is pressed. Use `onCancel` to update your `visible` state to `false`. The cancel button and backdrop also call `onCancel()`.

## TypeScript usage (TSX)

```tsx
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import BottomSheet, { type BottomSheetProps } from 'react-native-sheet-view';

export default function App() {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);
  const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  const hideBottomSheet = (): void => setBottomSheetVisible(false);

  const sheetProps: BottomSheetProps = {
    visible: isBottomSheetVisible,
    options,
    onSelect: (index: number): void => {
      Alert.alert(options[index], `You selected ${options[index]}`);
    },
    onCancel: hideBottomSheet,
    headerTitle: 'Bottom Sheet',
    showCancelText: true,
    cancelText: 'Cancel',
  };

  return (
    <View style={styles.container}>
      <Text>React Native Sheet View</Text>
      <Button
        title="Show Bottom Sheet"
        onPress={() => setBottomSheetVisible(true)}
      />
      <BottomSheet {...sheetProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

## Props

The following types and defaults reflect the new `BottomSheetProps` definition.

| Prop | Type | Required | Default | Description |
| :--- | :--- | :---: | :--- | :--- |
| **`visible`** | `boolean` | **Yes** | — | Controls whether the bottom sheet is shown. |
| **`options`** | `string[]` | No | `[]` | Labels for selectable options. |
| **`onSelect`** | `(index: number) => void` | No | — | Called with the zero-based index of the selected option. |
| **`onCancel`** | `() => void` | No | — | Called on backdrop press, cancel press, native close request, and after an option is selected. |
| **`headerTitle`** | `string` | No | — | Optional title displayed above the options. |
| **`titleColor`** | `string` | No | `'#000'` | Header title text color. Requires `headerTitle`. |
| **`showCancelText`** | `boolean` | No | `false` | Shows a cancel button. |
| **`cancelText`** | `string` | No | `'Cancel'` | Cancel button label when `showCancelText` is enabled. |
| **`lineColor`** | `string` | No | `'lightgray'` | Color of option separators and the header divider. |
| **`backgroundColor`** | `string` | No | `'#fff'` | Sheet and cancel-area background color. |

Although `onCancel` is optional in the type definition, providing it is strongly recommended so users can dismiss the sheet and update the `visible` state.

---

## Customization

### `headerTitle`

Displays a title above the list of options.

| iOS | Android |
| :---: | :---: |
| ![iOS header title](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/8fa4440b-a33e-4b71-9a0c-25cebc9522bd) | ![Android header title](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/6e851555-4408-4402-a744-eee8d6857b2f) |

```jsx
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onCancel={hideBottomSheet}
  headerTitle="Header Title"
/>
```

### `titleColor`

Changes the header text color. This property only has a visible effect when `headerTitle` is set.

| iOS | Android |
| :---: | :---: |
| ![iOS title color](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/22e95466-9940-4671-a670-a5b9d871cbeb) | ![Android title color](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/77bc06a0-6835-4618-9d27-e7afa6107bd7) |

```jsx
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onCancel={hideBottomSheet}
  headerTitle="Header Title"
  titleColor="purple"
/>
```

### `showCancelText`

Shows a cancel button. It appears in a separate section below the options on iOS; the new implementation does not use the same detached layout on Android.

**Default:** `false`

| iOS | Android |
| :---: | :---: |
| ![iOS cancel button](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/1da004b3-ff3d-4e86-88fb-0b73c1718741) | ![Android cancel button](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/1326ae26-8f53-44f6-9615-0597eba14223) |

```jsx
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onCancel={hideBottomSheet}
  showCancelText={true}
/>
```

### `cancelText`

Changes the cancel button label. Requires `showCancelText={true}`.

**Default:** `'Cancel'`

| iOS | Android |
| :---: | :---: |
| ![iOS cancel text](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/edabdbe5-ae11-4fe6-9f2f-9ec37f237412) | ![Android cancel text](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/6f354f6c-dc5b-4d1f-a159-4840bccaa975) |

```jsx
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onCancel={hideBottomSheet}
  showCancelText={true}
  cancelText="Cancelar"
/>
```

### `lineColor`

Changes the divider color between options and below the header, if present.

**Default:** `'lightgray'`

| iOS | Android |
| :---: | :---: |
| ![iOS divider color](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/88d9ecf8-badc-49e3-ad9e-2daede87ef77) | ![Android divider color](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/08c61477-7754-4cbe-93a6-88ab6b0282b1) |

```jsx
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onCancel={hideBottomSheet}
  lineColor="red"
/>
```

### `backgroundColor`

Changes the background of the options section and cancel area.

**Default:** `'#fff'`

| iOS | Android |
| :---: | :---: |
| ![iOS background color](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/d27f34e9-d6b9-4556-acd3-ba776562c63e) | ![Android background color](https://github.com/cartagenae/react-native-sheet-view/assets/6395465/19bb348f-fba0-434e-9a6c-3086bddc2c53) |

```jsx
<BottomSheet
  visible={isBottomSheetVisible}
  options={options}
  onCancel={hideBottomSheet}
  backgroundColor="purple"
/>
```

---

## Behavior and platform notes

- The sheet animates vertically and fades the backdrop in and out.
- Tapping outside the sheet invokes `onCancel`.
- Pressing an option invokes `onSelect(index)` followed by `onCancel`.
- The native Android back action invokes `onCancel` through `Modal.onRequestClose`.
- The cancel button is displayed only when `showCancelText` is `true`.
- iOS uses a narrower sheet with rounded corners and spacing above the bottom edge; Android uses a full-width layout.
- The new component uses React Native's built-in `Modal` and `Animated` APIs. Verify appearance and behavior on both platforms if upgrading from an older implementation.

## Development and publishing

For contributors working with the TypeScript source:

```bash
npm install
npm run build
npx tsc --project tsconfig.test.json
npm pack --dry-run
```

The build outputs JavaScript and TypeScript declarations into `dist/`. Verify that `dist/index.js` and `dist/index.d.ts` are included in the npm package before publishing.

## License

React Native Sheet View is available under the **MIT License**. See the [LICENSE](https://github.com/cartagenae/react-native-sheet-view/blob/main/LICENSE) file for details.
