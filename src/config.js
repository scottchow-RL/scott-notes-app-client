export default {
    s3: {
        REGION: 'us-east-2',
        BUCKET: 'scott-notes-app-uploads'
    },
    apiGateway: {
        REGION: 'us-east-2',
        URL: 'https://olsuvmzw09.execute-api.us-east-2.amazonaws.com/prod'
    },
    cognito: {
        REGION: 'us-east-2',
        USER_POOL_ID: 'us-east-2_kjEcHPOKm',
        APP_CLIENT_ID: '76s4utj8ok7ciqi2kfbb2go82q',
        IDENTITY_POOL_ID: 'us-east-2:0bb5dc63-7b91-454c-8f9e-7049e7ed694a'
    }
}