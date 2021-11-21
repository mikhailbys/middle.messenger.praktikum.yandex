import {User} from "./user.model";

export interface Chat {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    "last_message": {
        "user": User,
        "time": string,
        "content": string
    }
}