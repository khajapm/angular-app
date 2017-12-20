import { Comment } from './comment.model';

export class StoreData {

    dataId: string;
    transactDate: Date;
    agentName: string;
    cattleCount: number;
    cattleType: string;
    grossWeight: number;
    price: number;
    totalPrice: number;
    userId: number;
    lastUpdated: string;
    comment: Comment;

    constructor(values: Object = {}) {
        Object.assign(this, values);
        console.log(this);
    }
}
