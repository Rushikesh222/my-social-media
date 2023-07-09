import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { avatar1, avatar2, avatar3 } from "../../assets/data";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    avatarUrl: avatar1,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rushikesh",
    lastName: "shirsat",
    username: "Rushikesh",
    password: "Rushikesh123",
    Website: "https://rushiecho.netlify.app/",
    Bio: "I am Web Developer and A part of neogcamp 2023",
    avatarUrl: avatar2,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Aniket",
    lastName: "shirsat",
    username: "Aniket",
    password: "Rushikesh123",
    avatarUrl: avatar3,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Naik",
    username: "Shubham",
    password: "Shubham123",
    avatarUrl:
      "https://res.cloudinary.com/dzicjioey/image/upload/v1688463806/Images/qaklfpoc9jbegcwxpizd.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jayesh",
    lastName: "Patil",
    username: "Jayesh",
    password: "Jayesh123",
    avatarUrl:
      "https://res.cloudinary.com/dzicjioey/image/upload/v1688463345/Images/fqw7zpo1ewwxco9hzltu.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
