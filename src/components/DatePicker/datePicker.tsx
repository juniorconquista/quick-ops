import React, { memo } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Box, Label, P } from 'quarks-ui';
import styled from 'styled-components';
import { color, variant, VariantArgs } from 'styled-system';

import { DatePickerProps, DatePickerStyledProps } from './datePicker.types';

/* TODO This component was created in the local repository as it has not yet been 
implemented in lib Quarks UI, however in the future it can be changed to be used directly from lib. */

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            width: '100%',
            '.react-datepicker-wrapper': {
                width: '100%',
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
            '.react-datepicker__current-month, .react-datepicker__day-name, .react-datepicker__day': {
                fontFamily: 'Nunito Sans, sans-serif',
                color: 'text.default',
            },
            '.react-datepicker__triangle': {
                display: 'none',
            },
            '.react-datepicker__header': {
                bg: 'white.default',
            },
            '.react-datepicker__month': {
                bg: 'white.contrast',
                margin: '0px',
                p: '0.4rem',
                overflow: 'hidden',
            },
            '.react-datepicker__day': {
                '&:hover': {
                    bg: 'white.default',
                    color: 'text.default',
                },
            },
            '.react-datepicker__day--selected': {
                bg: 'primary.default',
                color: '#FFFF',
                '&:hover': {
                    bg: 'primary.default',
                    color: '#FFFF',
                },
            },
        },
        get success() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                '.react-datepicker-wrapper': {
                    width: '100%',
                    input: {
                        ...base['.react-datepicker-wrapper'].input,
                        borderColor: 'success.default',
                        color: 'success.default',
                        '&:hover, &:focus': {
                            boxShadow: (props: {
                                colors: { success: { default: string } };
                            }) =>
                                `0 0 2px 3px ${props.colors.success.default}90`,
                            outline: 'none',
                        },
                    },
                },
            };
        },
        get danger() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                '.react-datepicker-wrapper': {
                    width: '100%',
                    input: {
                        ...base['.react-datepicker-wrapper'].input,
                        borderColor: 'danger.default',
                        color: 'danger.default',
                        '&:hover, &:focus': {
                            boxShadow: (props: {
                                colors: { danger: { default: string } };
                            }) =>
                                `0 0 2px 3px ${props.colors.danger.default}90`,
                            outline: 'none',
                        },
                    },
                },
            };
        },
    },
} as VariantArgs);

const Style: React.FC<DatePickerStyledProps> = styled.div<
    DatePickerStyledProps
>`
    ${variants}
`;

const DatePicker: React.FC<DatePickerProps> = ({
    styling = 'base',
    label,
    error,
    name,
    ...props
}) => (
    <Box styling="column" width="100%" alignItems="flex-start">
        {label && (
            <Label
                m="12px 0px"
                fontWeight="bold"
                color={error ? 'danger.default' : 'text.contrast'}
            >
                {label}
            </Label>
        )}
        <Style styling={styling}>
            <ReactDatePicker id={name} {...props} />
        </Style>
        {error && (
            <P styling="base" mt="12px" color="danger.default">
                {error}
            </P>
        )}
    </Box>
);

export default memo(DatePicker);
