import type { ComponentType } from 'react';

import BottomSheet, {
  BottomSheet as NamedBottomSheet,
  type BottomSheetProps,
} from '../dist/index';

const props: BottomSheetProps = {
  visible: true,
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelect: (index: number) => {
    console.log('Selected option:', index);
  },
  onCancel: () => {
    console.log('Bottom sheet dismissed');
  },
  headerTitle: 'Bottom Sheet',
  showCancelText: true,
  cancelText: 'Cancel',
};

const defaultComponent: ComponentType<BottomSheetProps> = BottomSheet;
const namedComponent: ComponentType<BottomSheetProps> = NamedBottomSheet;

export const testBottomSheet = (
  <>
    <BottomSheet {...props} />
    <NamedBottomSheet visible={false} />
  </>
);

void defaultComponent;
void namedComponent;
