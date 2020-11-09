import React, { memo } from 'react';
import { space, variant, VariantArgs } from 'styled-system';
import styled from 'styled-components';

import { SvgStyledProps } from './svg.types';

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            svg: {
                fill: '#6b7480',
            },
        },
    },
} as VariantArgs);

const Svg: React.FC<SvgStyledProps> = styled.div<SvgStyledProps>`
    ${variants}
    ${space}
`;

export default memo(Svg);
