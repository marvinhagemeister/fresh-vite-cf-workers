import { Counter } from "../islands/Counter.tsx";

export default function Page() {
  console.log("This was served by CF worker");

  return (
    <div>
      <h1>hello from CF workers</h1>
      <img src="/logo.svg" width="100" height="100" />
      <Counter />
    </div>
  );
}
