import { Box, Label, P } from 'quarks-ui';
import React, { memo, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import styled from 'styled-components';
import { variant, VariantArgs, color, space } from 'styled-system';

import { UploadProps, UploadStyledProps } from './upload.types';
import { getMessageErrorByCode } from './upload.utils';

/* TODO This component was created in the local repository as it has not yet been 
implemented in lib Quarks UI, however in the future it can be changed to be used directly from lib. */

const variants = variant({
    prop: 'styling',
    variants: {
        base: {
            height: '208px',
            width: '100%',
            borderRadius: '6px',
            color: '#6b7480',
            border: '1px dashed',
            borderColor: '#dfe2e6',
            padding: '0px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            bg: 'white.default',
            cursor: 'pointer',
            transition: 'boxShadow .25s ease',
            p: {
                border: '1px solid',
                borderColor: '#dfe2e6',
                borderRadius: '6px',
                color: '#6b7480',
                height: '46px',
                p: '0px 24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Nunito Sans, sans-serif',
                textAlign: 'center',
                mb: '44px',
            },
            '&:hover, &:focus': {
                outline: 'none',
                p: {
                    boxShadow: '0 0 2px 3px #6b748090',
                },
            },
        } as any,
        get success() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                borderColor: 'success.default',
                color: '#FFFFFF',
                p: {
                    ...base.p,
                    borderColor: 'success.default',
                    color: 'success.default',
                },
                '&:hover, &:focus': {
                    ...base['&:hover, &:focus'],
                    outline: 'none',
                    p: {
                        boxShadow: (props: {
                            colors: { success: { default: string } };
                        }) => `0 0 2px 3px ${props.colors.success.default}90`,
                    },
                },
            };
        },
        get danger() {
            const base: { [key: string]: any } = this.base;
            return {
                ...base,
                borderColor: 'danger.default',
                color: '#FFFFFF',
                p: {
                    ...base.p,
                    borderColor: 'danger.default',
                },
                '&:hover, &:focus': {
                    ...base['&:hover, &:focus'],
                    outline: 'none',
                    p: {
                        boxShadow: (props: {
                            colors: { danger: { default: string } };
                        }) => `0 0 2px 3px ${props.colors.danger.default}90`,
                    },
                },
            };
        },
    },
} as VariantArgs);

const Style: React.FC<UploadStyledProps> = styled.div<UploadStyledProps>`
    ${variants}
    ${color}
    ${space}
`;

const Upload: React.FC<UploadProps<any>> = ({
    styling = 'base',
    name,
    label,
    error,
    onChange,
}) => {
    const [fileRejection, setFileRejection] = useState<
        FileRejection | undefined
    >(undefined);

    const [file, setFile] = useState<File | undefined>(undefined);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg, image/png',
        maxSize: 8000000,
        multiple: false,
        onDrop: (acceptedFiles) => {
            onChange(acceptedFiles[0]);
            setFile(acceptedFiles[0]);
            if (fileRejection) {
                setFileRejection(undefined);
            }
        },
        onDropRejected: (error: FileRejection[]) => setFileRejection(error[0]),
    });

    return (
        <Box styling="column" alignItems="flex-start" width="100%">
            {label && (
                <Label
                    // htmlFor={name}
                    m="12px 0px"
                    fontWeight="bold"
                    color={
                        fileRejection || error
                            ? 'danger.default'
                            : 'text.contrast'
                    }
                >
                    {label}
                </Label>
            )}
            <Style styling={styling} {...getRootProps({ refKey: 'innerRef' })}>
                <input {...getInputProps()} name={name} />
                <p>
                    {(file && file.name) ||
                        'Selecione um arquivo do seu computador'}
                </p>
            </Style>
            <P styling="base" textAlign="left" mt="10px" color="#848a91">
                A imagem deve estar no formato JPG ou PNG.
            </P>
            {error && (
                <P styling="base" mt="12px" color="danger.default">
                    {error}
                </P>
            )}
            {fileRejection &&
                fileRejection.errors.map((error) => (
                    <P styling="base" mt="12px" color="danger.default">
                        {getMessageErrorByCode(error)}
                    </P>
                ))}
        </Box>
    );
};

export default memo(Upload);
