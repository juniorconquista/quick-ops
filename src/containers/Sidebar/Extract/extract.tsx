import React, { memo } from 'react';
import { Box, H1, P } from 'quarks-ui';

import { ExtractProps } from './extract.types';

const Extract: React.FC<ExtractProps> = (props) => {
    return (
        <Box styling="column" alignItems="flex-start" width="100%">
            <H1
                styling="base"
                color="text.contrast"
                fontWeight="bold"
                fontSize="12px"
                m="10px 15px"
            >
                Extrato
            </H1>
            <Box
                styling="row"
                height="1px"
                width="100%"
                border="solid 1px #dfe2e6"
                mb="15px"
                opacity=".6"
            />
            <Box styling="row" width="100%" justifyContent="space-between">
                <Box styling="column" m="0px 15px" alignItems="flex-start">
                    <H1
                        styling="base"
                        color="text.contrast"
                        fontWeight="normal"
                        fontSize="12px"
                    >
                        Descrição
                    </H1>
                    <H1
                        styling="base"
                        color="text.contrast"
                        fontWeight="bold"
                        fontSize="14px"
                        pt="10px"
                    >
                        Despesas declaradas
                    </H1>
                    <P styling="base" fontSize="11px" color="#9ea4ac">
                        Despesas declaradas pelo trooper
                    </P>
                    <H1
                        styling="base"
                        color="text.contrast"
                        fontWeight="bold"
                        fontSize="14px"
                        pt="15px"
                    >
                        Despesas aprovadas
                    </H1>
                    <P styling="base" fontSize="11px" color="#9ea4ac">
                        Despesas aprovadas pelo financeiro
                    </P>
                    <H1
                        styling="base"
                        color="text.contrast"
                        fontWeight="bold"
                        fontSize="14px"
                        pt="15px"
                    >
                        Pagamento realizado
                    </H1>
                    <P styling="base" fontSize="11px" color="#9ea4ac">
                        Pagamento realizado pelo financeiro
                    </P>
                </Box>
                <Box styling="column" m="0px 15px" alignItems="flex-start">
                    <H1
                        styling="base"
                        color="text.contrast"
                        fontWeight="normal"
                        fontSize="12px"
                        m="0px 15px"
                    >
                        Valor
                    </H1>
                    <H1
                        styling="base"
                        color="text.contrast"
                        fontWeight="bold"
                        fontSize="14px"
                        pt="10px"
                    >
                        {`${props.currencySymbol} ${props.declared}`}
                    </H1>
                    <H1
                        styling="base"
                        color="text.contrast"
                        fontWeight="bold"
                        fontSize="14px"
                        pt="25px"
                    >
                        {`${props.currencySymbol} ${props.approved}`}
                    </H1>
                    <H1
                        styling="base"
                        fontWeight="bold"
                        fontSize="14px"
                        pt="25px"
                        color="#4acc82"
                    >
                        {`${props.currencySymbol} ${props.approved}`}
                    </H1>
                </Box>
            </Box>
        </Box>
    );
};

export default memo(Extract);
