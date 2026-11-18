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
declare const BottomSheet: ({ visible, options, onCancel, onSelect, cancelText, headerTitle, backgroundColor, showCancelText, lineColor, titleColor, }: BottomSheetProps) => import("react").JSX.Element;
export default BottomSheet;
