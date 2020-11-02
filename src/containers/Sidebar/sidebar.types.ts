import { LayoutProps } from 'styled-system';

export type SidebarStyledProps = LayoutProps & {
    styling?: 'base';
};

export interface SidebarProps {
    isOpen: boolean;
}
