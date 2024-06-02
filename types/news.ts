import { Sys } from "./sys";

export interface Link {
  html: string;
  url: string;
}

export interface News {
  _id: string;
  _sys: Sys;
  title: string;
  slug: string;
  content: string;
  link?: Link;
}
