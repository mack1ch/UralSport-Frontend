'use client';

import { ThemeContext, ThemeFactory, Input, Button } from '@skbkontur/react-ui';
import styles from './ui.module.scss';

export const FlowForm = () => {
    return (
        <>
            <ThemeContext.Provider value={FlowFormTheme}>
                <main className={styles.layout}>
                    <div className={styles.cover}>
                        <section className={styles.info}>
                            <h1 className={styles.h1}>Вы всё ещё думаете? Просто попробуйте</h1>
                            <p className={styles.text}>
                                Оставьте заявку, и мы поможем вам подобрать подходящий тариф.
                            </p>
                            <p className={styles.text}>
                                Наш консультант свяжется с вами в течение трех рабочих часов и
                                подберет подходящий тариф. Мы работаем с Министерствами, бизнесами,
                                волонтерскими-организациями
                            </p>
                        </section>
                        <form className={styles.form}>
                            <Input placeholder="Фамилия Имя Отчество" width={'100%'} size="large" />
                            <Input placeholder="Электронная почта" width={'100%'} size="large" />
                            <Input
                                placeholder="Номер телефона"
                                type="tel"
                                width={'100%'}
                                size="large"
                            />
                            <span
                                style={{ marginTop: '32px', width: '100%', padding: '0' }}
                                className={styles.form}>
                                <Input placeholder="Ваша организация" width={'100%'} size="large" />
                                <span className={styles.row}>
                                    <Input placeholder="ИНН" width={'55%'} size="large" />
                                    <Input placeholder="КПП" width={'35%'} size="large" />
                                </span>
                            </span>
                            <Button width={'100%'} size="large" use="primary">
                                Оставить заявку
                            </Button>
                            <p className={styles.desc}>
                                Заполняя форму, вы соглашаетесь на обработку персональных данных и
                                получение информационных сообщений от экосистемы продуктов Inverse.
                            </p>
                        </form>
                    </div>
                </main>
            </ThemeContext.Provider>
        </>
    );
};

const FlowFormTheme = ThemeFactory.create({
    inputBorderColor: '#d2d2d2',
    inputBorderColorFocus: '#9932cc',
    inputBorderWidth: '2px',
    btnPrimaryBg: '#9932cc',
    btnBorderRadiusLarge: '32px',
});
