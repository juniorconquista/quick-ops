import React, { memo } from 'react';
import { Formik, Field, Form, FieldProps } from 'formik';
import { Box } from 'quarks-ui';
import { css } from 'styled-components';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import DatePicker from '../../../components/DatePicker';

import Upload from '../../../components/Upload';
import Loading from '../../../components/Loading';
import useAsync from '../../../hooks/useAsync';

import { FormProps } from './form.types';
import {
    schema,
    optionsExpenseTypes,
    optionsCurrencyCode,
} from './form.structure';
import 'react-datepicker/dist/react-datepicker.css';

const Dispense: React.FC<FormProps> = (props) => {
    const addDispense = (body: any): Promise<any> => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return fetch(`${process.env.REACT_APP_API_URL}/expense/add`, {
            method: 'POST',
            headers: headers,
            body: body,
        }).then((response) => response.json());
    };
    const { execute, status } = useAsync<any>(addDispense, false);

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                resourceUrl: '',
                expenseTypeCode: { label: 'Selecione', value: '' },
                currencyCode: { label: 'Selecione', value: '' },
                notes: '',
                cardDate: '',
                amountTotal: '',
                amountSpent: '',
            }}
            onSubmit={async (values, actions) => {
                const body = {
                    ...values,
                    expenseTypeCode: values.expenseTypeCode.value,
                    currencyCode: values.currencyCode.value,
                    cardDate: new Date(values.cardDate).getTime(),
                };
                await execute(JSON.stringify(body));
                actions.setSubmitting(false);
                actions.resetForm();
                props.handleDispense();
            }}
        >
            {({ values }) => (
                <Form style={{ width: '100%' }}>
                    <Box
                        styling="row"
                        alignItems="stretch"
                        width="100%"
                        height="100%"
                        p={{
                            mobile: '15px',
                            tablet: '15px',
                            desktop: '12px 48px',
                        }}
                        css={css({
                            '@media (max-width: 1300px)': {
                                flexDirection: 'column',
                            },
                        })}
                    >
                        <Box
                            styling="row"
                            bg="white.default"
                            width="100%"
                            flex="1"
                            css={css({
                                '@media (max-width: 1300px)': {
                                    marginBottom: '20px',
                                },
                            })}
                        >
                            <Box
                                styling="column"
                                width="100%"
                                height={{
                                    mobile: '100%',
                                    tablet: '100%',
                                    desktop: '320px',
                                }}
                                p={{
                                    mobile: '15px',
                                    tablet: '15px',
                                    desktop: '40px',
                                }}
                            >
                                <Field name="resourceUrl">
                                    {({
                                        field,
                                        form: { setFieldValue },
                                        meta,
                                    }: FieldProps) => (
                                        <Upload
                                            styling={
                                                meta.touched && meta.error
                                                    ? 'danger'
                                                    : 'base'
                                            }
                                            label="Recibo, cupom ou nota fiscal*"
                                            name={field.name}
                                            error={meta.touched && meta.error}
                                            onChange={(value) =>
                                                setFieldValue(
                                                    'resourceUrl',
                                                    value,
                                                )
                                            }
                                        />
                                    )}
                                </Field>
                            </Box>
                        </Box>
                        <Box
                            styling="column"
                            min-height="360px"
                            width="100%"
                            flex="1"
                            justifyContent="flex-start"
                            pl={{
                                mobile: '15px',
                                tablet: '15px',
                                desktop: '48px',
                            }}
                            css={css({
                                '@media (max-width: 1300px)': {
                                    paddingLeft: '0px',
                                },
                            })}
                        >
                            <Box
                                styling="grid"
                                gridTemplateColumns="repeat(2, 1fr)"
                                gridGap={20}
                                width="100%"
                            >
                                <Field name="expenseTypeCode">
                                    {({
                                        field,
                                        form: { setFieldValue },
                                        meta,
                                    }: FieldProps) => {
                                        const error =
                                            meta.touched &&
                                            meta.error &&
                                            //@ts-ignore
                                            meta.error.value;
                                        return (
                                            <Select
                                                styling={
                                                    error ? 'danger' : 'base'
                                                }
                                                placeholder="Selecione"
                                                label="Tipo*"
                                                options={optionsExpenseTypes}
                                                name={field.name}
                                                onChange={(value) =>
                                                    setFieldValue(
                                                        'expenseTypeCode',
                                                        value,
                                                    )
                                                }
                                                onBlur={field.onBlur}
                                                error={error}
                                                value={field.value}
                                            />
                                        );
                                    }}
                                </Field>
                                <Field name="currencyCode">
                                    {({
                                        field,
                                        form: { setFieldValue },
                                        meta,
                                    }: FieldProps) => {
                                        const error =
                                            meta.touched &&
                                            meta.error &&
                                            //@ts-ignore
                                            meta.error.value;
                                        return (
                                            <Select
                                                styling={
                                                    error ? 'danger' : 'base'
                                                }
                                                placeholder="Selecione"
                                                label="Moeda*"
                                                options={optionsCurrencyCode}
                                                name={field.name}
                                                onChange={(value) =>
                                                    setFieldValue(
                                                        'currencyCode',
                                                        value,
                                                    )
                                                }
                                                onBlur={field.onBlur}
                                                error={error}
                                                value={field.value}
                                            />
                                        );
                                    }}
                                </Field>
                            </Box>
                            <Field name="notes">
                                {({ field, meta }: FieldProps) => (
                                    <Input
                                        styling={
                                            meta.touched && meta.error
                                                ? 'danger'
                                                : 'base'
                                        }
                                        placeholder="Digite..."
                                        label="Título da despesa*"
                                        name={field.name}
                                        value={field.value}
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                        error={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="cardDate">
                                {({
                                    field,
                                    form: { setFieldValue },
                                    meta,
                                }: FieldProps) => (
                                    <DatePicker
                                        styling={
                                            meta.touched && meta.error
                                                ? 'danger'
                                                : 'base'
                                        }
                                        label="Data do comprovante*"
                                        placeholderText="DD/MM/YYYY"
                                        selected={field.value}
                                        name={field.name}
                                        onBlur={field.onBlur}
                                        onChange={(value) =>
                                            setFieldValue('cardDate', value)
                                        }
                                        error={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            {values.currencyCode.value !== '' && (
                                <Box
                                    styling="grid"
                                    gridTemplateColumns="repeat(2, 1fr)"
                                    gridGap={20}
                                    width="100%"
                                >
                                    <Field name="amountTotal">
                                        {({ field, meta }: FieldProps) => (
                                            <Input
                                                styling={
                                                    meta.touched && meta.error
                                                        ? 'danger'
                                                        : 'base'
                                                }
                                                type="number"
                                                placeholder="Digite..."
                                                label="Valor da nota / cupom*"
                                                name={field.name}
                                                value={field.value}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                                error={
                                                    meta.touched && meta.error
                                                }
                                            />
                                        )}
                                    </Field>
                                    <Field name="amountSpent">
                                        {({ field, meta }: FieldProps) => (
                                            <Input
                                                styling={
                                                    meta.touched && meta.error
                                                        ? 'danger'
                                                        : 'base'
                                                }
                                                type="number"
                                                placeholder="Digite..."
                                                label="Valor a ser considerado*"
                                                name={field.name}
                                                value={field.value}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                                error={
                                                    meta.touched && meta.error
                                                }
                                            />
                                        )}
                                    </Field>
                                </Box>
                            )}
                        </Box>
                    </Box>
                    <Box
                        styling="row"
                        height="77px"
                        mt="20px"
                        bg="white.default"
                        width="100%"
                        justifyContent="flex-end"
                    >
                        <Button
                            type="button"
                            styling="base"
                            text="Cancelar"
                            onClick={props.handleDispense}
                        />
                        <Button
                            type="submit"
                            styling="success"
                            text="Salvar"
                            m="0px 24px"
                        />
                    </Box>
                    {status === 'pending' && <Loading />}
                </Form>
            )}
        </Formik>
    );
};

export default memo(Dispense);
