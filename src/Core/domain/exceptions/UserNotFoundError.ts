export class UserNotFoundError extends Error {
    constructor(message: string) { 
        super('UserNotFoundError!'); 
        this.name = 'UserNotFoundError';
        this.message = message 
    }
}