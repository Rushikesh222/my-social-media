import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The roles that birds play in supporting nature and the environment are numerous. They perform pest control by eating insects, certain species act as nature’s clean-up crew by eating carcasses, and they even contribute to plant growth and protect against erosion by burying seeds that will grow into trees with roots that anchor the soil. Birds also support economies, as their beauty is enough to draw tourists from around the world. ",
    Image:
      "https://www.wallpapertip.com/wmimgs/37-370637_collection-great-pictures-pure-high-definition-hd-you.jpg",

    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rushikesh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Fish feces are one of the most efficient mechanisms for long-term carbon storage. The feces can lock carbon away for 600 years. Unfortunately due to overfishing, the number of fish and the amount of fish feces present in the water has decreased negatively impacting the amount of carbon being stored in feces. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "prasadvarade123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Elephant play a critical role in their native habitat. During times of drought, elephants will dig up dry waterbeds, creating watering holes for themselves and other species. In addition to this, elephants will also eat plants and disperse the seeds, fresh and fertilized, in their dung.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "samuniversal76",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Though not as efficient as bees, butterflies contribute to the pollination of a variety of flowering plants. Butterflies will land on flowers in search of nectar; in the process, they often pick up pollen which is then transported to other plants. They prefer wildflowers with flat faces that grow in clusters providing ample reward for their efforts. ",
    Image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-06/220610-monarch-butterflies-mjf-1509-34c5d6.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "asmita432",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
