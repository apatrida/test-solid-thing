import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import {createResource} from "solid-js";

export default function Home() {
    const [someResource] = createResource(serverFoo)
  return (
      <main>
          <Title>Hello World</Title>
          <h1>Hello world!</h1>
          <Counter/>
          <div>{someResource()}</div>
      </main>
  );
}


async function serverFoo() {
    'use server';

    return 10;
}
