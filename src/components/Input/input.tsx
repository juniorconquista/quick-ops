import React, { memo } from 'react';
import { P } from 'quarks-ui';
import styled from 'styled-components';
import { variant, VariantArgs, color, space } from 'styled-system';

import { InputProps, InputStyledProps } from './input.types';

/* TODO This component was created in the local repository as it has not yet been 
implemented in lib Quarks UI, however in the future it can be changed to be used directly from lib. */

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            width: '100%',
            label: {
                m: '12px 0px',
                color: 'text.contrast',
                fontWeight: 'bold',
                display: 'block',
            },
            input: {
                height: '36px',
                borderRadius: '6px',
                color: '#6b7480 !important',
                border: '1px solid',
                borderColor: '#dfe2e6',
                p: '12px 6px',
                display: 'flex',
                alignItems: 'center',
                bg: 'white.default',
                cursor: 'pointer',
                width: '100%',
                transition: 'boxShadow .25s ease',
                fontFamily: 'Nunito Sans, sans-serif',
                '&:hover, &:focus': {
                    boxShadow: '0 0 2px 3px #6b748090',
                    outline: 'none',
                },
            },
        },
        get success() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                label: {
                    ...base.label,
                    color: 'success.default',
                },
                input: {
                    ...base.input,
                    borderColor: 'success.default',
                    color: 'success.default',
                    '&:hover, &:focus': {
                        boxShadow: (props: {
                            colors: { success: { default: string } };
                        }) => `0 0 2px 3px ${props.colors.success.default}90`,
                        outline: 'none',
                    },
                },
            };
        },
        get danger() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                label: {
                    ...base.label,
                    color: 'danger.default',
                },
                input: {
                    ...base.input,
                    borderColor: 'danger.default',
                    color: 'danger.default',
                    '&:hover, &:focus': {
                        boxShadow: (props: {
                            colors: { danger: { default: string } };
                        }) => `0 0 2px 3px ${props.colors.danger.default}90`,
                        outline: 'none',
                    },
                },
            };
        },
    },
} as VariantArgs);

const Style: React.FC<InputStyledProps> = styled.div<InputStyledProps>`
    ${variants}
    ${color}
    ${space}
`;

const Input: React.FC<InputProps<string>> = ({
    styling = 'base',
    type = 'text',
    icon,
    placeholder,
    label,
    name,
    value,
    onChange,
    error,
    ...props
}) => (
    <Style styling={styling} {...props}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
            placeholder={placeholder}
            name={name}
            id={name}
            value={value}
            type={type}
            onChange={onChange}
        />
        {error && (
            <P styling="base" mt="12px" color="danger.default">
                {error}
            </P>
        )}
    </Style>
);

export default memo(Input);
