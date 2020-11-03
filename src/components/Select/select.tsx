import React, { memo } from 'react';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import { SelectComponents } from 'react-select/src/components';
import { Box, Label, P } from 'quarks-ui';
import styled from 'styled-components';
import { variant, VariantArgs } from 'styled-system';

import { SelectProps, SelectStyledProps } from './select.types';

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
            '.select__input': {
                color: '#6b7480',
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: 'normal',
                '& > div': {
                    fontFamily: 'Nunito Sans, sans-serif !important',
                    fontWeight: 'normal !important',
                },
            },
            '.select__control': {
                border: '1px solid',
                borderRadius: '6px',
                bg: 'white.default',
                borderColor: '#dfe2e6',
                fontFamily: 'Nunito Sans, sans-serif',
                height: '36px',
                '&:hover': {
                    boxShadow: '0 0 2px 3px #6b748090',
                    outline: 'none',
                    border: '1px solid',
                    borderColor: '#dfe2e6',
                },
            },
            '.select__placeholder': {
                color: '#6b7480',
                fontFamily: 'Nunito Sans, sans-serif',
            },
            '.select__single-value': {
                color: '#6b7480',
                fontFamily: 'Nunito Sans, sans-serif',
            },
            '.select__control--is-focused': {
                boxShadow: '0 0 2px 3px #6b748090',
                borderColor: '#dfe2e6',
            },
            '.select__menu': {
                bg: 'white.default',
                border: '1px solid',
                borderColor: '#dfe2e6',
                marginTop: '4px',
            },
            '.select__menu-list': {
                color: '#6b7480',
                fontFamily: 'Nunito Sans, sans-serif',
                paddingTop: '0rem',
                paddingBottom: '0rem',
            },
            '.select__option': {
                transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                lineHeight: 'normal',
                '&:hover': {
                    bg: 'white.contrast',
                },
            },
            '.select__option--is-focused': {
                bg: 'white.contrast',
            },
            '.select__option--is-selected': {
                bg: 'primary.default',
            },
        },
        get success() {
            return {
                ...this.base,
                '.select__input': {
                    // @ts-ignore
                    ...this.base['.select__input'],
                    color: 'success.default',
                },
                '.select__control': {
                    // @ts-ignore
                    ...this.base['.select__control'],
                    borderColor: 'success.default',
                    '&:hover': {
                        // @ts-ignore
                        ...this.base['.select__control']['&:hover'],
                        borderColor: 'success.default',
                        boxShadow: (props: {
                            colors: { success: { default: string } };
                        }) => `0 0 2px 3px ${props.colors.success.default}90`,
                    },
                },
                '.select__placeholder': {
                    // @ts-ignore
                    ...this.base['.select__placeholder'],
                    color: 'success.default',
                },
                '.select__single-value': {
                    // @ts-ignore
                    ...this.base['.select__single-value'],
                    color: 'success.default',
                },
                '.select__control--is-focused': {
                    // @ts-ignore
                    ...this.base['.select__control--is-focused'],
                    borderColor: 'success.default',
                    boxShadow: (props: {
                        colors: { success: { default: string } };
                    }) => `0 0 2px 3px ${props.colors.success.default}90`,
                },
                '.select__menu': {
                    // @ts-ignore
                    ...this.base['.select__menu'],
                    borderColor: 'success.default',
                },
                '.select__menu-list': {
                    // @ts-ignore
                    ...this.base['.select__menu-list'],
                    color: 'success.default',
                },
            };
        },
        get danger() {
            return {
                ...this.base,
                '.select__input': {
                    // @ts-ignore
                    ...this.base['.select__input'],
                    color: 'danger.default',
                },
                '.select__control': {
                    // @ts-ignore
                    ...this.base['.select__control'],
                    borderColor: 'danger.default',
                    '&:hover': {
                        // @ts-ignore
                        ...this.base['.select__control']['&:hover'],
                        borderColor: 'danger.default',
                        boxShadow: (props: {
                            colors: { danger: { default: string } };
                        }) => `0 0 2px 3px ${props.colors.danger.default}90`,
                    },
                },
                '.select__placeholder': {
                    // @ts-ignore
                    ...this.base['.select__placeholder'],
                    color: 'danger.default',
                },
                '.select__single-value': {
                    // @ts-ignore
                    ...this.base['.select__single-value'],
                    color: 'danger.default',
                },
                '.select__control--is-focused': {
                    // @ts-ignore
                    ...this.base['.select__control--is-focused'],
                    borderColor: 'danger.default',
                    boxShadow: (props: {
                        colors: { danger: { default: string } };
                    }) => `0 0 2px 3px ${props.colors.danger.default}90`,
                },
                '.select__menu': {
                    // @ts-ignore
                    ...this.base['.select__menu'],
                    borderColor: 'danger.default',
                },
                '.select__menu-list': {
                    // @ts-ignore
                    ...this.base['.select__menu-list'],
                    color: 'danger.default',
                },
            };
        },
    },
} as VariantArgs);

const Style: React.FC<SelectStyledProps> = styled(ReactSelect)<
    SelectStyledProps
>`
    ${variants}
`;

const animatedComponents = makeAnimated() as SelectComponents<{
    label: string;
    value: string;
}>;

const Select: React.FC<SelectProps> = ({
    styling = 'base',
    label,
    error,
    name,
    ...props
}) => (
    <Box styling="column" width="100%" alignItems="flex-start">
        {label && (
            <Label
                // htmlFor={name}
                m="12px 0px"
                fontWeight="bold"
            >
                {label}
            </Label>
        )}
        <Style
            styling={styling}
            classNamePrefix="select"
            components={animatedComponents}
            id={name}
            {...props}
        />
        {error && (
            <P styling="base" mt="12px" color="danger.default">
                {error}
            </P>
        )}
    </Box>
);

export default memo(Select);
