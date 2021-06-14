
export class RegisterModel{
  public id: number;

  constructor(
    public username: string,
    public email: string,
    public password: string,
    public createdAt: Date
  ){}
}
