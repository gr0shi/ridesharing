export class Profile {
  constructor(
    public email: string,
    public nickname: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public gender: string,
    public dateOfBirth: string,
    public about: string,
    public isCar: boolean,
    public phoneNumber: number,
    public id?: number
  ) { }
}