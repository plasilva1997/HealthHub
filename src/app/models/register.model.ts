
export class RegisterModel{
  public id: number;

  constructor(
    public email: string,
    public password: string,
    public createdAt: Date
  ){}
}
