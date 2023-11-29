'use client';

import ProductLogo from '../../../../public/assets/logo.svg';
import styles from './ui.module.scss';
import Image from 'next/image';
import { Button, Input, ThemeContext, ThemeFactory, Toast } from '@skbkontur/react-ui';
import { IAuth } from '@/shared/interface/auth';
import { KeyboardEvent, KeyboardEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Login } from '../api';
import { getAccessToken } from '@/shared/authHelpers/auth';
export const AuthForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<IAuth>({
        email: '',
        password: '',
    });
    const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);
    const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);
    const handleInputChange = (name: string, value: string) => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData, [name]: value };
            if (updatedFormData.email.length > 0 && updatedFormData.password.length > 0) {
                setIsBtnDisabled(false);
            } else {
                setIsBtnDisabled(true);
            }

            return updatedFormData;
        });
    };
    const handleButtonClick = async () => {
        setIsBtnLoading(true);
        router.prefetch('/');
        await Login(formData);
        const accessToken = getAccessToken();
        !!accessToken ? router.push('/events/settings/published') : showComplexNotification();
    };
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, name: string) => {
        if (e.key === 'Enter') {
            handleButtonClick();
        }
    };
    function showComplexNotification() {
        setIsBtnLoading(false);
        Toast.push('Неверная почта или пароль', {
            label: 'Отмена',
            handler: () => Toast.push('Отменить'),
        });
    }

    return (
        <>
            <ThemeContext.Provider value={AuthFormTheme}>
                <form className={styles.form}>
                    <h1 className={styles.header}>
                        <Image src={ProductLogo} width={201} height={31} alt="СпортСтат" />
                    </h1>
                    <div className={styles.inputs}>
                        <Input
                            onKeyDown={(e) => handleInputKeyDown(e, 'email')}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            name="email"
                            placeholder="Почта"
                            width={'100%'}
                            size="large"
                        />
                        <Input
                            type="password"
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            name="password"
                            onKeyDown={(e) => handleInputKeyDown(e, 'password')}
                            placeholder="Пароль"
                            width={'100%'}
                            size="large"
                        />
                        <Button
                            onClick={handleButtonClick}
                            disabled={isBtnDisabled}
                            width={'100%'}
                            use="primary"
                            loading={isBtnLoading}
                            size="large">
                            Войти
                        </Button>
                    </div>
                    <h4 className={styles.helper}>
                        Входя в систему, вы принимаете
                        <br />
                        <span className={styles.blue}>пользовательское соглашение</span>
                    </h4>
                </form>
            </ThemeContext.Provider>
        </>
    );
};

const AuthFormTheme = ThemeFactory.create({
    inputBorderColorFocus: '#9932CC',
    btnPrimaryBg: '#9932CC',
    btnBorderRadiusLarge: '8px',
    inputBorderRadiusLarge: '8px',
});
