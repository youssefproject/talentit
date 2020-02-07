
import { Parse } from "parse";
import { Event } from "../models/event.model";

export class Notification extends Parse.Object {
    public event: Event;
    public type: number;
    public isRead: boolean;
    public who:Parse.Object;
    public message: string;
    public date:Date;
  }