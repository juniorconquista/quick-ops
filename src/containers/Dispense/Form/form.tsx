import React, { memo } from 'react';
import { Formik, Field, Form, FieldProps } from 'formik';
import { Box } from 'quarks-ui';
import { css } from 'styled-components';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { schema } from './form.structure';

const Dispense: React.FC = () => (
    <Formik
        validationSchema={schema}
        initialValues={{
            type: '',
            title: '',
        }}
        onSubmit={(values) => console.log('values', values)}
    >
        <Form style={{ width: '100%' }}>
            <Box
                styling="row"
                width="100%"
                p="0 48px"
                height="100%"
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
                    <Box styling="column" width="100%" height="360px">
                        a
                    </Box>
                </Box>
                <Box
                    styling="column"
                    min-height="360px"
                    width="100%"
                    flex="1"
                    pl="48px"
                    css={css({
                        '@media (max-width: 1300px)': {
                            paddingLeft: '0px',
                        },
                    })}
                >
                    <Field name="type">
                        {({ field, meta }: FieldProps) => (
                            <Input
                                styling={meta.error ? 'danger' : 'base'}
                                placeholder="Selecione"
                                label="Tipo*"
                                name={field.name}
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                error={meta.error}
                            />
                        )}
                    </Field>
                    <Field name="title">
                        {({ field, meta }: FieldProps) => (
                            <Input
                                styling={meta.error ? 'danger' : 'base'}
                                placeholder="name@example.com"
                                label="Título da despesa*"
                                name={field.name}
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                error={meta.error}
                            />
                        )}
                    </Field>
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
