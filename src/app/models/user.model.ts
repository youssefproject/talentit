
import { Parse } from "parse";

export class User extends Parse.Object {
    public name: string;
    public avatar: Parse.File;
  }