import { Sys } from "./sys";
import { Image } from "./image";

export interface Member {
  _id: string;
  _sys: Sys;
  fullName: string;
  slug: string;
  graduationYear: string;
  role: string;
  biography: string;
  profileImage: Image;
  x: string;
  github: string;
}
