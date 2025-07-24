import { APIRequestContext } from '@playwright/test';

export async function getRequest(context: APIRequestContext, endpoint: string) {
    const response = await context.get(endpoint);
    return response;
}

export async function postRequest(context: APIRequestContext, endpoint: string, data: Record<string, any>) {
    const response = await context.post(endpoint, { data });
    return response;
}

export async function validateResponseStatus(response: any, expectedStatus: number) {
    if (response.status() !== expectedStatus) {
        throw new Error(`Expected status ${expectedStatus}, but got ${response.status()}`);
    }
}