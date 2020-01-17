
export enum SubscriptionType {
    TELEPHONY = 'TELEPHONY',
    INTERNET = 'INTERNET'
}

export interface Subscription {
    id: number;
    name: string;
    type: Date;
}