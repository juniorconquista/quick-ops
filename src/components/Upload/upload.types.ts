export type UploadStyledProps = {
    /** Each styling variant has unique properties that are inherited through the type informed */
    styling?: 'base' | 'success' | 'danger';
};

export interface UploadProps<Value> extends UploadStyledProps {
    error?: string | boolean;
    name: string;
    label?: string;
    value?: Value;
    onChange: (e: Value) => void;
}
