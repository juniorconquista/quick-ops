import { ChangeEvent, ReactNode } from 'react';
import { ColorProps, SpaceProps } from 'styled-system';

export type InputStyledProps = ColorProps &
    SpaceProps & {
        /** Each styling variant has unique properties that are inherited through the type informed */
        styling?: 'base' | 'success' | 'danger';
    };

export interface InputProps<Value> extends InputStyledProps {
    name: string;
    icon?: ReactNode;
    placeholder?: string;
    label?: string;
    value?: Value;
    error?: string | boolean;
    type?: string;
    onChange?: (e: ChangeEvent<any>) => void;
    onBlur?: (e: ChangeEvent<any>) => void;
}
