/* eslint-disable unicorn/prevent-abbreviations */

type IYKPOAPEvent = {
    id: number;
    poapEventId: number;
    otp: string;
    status: 'expired';
};

type IYKLinkedToken = {
    contractAddress: string;
    chainId: number;
    tokenId: string;
};

export type IYKRefResponse = {
    uid: string;
    isValidRef: boolean;
    poapEvents: IYKPOAPEvent[];
    linkedToken: IYKLinkedToken;
};

export const useIYKRef = async (reference?: string) => {
    if (!reference) return;

    const response = await fetch('https://api.iyk.app/refs/' + reference, {
        headers: { 'x-api-key': process.env.IYK_API_KEY },
    });

    if (!response.ok) return;

    return (await response.json()) as IYKRefResponse;
};
