export class TagModel {
    id?: string;
    name?: string;
    description?: string;
}

export class UserModel {
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
}

export class ErrorModel{
    detail?: string
    status?: number
    title?: string
    traceId?: string
    type?: string
}