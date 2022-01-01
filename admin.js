const admin     =   require('firebase-admin');

// firebase service account pk
const type              = "service_account";
const project_id        = "courso-48cd3";
const private_key_id    = "d69da285ff950b94dcf63d4a5903856d595b31ab";
const private_key       = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCs0GsJD96npJY7\nwnVnFVeEj8u76PjFpVMwIl6a10A6KCGBJapF7snD5sOBhs4Dnc/BhINjgGjg/X00\nYk25jDVdnkkR3IbEoVsPMVAS8a+9vQLLOOTL/Zw5boDst8Thpv6RbdWFv5MjFruB\n7Ycn8ifoUIV0+s/NWCTnek9Ap+OkYO02a8XSC/RoS5+p5ujCp3UUH39NeWRepIB+\nBkRYj2OfCy2S4MJf8U/VjCymLD6m3paD3JysXn0p3pmZztj9d76tbGWg56EZ4I7x\n51Wpg1ibCSP4D2BMxHr11RtPalxqbZdWesNinIdJpi5xfNDi3DiIB9DOKNN6dMmb\nZhJPRX0TAgMBAAECggEAEl0DQq9BBadjn24Gc7G83wU4rPsQlFABCvhb/TAqTwO8\nq7CI6214WyzGUZk1gwTd8r5WB9i5TE8jYtGfWLwhX5VWRmOcnoBW4MJos9qixhKz\nnUyqY1LLqv6nDIBql1/bZTC6o7+7rtrXifLnjcMZooIL7GZKdpOLOF2y1jgA5JKL\nGZofnlVNW54HmuHmGv4QOhG+qdYcrv+7rwi8v/fXokL+IAbo0Ql5JnHfYCrWl3aP\ngtmKP6Wpr4N0dJ1uZPqUFLoJ3DoLMfwqLTxiFyO6tV6x5A3V9tXzfLJ6Tk2gJzf5\njPWsRJkR+Pdv0+QUzTVSVhtbsIdoAOLZAENSSs6+gQKBgQDtoSt3QeZFmNtQxHkV\n/ouZUE1nhyMkUm1cORrICnks0N1jOrNfgDOzKdNkhJvVYcHr8XAt5ejJ3LlUt7Fo\nvfAzs5UOHRGAdQ2CJkZlhTVvxRwcN44e89XhjAX+qtPX4NzB/gO+Ej8BZtR3MgPn\nqfEsoAiZ9S2zeEB/T9f6WULO4wKBgQC6LIMqhWEZYcSXgFsc16jA2fOXbCv03lKv\n23mu3IxzTy9kxkYO6j5XH3rPaIEEdi5+/ubg1gyp2PDGt/3cYebJforI8rWnCgNG\nFx02l6pUuVkiHlPkZGeHhh2rPrC/eFttyy+pCQA0M+899or4wumXw52DKp9Z7rCe\nSez9Hv9AEQKBgQC46a/fL4K3KcmQQjNPcDLFbP2u0DQCcbn0B+PVQoEk5KtCKk2m\nxSZ2Btge4io5k8bJiamXrc7GNmJpkEAXl6YxNU+KGgiig3OtkYc6PLxma2YCdyC6\n6VfIGaQYlmofFTX0J2xWHfC1cIVo85yiS1YHOck3tNiJTcwyxbj1cTxRrQKBgCty\n/f2reTjSP25YL2twzVqMwzPgs/WG+Wc/YouzvzeeEGKFf441ju0IVMIZEps29az/\n0mRAsF3nWnIWOLH5S0JVPRCezFQ6mv79n/zAsqjpROsYht2zrRHM9BmmHNviu/vI\nwsvBZQHJ6Rjd9BsQajHYHmehR+VWNnQKrrt4Q3vxAoGAJErrgWrmsznh5T4jprkS\npnYF5wSqDKJlCFFLxlipDWV0jk2z0PB4fHXHDBT293dFXAiM0fRh4m4R0DXju3qp\ndFZ2r6Q3f6s3O4oxEsYWbK0yoTxhawCWAQIJXsd0o3y4W1hsniBN43gW2yV+UTB6\nhgH2Lkkl8y7oLcCeuJawacY=\n-----END PRIVATE KEY-----\n";
const client_email      = "firebase-adminsdk-m6ygp@courso-48cd3.iam.gserviceaccount.com";
const client_id         = "111668474809671219286";
const auth_uri          = "https://accounts.google.com/o/oauth2/auth";
const token_uri         = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url   = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url          = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-m6ygp%40courso-48cd3.iam.gserviceaccount.com";

admin.initializeApp({
    credential: admin.credential.cert({
        type,
        project_id,
        private_key_id,
        private_key:
            private_key.replace(/\\n/g,'\n'),
        client_email,
        client_id,
        auth_uri,
        token_uri,
        auth_provider_x509_cert_url,
        client_x509_cert_url
    }),
});

module.exports = admin;