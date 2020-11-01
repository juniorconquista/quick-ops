import React, { memo } from 'react';
import styled from 'styled-components';
import { variant, VariantArgs, color, space } from 'styled-system';

import { ButtonProps, ButtonStyledProps } from './button.types';

/* TODO This component was created in the local repository as it has not yet been 
implemented in lib Quarks UI, however in the future it can be changed to be used directly from lib. */

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            height: '36px',
            borderRadius: '6px',
            color: '#6b7480 !important',
            border: '1px solid',
            borderColor: '#6b7480',
            p: '0px 20px',
            display: 'flex',
            alignItems: 'center',
            bg: 'white.default',
            cursor: 'pointer',
            transition: 'all .25s ease',
            fontFamily: 'Nunito Sans, sans-serif',
            svg: {
                height: '12px',
                width: 'auto',
                mr: '5px',
                fill: '#6b7480',
            },
            '&:hover, &:focus': {
                boxShadow: '0 0 2px 3px #6b748090',
            },
        },
        get success() {
            return {
                ...this.base,
                bg: 'success.default',
                borderColor: 'success.default',
                color: '#FFFFFF',
                '&:hover, &:focus': {
                    boxShadow: (props: {
                        colors: { success: { default: string } };
                    }) => `0 0 2px 3px ${props.colors.success.default}90`,
                },
                svg: {
                    // @ts-ignore
                    ...this.base.svg,
                    fill: '#FFFFFF',
                },
            };
        },
        get danger() {
            return {
                ...this.base,
                bg: 'danger.default',
                borderColor: 'danger.default',
                color: '#FFFFFF',
                '&:hover, &:focus': {
                    boxShadow: (props: {
                        colors: { danger: { default: string } };
                    }) => `0 0 2px 3px ${props.colors.danger.default}90`,
                },
                svg: {
                    // @ts-ignore
                    ...this.base.svg,
                    fill: '#FFFFFF',
                },
            };
        },
    },
} as VariantArgs);

const Style: React.FC<ButtonStyledProps> = styled.button<ButtonStyledProps>`
    ${variants}
    ${color}
    ${space}
    ${(props) =>
        props.outline &&
        `
        background-color: transparent;
    `}
`;

const Button: React.FC<ButtonProps> = ({
    styling = 'base',
    text,
    icon,
    ...props
}) => (
    <Style
        styling={styling}
        color={props.outline ? `${styling}.default` : '#FFFFFF'}
        {...props}
    >
        {icon}
        {text}
    </Style>
);

export default memo(Button);
