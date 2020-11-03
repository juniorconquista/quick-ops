import React, { memo } from 'react';
import { Formik, Field, Form, FieldProps } from 'formik';
import { Box } from 'quarks-ui';
import { css } from 'styled-components';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import { schema, optionsExpenseTypes } from './form.structure';
import Upload from '../../../components/Upload';

const Dispense: React.FC = () => (
    <Formik
        validationSchema={schema}
        initialValues={{
            resourceUrl: '',
            expenseTypeCode: '',
            notes: '',
            cardDate: '',
            amountTotal: '',
            amountSpent: '',
        }}
        onSubmit={(values) => console.log('values', values)}
    >
        <Form style={{ width: '100%' }}>
            <Box
                styling="row"
                alignItems="stretch"
                width="100%"
                height="100%"
                p={{ mobile: '15px', tablet: '15px', desktop: '12px 48px' }}
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
                            desktop: '360px',
                        }}
                        p={{ mobile: '15px', tablet: '15px', desktop: '50px' }}
                    >
                        <Field name="resourceUrl">
                            {({
                                field,
                                form: { setFieldValue },
                                meta,
                            }: FieldProps) => {
                                console.log('field', field);
                                return (
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
                                            setFieldValue('resourceUrl', value)
                                        }
                                    />
                                );
                            }}
                        </Field>
                    </Box>
                </Box>
                <Box
                    styling="column"
                    min-height="360px"
                    width="100%"
                    flex="1"
                    justifyContent="flex-start"
                    pl={{ mobile: '15px', tablet: '15px', desktop: '48px' }}
                    css={css({
                        '@media (max-width: 1300px)': {
                            paddingLeft: '0px',
                        },
                    })}
                >
                    <Field name="expenseTypeCode">
                        {({
                            field,
                            form: { setFieldValue },
                            meta,
                        }: FieldProps) => (
                            <Select
                                styling={
                                    meta.touched && meta.error
                                        ? 'danger'
                                        : 'base'
                                }
                                placeholder="Selecione"
                                label="Tipo*"
                                options={optionsExpenseTypes}
                                name={field.name}
                                onChange={(value) =>
                                    setFieldValue('expenseTypeCode', value)
                                }
                                onBlur={field.onBlur}
                                error={meta.touched && meta.error}
                                value={field.value}
                            />
                        )}
                    </Field>
                    <Field name="notes">
                        {({ field, meta }: FieldProps) => (
                            <Input
                                styling={
                                    meta.touched && meta.error
                                        ? 'danger'
                                        : 'base'
                                }
                                placeholder="name@example.com"
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
                        {({ field, meta }: FieldProps) => (
                            <Input
                                styling={
                                    meta.touched && meta.error
                                        ? 'danger'
                                        : 'base'
                                }
                                placeholder="name@example.com"
                                label="Data do comprovante*"
                                name={field.name}
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                error={meta.touched && meta.error}
                            />
                        )}
                    </Field>
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
                                    placeholder="name@example.com"
                                    label="Valor da nota / cupom*"
                                    name={field.name}
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    error={meta.touched && meta.error}
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
                                    placeholder="name@example.com"
                                    label="Valor a ser considerado*"
                                    name={field.name}
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    error={meta.touched && meta.error}
                                />
                            )}
                        </Field>
                    </Box>
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
                <Button styling="base" text="Cancelar" />
                <Button
                    type="submit"
                    styling="success"
                    text="Salvar"
                    m="0px 24px"
                />
            </Box>
        </Form>
    </Formik>
);

export default memo(Dispense);
