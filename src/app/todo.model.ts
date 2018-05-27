export class Todo {
    id: number;
    title: string;
    isDone: boolean;
    updatedAt: Date;

    /**
     *
     */
    constructor(id: number, title: string, isDone: boolean, updatedAt: Date) {
        this.id = id;
        this.title = title;
        this.isDone = isDone;
        this.updatedAt = updatedAt;        
    }
}
