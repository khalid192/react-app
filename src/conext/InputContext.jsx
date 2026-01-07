import { createContext } from "react";

export const InputContext = createContext();


export const PostsContext = createContext([{id:1,title:"post1",body:"this is the body of post 1"},
{id:2,title:"post2",body:"this is the body of post 2"},
{id:3,title:"post3",body:"this is the body of post 3"}]);


