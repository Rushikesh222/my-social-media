import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { avatar1, avatar2 } from "../../assets/data";

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
      avatarUrl: avatar1,
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
    avatarUrl: avatar2,
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
    content: "Get ready for Chandrayaan-3 on 14-July-2023",
    avatarUrl: avatar2,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Rushikesh",
    Image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/lvm-3_launch_a-sixteen_nine.jpg?VersionId=BoptKMb4yTmRNmoOkiZpE5iaX3hrMZ7y&size=690:388",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "hello tom and jerry",
    avatarUrl: avatar2,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Aniket",
    Image: "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg",

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
