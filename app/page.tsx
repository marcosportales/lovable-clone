import { caller } from "@/trpc/server";

export default async function Home() {
  const { greeting } = await caller.hello({ text: "from tRPC" });
  return <div>{greeting}</div>;
}
