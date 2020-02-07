
import { Parse } from "parse";
import { Event } from "../models/event.model";
import { Guest } from "../models/guest.model";


export class EventsConnect extends Parse.Object {
    public id: string;
    public type: number;
    public event: Event;
    public guest: Guest;
    public user: Parse.User;
  }