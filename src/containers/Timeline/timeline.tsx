import React, { memo, useEffect } from 'react';
import { Box } from 'quarks-ui';
import handlerFactory from './timeline.handleFactory';
import { CARDTYPE } from './timeline.types';

const Timeline: React.FC = () => {
    const getTimeline = (): Promise<any> =>
        fetch(`${process.env.REACT_APP_API_URL}/timeline`).then((response) =>
            response.json(),
        );

    const value = {
        content: [
            {
                id: 545,
                cardDate: 1585710000000,
                cardType: 'EXPENSE',
                expenseId: 545,
                invoiceDate: 1585710000000,
                expenseTypeId: 5,
                expenseTypeCode: 'hotel-fee',
                expenseTypeIcon: 'concierge-bell',
                currencyId: 3,
                currencyCode: 'BRL',
                currencySymbol: 'R$',
                resourceUrl:
                    'https://staging-backoffice-hotmart.s3.amazonaws.com/accountability/collaborator_6393359/accountability_742/expense_545_file_615_Captura%20de%20tela%20de%202019-11-24%2010-15-50.png',
                contentType: 'image/png',
                amountSpent: 11.11,
                amountTotal: 222.22,
                notes: 'sadasd',
                status: 'PENDING',
                updatedOn: 1585069977693,
                expenseEvaluation: null,
            },
            {
                id: 544,
                cardDate: 1585105200000,
                cardType: 'EXPENSE',
                expenseId: 544,
                invoiceDate: 1585105200000,
                expenseTypeId: 1,
                expenseTypeCode: 'food',
                expenseTypeIcon: 'utensils',
                currencyId: 3,
                currencyCode: 'BRL',
                currencySymbol: 'R$',
                resourceUrl:
                    'https://staging-backoffice-hotmart.s3.amazonaws.com/accountability/collaborator_6393359/accountability_742/expense_544_file_614_Captura%20de%20tela%20de%202019-11-21%2009-36-41.png',
                contentType: 'image/png',
                amountSpent: 1.11,
                amountTotal: 2.22,
                notes: 'dsfsdsffds',
                status: 'PENDING',
                updatedOn: 1585069977693,
                expenseEvaluation: null,
            },
            {
                id: 1374,
                cardDate: 1585069978256,
                cardType: 'ACCOUNTABILITY_SUBMITTED',
                author: {
                    id: 6393359,
                    name: 'Henrique Elias',
                    email: 'henrique.elias@hotmart.com',
                },
                notes: null,
                status: null,
            },
            {
                id: 1373,
                cardDate: 1585069977972,
                cardType: 'EVALUATION',
                author: {
                    id: 6393359,
                    name: 'Henrique Elias',
                    email: 'henrique.elias@hotmart.com',
                },
                notes: null,
                status: 'PENDING',
            },
            {
                id: 1372,
                cardDate: 1585059146350,
                cardType: 'ACCOUNTABILITY_CREATED',
                author: {
                    id: 6393359,
                    name: 'Henrique Elias',
                    email: 'henrique.elias@hotmart.com',
                },
                notes: null,
                status: null,
            },
        ],
    };

    // const { execute, status, value } = useAsync<any>(getTimeline, false);

    // useEffect(() => { execute() }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    console.log('value', value);

    return (
        <Box styling="column" width="100%" mt="24px">
            {value.content.map((card) => {
                const CardComponent = handlerFactory(card.cardType as CARDTYPE);
                return <CardComponent {...card} />;
            })}
        </Box>
    );
};

export default memo(Timeline);
