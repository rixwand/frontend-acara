import { Inter } from "next/font/google";
import { Button } from "@heroui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1>Hello World!</h1>
      <Button color="primary">Button</Button>
    </main>
  );
}
