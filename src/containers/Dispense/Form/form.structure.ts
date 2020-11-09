import * as Yup from 'yup';

export const schema = Yup.object().shape({
    resourceUrl: Yup.string().required('O campo comprovante é obrigatorio'),
    expenseTypeCode: Yup.string().required('O campo tipo é obrigatorio'),
    currencyCode: Yup.string().required('O campo moeda é obrigatorio'),
    notes: Yup.string().required('O campo titulo da despesa é obrigatorio'),
    cardDate: Yup.string().required(
        'O campo data do comprovante é obrigatorio',
    ),
    amountTotal: Yup.number().required('O campo valor da nota é obrigatorio'),
    amountSpent: Yup.number().required(
        'O campo valor a ser considerado é obrigatorio',
    ),
});

export const optionsExpenseTypes = [
    { label: 'Taxa de hotel', value: 'hotel-fee' },
    { label: 'Comida', value: 'food' },
    {
        label: 'Transporte',
        value: 'transport',
    },
];

export const optionsCurrencyCode = [
    { label: 'BRL', value: 'BRL' },
    { label: 'USD', value: 'USD' },
    {
        label: 'MXN',
        value: 'MXN',
    },
];
