export class Profile {
  constructor(
    public firstName: string,
    public lastName: string,
    public gender: string,
    public dateOfBirth: string,
    public email: string,
    public about: string,
    public isCar: boolean,
    public phoneNumber: number,
    public id?: number
  ) { }
}