import Hello from "@/app/components/hello";

export default function Home() {
  console.log("Home, whoami?");

  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js 15</h1>
      <h2>Hello</h2>
      <Hello />
    </>
  );
}
