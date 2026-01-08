import { createContext } from "react";

export const InputContext = createContext();

export const PostsContext = createContext([
  { id: 1, title: "post1", body: "this is the body of post 1" },
  { id: 2, title: "post2", body: "this is the body of post 2" },
  { id: 3, title: "post3", body: "this is the body of post 3" },
  { id: 4, title: "post4", body: "this is the body of post 4" },
  { id: 5, title: "post5", body: "this is the body of post 5" },
  { id: 6, title: "post6", body: "this is the body of post 6" },
  { id: 7, title: "post7", body: "this is the body of post 7" },
  { id: 8, title: "post8", body: "this is the body of post 8" },
  { id: 9, title: "post9", body: "this is the body of post 9" },
]);
