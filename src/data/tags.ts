export const Tags = {
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  React: "React",
  Next: "Next.js",
  Tailwind: "Tailwind CSS",
  SASS: "SASS",
  Node: "Node.js",
  Express: "Express",
  SocketIO: "Socket.IO",
  Prisma: "Prisma",
  MongoDB: "MongoDB",
  FramerMotion: "Framer Motion",
  Git: "Git",
};

export type Tag = (typeof Tags)[keyof typeof Tags];
