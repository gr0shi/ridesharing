export class Ride {
  constructor(
    public name: string,
    public date: string,
    public description: string,
    public price: number,
    public author: string,
    public contacts: number,
    public id?: number
  ) { }
}