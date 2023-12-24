import { useLayoutEffect } from 'react';
import { IProfile, useAuth } from '../providers/AuthProvider';

export const CheckAuth = () => {
    const { profile, getProfile } = useAuth();

    useLayoutEffect(() => {
        getProfile()
    }, []);

    if (profile) {
        return <div>
            {Object.keys(profile).map((key) => (
                <div key={key}>
                    {key}: {renderValue(profile[key as keyof IProfile], key as keyof IProfile)}
                </div>
            ))}
        </div>;
    } else {
        return <div>Пользователь не авторизован</div>;
    }
};

const renderValue = (value: string | boolean | Date, key: keyof IProfile) => {
    if (key == "avatar_url") {
        return <img src={`${value}`} alt="avatar" width={200} />
    }
    if (value instanceof Date) {
        return value.toLocaleString();
    }
    return value;
};