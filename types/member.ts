import { Sys } from "./sys";
import { Image } from "./image";
import { Link } from "./link";

export interface Member {
  _id: string;
  _sys: Sys;
  fullName: string;
  slug: string;
  guraduationYear: number;
  biography: string;
  profileImage: Image;
  x: Link;
  github: Link;
}
