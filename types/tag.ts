import { Sys } from "./sys";

export interface Tag {
  _id: string;
  _sys: Sys;
  name: string;
  slug: string;
}
