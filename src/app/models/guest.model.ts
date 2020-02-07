
import { Parse } from "parse";

export class Guest extends Parse.Object {
    public id: string;
    public name: string;
    public isMan: string;
    public title: string;
    public description: string;
    public avatar: Parse.File;
    public user:Parse.User;
  }