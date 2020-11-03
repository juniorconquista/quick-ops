import { FileError } from 'react-dropzone';

export const getMessageErrorByCode = (error: FileError) => {
    switch (error.code) {
        case 'file-invalid-type':
            return 'O tipo de arquivo deve ser image/jpeg ou image/png';
        case 'file-too-large':
            return 'O arquivo tem mais de 1MB';
        case 'too-many-files':
            return 'É permitida apenas uma imagem por vez';
        default:
            return error.message;
    }
};
