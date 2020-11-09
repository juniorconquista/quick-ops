import React, { memo } from 'react';
import { variant, VariantArgs } from 'styled-system';
import styled from 'styled-components';

import { StatusStyledProps } from './status.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            height: '24px',
            borderRadius: '18px',
            border: '1px solid #6b7480',
            color: '#6b7480',
            fontSize: '12px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bg: '#f0f3f7',
            p: '0px 20px',
        },
        get PENDING() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
            };
        },
        get REFUSED() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                bg: '#fde7e7',
                borderColor: '#bd0f0f',
                color: '#bd0f0f',
            };
        },
        get APPROVED() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                bg: '#e6fff0',
                borderColor: '#03a046',
                color: '#03a046',
            };
        },
    },
} as VariantArgs);

const Status: React.FC<StatusStyledProps> = styled.div<StatusStyledProps>`
    ${variants}
`;

export default memo(Status);
