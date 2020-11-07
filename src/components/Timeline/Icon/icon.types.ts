import { ReactNode } from 'react';

export type IconStyledProps = {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?:
        | 'base'
        | 'hotel-fee'
        | 'EVALUATION'
        | 'ACCOUNTABILITY_SUBMITTED'
        | 'ACCOUNTABILITY_CREATED';
    children?: ReactNode;
};
