import { useState, useEffect, useCallback } from 'react';
import { Status } from './useAsync.types';

const useAsync = <T, E = string>(
    asyncFunction: (body?: any) => Promise<T>,
    immediate = true,
) => {
    const [status, setStatus] = useState<Status>('idle');
    const [value, setValue] = useState<T | null>(null);
    const [error, setError] = useState<E | null>(null);

    const execute = useCallback(
        (body?: any) => {
            setStatus('pending');
            setValue(null);
            setError(null);

            return asyncFunction(body)
                .then((response: any) => {
                    setValue(response);
                    setStatus('success');
                })
                .catch((error: any) => {
                    setError(error);
                    setStatus('error');
                });
        },
        [asyncFunction],
    );

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, status, value, error };
};

export default useAsync;
