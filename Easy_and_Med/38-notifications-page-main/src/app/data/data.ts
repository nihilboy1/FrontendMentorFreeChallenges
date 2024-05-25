export interface Notification {
  avatar: string;
  name: string;
  action: string;
  target?: {
    type: string;
    name?: string;
    link?: string;
    content?: string;
    picture?: string;
  };
  read: boolean;
  date: Date;
}

export const notificationsData: Notification[] = [
  {
    avatar: "/avatar-mark-webber.webp",
    name: "Mark Webber",
    action: "reacted to your recent post",
    target: {
      type: "post",
      name: "My first tournament today!",
      link: "link",
    },
    read: false,
    date: new Date(new Date().setHours(10, 21)),
  },
  {
    avatar: "/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    target: {
      type: "post",
      name: "5 end-game strategies to increase your win rate",
      link: "link",
    },
    read: false,
    date: new Date(new Date().setHours(9, 18)), // 1 minute earlier than Mark's notification
  },
  {
    avatar: "/avatar-angela-gray.webp",
    name: "Angela Gray",
    action: "followed you",
    read: false,
    date: new Date(new Date().setHours(9, 16)), // 2 minutes earlier than Nathan's notification
  },
  {
    avatar: "/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    action: "commented on your picture",
    target: {
      type: "picture",
      picture: "/image-chess.webp",
      link: "link",
    },
    read: true,
    date: new Date(new Date().setHours(9, 1)), // 3 minutes earlier than Angela's notification
  },
  {
    avatar: "/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    action: "has joined your group",
    target: {
      type: "group",
      name: "Chess Club",
      link: "link",
    },
    read: true,
    date: new Date(new Date().setHours(8, 18)), // 4 minutes earlier than Kimberly's notification
  },
  {
    avatar: "/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasamuddin",
    action: "sent you a private message",
    target: {
      type: "message",
      content:
        "Hello! Thanks for setting up the chess club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
      link: "link",
    },
    read: true,
    date: new Date(new Date().setHours(7, 59)), // 5 minutes earlier than Jacob's notification
  },
  {
    avatar: "/avatar-anna-kim.webp",
    name: "Anna Kim",
    action: "left the group",
    target: {
      type: "group",
      name: "Chess Club",
      link: "link",
    },
    read: true,
    date: new Date(new Date().setHours(6, 38)), // 6 minutes earlier than Rizky's notification
  },
];
