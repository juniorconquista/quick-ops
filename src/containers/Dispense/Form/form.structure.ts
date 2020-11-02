import * as Yup from 'yup';

export const schema = Yup.object().shape({
    type: Yup.string().required('O campo Tipo é obrigatorio'),
    title: Yup.string().required('O campo titulo da despesa é obrigatorio'),
});
