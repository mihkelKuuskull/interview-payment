import fetch from 'node-fetch';

export async function httpPost<T = any>(url: string, payload: Record<string, any>) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
    });
    return response.json() as Promise<T>;
}
