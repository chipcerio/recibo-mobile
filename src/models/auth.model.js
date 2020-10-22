export const CognitoAuthModel = (model) => ({
    idToken: {
        jwtToken: model.idToken.jwtToken ? model.idToken.jwtToken : null,
        payload: {
            sub: model.idToken.payload.sub ? model.idToken.payload.sub : null,
            aud: model.idToken.payload.aud ? model.idToken.payload.aud : null,
            email_verified: model.idToken.payload.email_verified ? model.idToken.payload.email_verified : null,
            event_id: model.idToken.payload.event_id ? model.idToken.payload.event_id : null,
            token_use: model.idToken.payload.token_use ? model.idToken.payload.token_use : null,
            auth_time: model.idToken.payload.auth_time ? model.idToken.payload.auth_time : null,
            iss: model.idToken.payload.iss ? model.idToken.payload.iss : null,
            "cognito:username": model.idToken.payload['cognito:username'] ? model.idToken.payload['cognito:username'] : null,
            exp: model.idToken.payload.exp ? model.idToken.payload.exp : null,
            iat: model.idToken.payload.iat ? model.idToken.payload.iat : null,
            email: model.idToken.payload.email ? model.idToken.payload.email : null,
        }
    },
    refreshToken: {
        token: model.refreshToken.token ? model.refreshToken.token : null
    },
    accessToken: {
        jwtToken: model.idToken.jwtToken ? model.idToken.jwtToken : null,
        payload: {
            sub: model.idToken.payload.sub ? model.idToken.payload.sub : null,
            event_id: model.accessToken.payload.event_id ? model.accessToken.payload.event_id : null,
            token_use: model.accessToken.payload.token_use ? model.accessToken.payload.token_use : null,
            scope: model.accessToken.payload.scope ? model.accessToken.payload.scope : null,
            auth_time: model.accessToken.payload.auth_time ? model.accessToken.payload.auth_time : null,
            iss: model.accessToken.payload.iss ? model.accessToken.payload.iss : null,
            exp: model.accessToken.payload.exp ? model.accessToken.payload.exp : null,
            iat: model.accessToken.payload.iat ? model.accessToken.payload.iat : null,
            jti: model.accessToken.payload.jti ? model.accessToken.payload.jti : null,
            client_id: model.accessToken.payload.client_id ? model.accessToken.payload.client_id : null,
            username: model.accessToken.payload.username ? model.accessToken.payload.username : null,
        }
    },
    clockDrift: model.clockDrift ? model.clockDrift : null
})