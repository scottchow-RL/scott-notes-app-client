export default {
    s3: {
        REGION: 'us-east-2',
        BUCKET: 'scott-notes-app-uploads'
    },
    apiGateway: {
        REGION: 'us-east-2',
        URL: 'https://y8awohwe8i.execute-api.us-east-2.amazonaws.com/dev'
    },
    cognito: {
        REGION: 'us-east-2',
        USER_POOL_ID: 'us-east-2_kjEcHPOKm',
        APP_CLIENT_ID: '76s4utj8ok7ciqi2kfbb2go82q',
        IDENTITY_POOL_ID: 'us-east-2:0bb5dc63-7b91-454c-8f9e-7049e7ed694a'
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: 'pk_test_51GxNnRDsLkbI6x6SE9PXQSJtF7KE4tZH8n1MFggvgTkyWdhv3QuJaa4Mt2Whcmje201Coj4JMFWEDdcbmH2TGRvS00uX6IrBOX',
}