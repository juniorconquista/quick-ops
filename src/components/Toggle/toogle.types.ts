import { SpaceProps } from 'styled-system';

export type ToggleStyledProps = SpaceProps;

export interface ToggleProps extends ToggleStyledProps {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base';
    checked?: boolean;
    iconCheck?: string;
    iconX?: string;
    onClick?: () => void;
}
