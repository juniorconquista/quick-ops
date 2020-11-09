import React, { memo } from 'react';
import { variant, VariantArgs } from 'styled-system';
import styled from 'styled-components';

import { IconStyledProps } from './icon.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            height: '59px',
            width: '59px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bg: '#f0f3f7',
            mb: '10px',
            svg: {
                height: '25px',
                width: '25px',
                fill: '#6b7480',
            },
        },
        get 'hotel-fee'() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                bg: '#e7f2fd',
                svg: {
                    ...base.svg,
                    fill: '#0f68bd',
                },
            };
        },
        get food() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                bg: '#fde7e7',
                svg: {
                    ...base.svg,
                    fill: '#bd0f0f',
                },
            };
        },
        get EVALUATION() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                bg: '#f3e7fd',
                svg: {
                    ...base.svg,
                    fill: '#660fbd',
                },
            };
        },
        get ACCOUNTABILITY_SUBMITTED() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                bg: '#ecf8f8',
                svg: {
                    ...base.svg,
                    height: '20px',
                    width: '20px',
                    fill: '#03a046',
                },
            };
        },
        get ACCOUNTABILITY_CREATED() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                bg: '#fdf8e7',
                svg: {
                    ...base.svg,
                    height: '20px',
                    width: '20px',
                    fill: '#bd6b0f',
                },
            };
        },
    },
} as VariantArgs);

const Icon: React.FC<IconStyledProps> = styled.div<IconStyledProps>`
    ${variants}
`;

export default memo(Icon);
