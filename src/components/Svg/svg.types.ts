import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

export type SvgStyledProps = SpaceProps & {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base';
    children?: ReactNode;
};
