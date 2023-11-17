import { type Tag, Tags } from "./tags";

export type Project = {
  title: string;
  description: string;
  tags: Tag[];
  repoUrl: string;
  liveUrl: string;
};

export const projects = [
  {
    title: "rodrigommfreitas.com",
    description: "Static Next.js portfolio website. You are here right now :)",
    tags: [
      Tags.TypeScript,
      Tags.Next,
      Tags.Tailwind,
      Tags.FramerMotion,
      Tags.Git,
    ] as Tag[],
    repoUrl: "https://github.com/rodrigommfreitas/rodrigommfreitas.com",
    liveUrl: "",
  },
  {
    title: "QuizMaster",
    description:
      "Full stack multiplayer quiz game. I built this for my web development class in university.",
    tags: [
      Tags.TypeScript,
      Tags.React,
      Tags.Tailwind,
      Tags.Node,
      Tags.Express,
      Tags.SocketIO,
      Tags.Prisma,
      Tags.MongoDB,
      Tags.Git,
    ] as Tag[],
    repoUrl: "https://github.com/rodrigommfreitas/QuizMaster",
    liveUrl: "",
  },
  {
    title: "PokéMemo",
    description:
      "Pokémon card memory game. All the pokémon data is fetched from a public API. The user can track their current score and best score.",
    tags: [Tags.JavaScript, Tags.React, Tags.SASS, Tags.Git] as Tag[],
    repoUrl: "https://github.com/rodrigommfreitas/pokememo",
    liveUrl: "https://rodrigommfreitas.github.io/pokememo/",
  },
] as const;
