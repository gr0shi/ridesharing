export class User {
    constructor(
        public email: string,
        public nickname: string,
        public password: string,
        public id?: number
    ) { }
}