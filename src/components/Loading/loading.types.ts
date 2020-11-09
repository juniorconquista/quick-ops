import { LayoutProps } from 'styled-system';

export type LoadingStyledProps = LayoutProps & {
    styling?: 'base';
};

export interface LoadingProps {
    isOpen: boolean;
}
