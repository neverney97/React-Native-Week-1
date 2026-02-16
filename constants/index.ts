import uuid from "react-native-uuid";

export const users = [
  {
    title: "Welcome to MyApp",
    description: "Your journey to seemless productivity starts here.",
    image: require("@/assets/images/ship.png"),
    id: uuid.v4(),
  },
  {
    title: "Organize Your Tasks",
    description: "Keep track of your to-dos and deadlines effortlessly.",
    image: require("@/assets/images/ship.png"),
    id: uuid.v4(),
  },
  {
    title: "Achieve more",
    description: "Boost your efficiency and accomplish your goals.",
    image: require("@/assets/images/ship.png"),
    id: uuid.v4(),
  },
];
