import {Post} from "./post.model";

export class User{
  constructor(private id:number,
              private email: String,
              private nickname: String,
              private password: String,
              private name: String,
              private Surname: String,
              //private posty: Post[]
  ) {
  }
}
