import React, { memo, useState } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { variant, VariantArgs, space } from 'styled-system';

import { ToggleProps } from './toogle.types';

/* TODO This component was created in the local repository as it has not yet been 
implemented in lib Quarks UI, however in the future it can be changed to be used directly from lib. */

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            '.toggle': {
                touchAction: 'pan-x',
                display: 'inline-block',
                position: 'relative',
                cursor: 'pointer',
                bg: 'transparent',
                border: 0,
                padding: 0,
                userSelect: 'none',
                '&:hover': {
                    '.toggle-thumb': {
                        borderColor: 'primary.default',
                    },
                },
                '&:focus': {
                    '.toggle-thumb': {
                        boxShadow: (props: {
                            colors: { primary: { default: string } };
                        }) => `0 0 2px 3px ${props.colors.primary.default}90`,
                    },
                },
                '.toggle-track': {
                    background: '#3d3f47',
                    fontSize: '15px',
                    width: '50px',
                    height: '24px',
                    padding: 0,
                    borderRadius: '30px',
                    transition: 'all .2s ease',
                    '.toggle-track-check': {
                        position: 'absolute',
                        width: '14px',
                        height: '10px',
                        top: 0,
                        bottom: 0,
                        mt: 'auto',
                        mb: 'auto',
                        lineHeight: 0,
                        left: '8px',
                        opacity: 0,
                        transition: 'opacity .25s ease',
                    },
                    '.toggle-track-x': {
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        top: 0,
                        bottom: 0,
                        mt: 'auto',
                        mb: 'auto',
                        lineHeight: 0,
                        right: '10px',
                    },
                    '.toggle-track-check, .toggle-track-x': {
                        span: {
                            alignItems: 'center',
                            display: 'flex',
                            height: '10px',
                            justifyContent: 'center',
                            position: 'relative',
                            width: '10px',
                        },
                    },
                },
                '.toggle-thumb': {
                    position: 'absolute',
                    top: '1px',
                    left: '1px',
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    border: '2px solid #4d4d4d',
                    bg: '#fafafa',
                    boxSizing: 'border-box',
                    transition: 'all .25s ease',
                },
                input: {
                    border: '0',
                    clip: 'rect(0 0 0 0)',
                    height: '1px',
                    margin: '-1px',
                    overflow: 'hidden',
                    padding: '0',
                    position: 'absolute',
                    width: '1px',
                },
            },
            '.checked': {
                '.toggle-track': {
                    '.toggle-track-check': {
                        opacity: '1',
                        transition: 'opacity .25s ease',
                    },
                    '.toggle-track-x': {
                        opacity: 0,
                    },
                },
                '.toggle-thumb': {
                    left: '27px',
                },
            },
        },
    },
} as VariantArgs);

const Style: React.FC<ToggleProps> = styled.div<ToggleProps>`
    ${variants}
    ${space}
`;

const Toggle: React.FC<ToggleProps> = ({
    checked,
    onClick,
    iconCheck,
    iconX,
    styling,
    ...props
}) => {
    const [isChecked, setChecked] = useState(checked ?? true);
    const handleChecked = () => setChecked((prevState) => !prevState);

    return (
        <Style styling={styling ?? 'base'} {...props}>
            <button
                className={classnames({
                    toggle: true,
                    checked: isChecked,
                })}
                onClick={() => {
                    handleChecked();
                    onClick && onClick();
                }}
            >
                <div className="toggle-track">
                    <div className="toggle-track-check">
                        <span className="toggle_BsTx">{iconCheck}</span>
                    </div>
                    <div className="toggle-track-x">
                        <span className="toggle_BsTx">{iconX}</span>
                    </div>
                </div>
                <div className="toggle-thumb" />
            </button>
        </Style>
    );
};

export default memo(Toggle);
