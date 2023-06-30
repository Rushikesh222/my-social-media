import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: " repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    Image:
      "https://e1.pxfuel.com/desktop-wallpaper/123/202/desktop-wallpaper-brids-gallery-high-flying-bird.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "hello world",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Rushikesh",
    Image:
      "https://blog.humanesociety.org/wp-content/uploads/2019/02/ELEPHANTS-K6C5EP_401765-1-1220x813.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "hello tom and jerry",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    Image: "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg",
    username: "Aniket",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
