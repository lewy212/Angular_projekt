import {User} from "./user.model";

export class Comment{
  constructor(private user: User,
              private content: String,
              private wasEdited: Boolean) {
  }
}
