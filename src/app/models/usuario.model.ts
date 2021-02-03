export class Usuario {
  constructor(
    public email: string,
    public password: string,
    public role: string = "USER_ROLE",
    public nombre?: string,
    public img?: string,
    public _id?: string
  ) {}
}
