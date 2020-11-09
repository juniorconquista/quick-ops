import { LayoutProps } from 'styled-system';

export type SidebarStyledProps = LayoutProps & {
    styling?: 'base';
};

export interface SidebarProps {
    isOpen: boolean;
}

export type account = {
    currency: {
        symbol: string;
    };
    balance: number;
    returned: number;
    received: number;
    declared: number;
    approved: number;
    updatedOn: number;
};

export interface SidebarResponse {
    content: account[];
}
