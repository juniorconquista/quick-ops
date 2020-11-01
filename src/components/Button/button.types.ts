import { ReactNode } from 'react';
import { ColorProps, SpaceProps } from 'styled-system';

export type ButtonStyledProps = ColorProps &
    SpaceProps & {
        /** Each styling variant has unique properties that are inherited through the type informed */
        styling?: 'base' | 'success' | 'danger';
        outline?: boolean;
    };

export interface ButtonProps extends ButtonStyledProps {
    text: string;
    icon?: ReactNode;
}
