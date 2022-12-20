export class User {
    constructor(
        public email: string,
        public nickname: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public gender: string,
        public dateOfBirth: string,
        public about: string,
        public isCar: string,
        public phoneNumber: number,
        public photoUrl: string,
        public id?: number
    ) { }
}