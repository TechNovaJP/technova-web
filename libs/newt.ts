import "server-only";
import { cache } from "react";
import { createClient } from "newt-client-js";
import { Product } from "../types/products";
import { Member } from "../types/member";

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + "",
  token: process.env.NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
});

export const getProducts = cache(async () => {
  const { items } = await client.getContents<Product>({
    appUid: "tech-nova",
    modelUid: "products",
    query: {
      select: [
        "_id",
        "title",
        "slug",
        "meta",
        "body",
        "coverImage",
        "member",
        "tags",
      ],
    },
  });
  return items;
});

export const getUser = cache(async () => {
  const { items } = await client.getContents<Member>({
    appUid: "tech-nova",
    modelUid: "member",
    query: {
      select: [
        "_id",
        "_sys",
        "fullName",
        "slug",
        "graduationYear",
        "biography",
        "profileImage",
        "x",
        "github",
      ],
    },
  });
  return items;
});
