import Script from 'next/script';

export default function Platform() {
    return (
        <>
            <div
                style={{
                    width: '100vw',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '64px',
                }}>
                <Script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></Script>
                <iframe
                    src="https://forms.yandex.ru/cloud/656ca6d2c09c02a4b22dc234/?iframe=1"
                    frameBorder="0"
                    name="ya-form-656ca6d2c09c02a4b22dc234"
                    width="650"></iframe>
            </div>
        </>
    );
}
