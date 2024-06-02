import "server-only";
import { cache } from "react";
import { createClient } from "newt-client-js";
import { Product } from "../types/products";

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
