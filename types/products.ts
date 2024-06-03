import { Member } from "./member";
import { Sys } from "./sys";

export interface Image {
  _id: string;
  src: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  width: number;
  height: number;
  title: string;
  altText: string;
  description: string;
  metadata: Record<string, unknown>;
}

export interface Meta {
  title: string;
  description: string;
  ogImage: Image;
}

export interface Product {
  _id: string;
  _sys: Sys;
  title: string;
  description: string;
  slug: string;
  meta: Meta;
  content: string;
  coverImage: Image[];
  member: Member[];
  tags?: string[];
}
