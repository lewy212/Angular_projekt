import {Post} from "./post.model";

export class User{
  constructor(private _id:number,
              private _email: String,
              private _nickname: String,
              private _password: String,
              private _name: String,
              private _surname: String,
              private _posty: Post[]
  ) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): String {
    return this._email;
  }

  set email(value: String) {
    this._email = value;
  }

  get nickname(): String {
    return this._nickname;
  }

  set nickname(value: String) {
    this._nickname = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get surname(): String {
    return this._surname;
  }

  set surname(value: String) {
    this._surname = value;
  }

  get posty(): Post[] {
    return this._posty;
  }

  set posty(value: Post[]) {
    this._posty = value;
  }
}
