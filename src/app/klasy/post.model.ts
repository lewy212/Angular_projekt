import {User} from "./user.model";

export class Post{
  constructor(private id:number,
              private title: String,
              private content: String,
              private wasEdited: Boolean,
              //private liczbaLikow: User[],
              //private previousEditions: Post[]
              ) {
  }
}
