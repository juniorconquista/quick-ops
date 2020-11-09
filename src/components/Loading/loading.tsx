import React, { memo } from 'react';
import { layout, space, variant, VariantArgs } from 'styled-system';
import styled, { keyframes } from 'styled-components';

import { LoadingStyledProps } from './loading.types';

const loading = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            '.loading-screen': {
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                zIndex: 99999,
                bg: (props: { colors: { white: { default: string } } }) =>
                    `${props.colors.white.default}80`,
                '.loading': {
                    display: 'inline-block',
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                    '& div': {
                        position: 'absolute',
                        border: '4px solid',
                        borderColor: 'text.default',
                        opacity: '1',
                        borderRadius: '50%',
                    },
                    '& div:nth-child(2)': {
                        animationDelay: '-0.5s',
                    },
                },
            },
        },
    },
} as VariantArgs);

const Style: React.FC<LoadingStyledProps> = styled.div<LoadingStyledProps>`
    ${variants}
    ${space}
    ${layout}
    .loading div {
        animation: ${loading} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
`;

const Loading: React.FC = () => (
    <Style styling="base">
        <div className="loading-screen">
            <div className="loading">
                <div></div>
                <div></div>
            </div>
        </div>
    </Style>
);

export default memo(Loading);
