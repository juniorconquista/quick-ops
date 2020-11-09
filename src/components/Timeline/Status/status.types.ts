import { ReactNode } from 'react';

export type StatusStyledProps = {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base' | 'PENDING' | 'APPROVED' | 'REFUSED';
    children?: ReactNode;
};
