import { Image } from "./image";
import { Sys } from "./sys";

export interface Link {
  html: string;
  url: string;
}

export interface News {
  _id: string;
  _sys: Sys;
  title: string;
  date: string;
  slug: string;
  image: Image;
  content: string;
}
