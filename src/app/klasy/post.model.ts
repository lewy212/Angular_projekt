import {User} from "./user.model";
import {Comment} from "./comment.model";

export class Post{

  constructor(private _id:number,
              private _title: String,
              private _content: String,
              private _wasEdited: Boolean,
              private _liczbaLikow: User[],
              private _previousEditions: Post[],
              private _comments: Comment[],
              ) {

  }



 set content(content:String){
    this._content = content;
 }

  set title(title:String){
    this._title = title;
  }

  set wasEdited(edition:Boolean){
    this._wasEdited = edition;
  }

  get id(): number {
    return this._id;
  }

  get title(): String {
    return this._title;
  }

  get content(): String {
    return this._content;
  }

  get wasEdited(): Boolean {
    return this._wasEdited;
  }

  get liczbaLikow(): User[] {
    return this._liczbaLikow;
  }

  get previousEditions(): Post[] {
    return this._previousEditions;
  }

  get comments(): Comment[] {
    return this._comments;
  }
}
