import { env } from 'process';

export interface IExtensionConfig {
    readonly oauth: Readonly<{
        authority: string;
        tokenEndpoint: string;
        authorizeEndpoint: string;
        userInfoEndpoint: string;
        clientId: string;
        clientSecret: string;
        responseType: string;
        scope: string;
        revocationEndpoint: string;
    }>;
    readonly apiBaseUrl: string;
    readonly ingSite: string;
    readonly cnblogsOpenApiUrl: string;
}

export const isDev = () => process.env.NODE_ENV === 'Development';

export const defaultConfig: IExtensionConfig = {
    oauth: {
        authority: 'https://oauth.cnblogs.com',
        tokenEndpoint: '/connect/token',
        authorizeEndpoint: '/connect/authorize',
        userInfoEndpoint: '/connect/userinfo',
        clientId: 'vscode-cnb',
        clientSecret: '',
        responseType: 'code',
        scope: 'openid profile CnBlogsApi CnblogsAdminApi',
        revocationEndpoint: '/connection/revocation',
    },
    apiBaseUrl: 'https://i.cnblogs.com',
    ingSite: 'https://ing.cnblogs.com',
    cnblogsOpenApiUrl: 'https://api.cnblogs.com',
};

export const devConfig: IExtensionConfig = {
    ...defaultConfig,
    oauth: {
        ...defaultConfig.oauth,
        authority: env.Authority ? env.Authority : 'https://my-oauth.cnblogs.com',
        clientId: env.ClientId ? env.ClientId : 'vscode-cnb',
        clientSecret: env.ClientSecret ? env.ClientSecret : '',
    },
    apiBaseUrl: 'https://admin.cnblogs.com',
    ingSite: 'https://my-ing.cnblogs.com',
    cnblogsOpenApiUrl: 'https://my-api.cnblogs.com',
};
