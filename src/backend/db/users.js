import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { avatar1, avatar2 } from "../../assets/data";

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
    avatarUrl: avatar2,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rushikesh",
    lastName: "shirsat",
    username: "Rushikesh",
    password: "Rushikesh123",
    avatarUrl: avatar2,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
