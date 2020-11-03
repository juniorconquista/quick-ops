import { Props as ReactSelectProps } from 'react-select';

export type SelectStyledProps = ReactSelectProps & {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base' | 'success' | 'danger';
};

export interface SelectProps extends SelectStyledProps {
    label?: string;
    error?: string | boolean;
}
