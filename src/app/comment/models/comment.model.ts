import { Response } from './response.model';

export class Comment{
    commentId: string;
    userId: string;
    timestamp: string;
    commentText: string;
    responded: true;
    responses: Array<Response>;
}