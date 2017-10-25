import { Comment } from './comment.model';

export class Report{

    reportId: string;
    reportName: string;
    reportUrl: string;
    reportDate: string;
    lastUpdated: string;
    comments: Array<Comment>;

    constructor(values: Object = {}) {
        Object.assign(this, values);
        console.log(this);
    }
}