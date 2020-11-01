export interface ToggleProps {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base';
    checked?: boolean;
    onClick?: () => void;
}
