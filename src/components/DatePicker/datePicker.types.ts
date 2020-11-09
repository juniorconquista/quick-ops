import { ReactDatePickerProps } from 'react-datepicker';

export type DatePickerStyledProps = {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base' | 'success' | 'danger';
};

export interface DatePickerProps extends ReactDatePickerProps {
    styling?: 'base' | 'success' | 'danger';
    label?: string;
    error?: string | boolean;
}
