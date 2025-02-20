import { Link } from "../components/link";
import { Counter } from "../components/counter";

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Counter />
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: "Waku",
    headline: "Waku",
    body: "Hello world!",
  };

  return new Promise<typeof data>((resolve) => {
    setTimeout(() => resolve(data), 5000);
  });
};

export const getConfig = async () => {
  return {
    render: "dynamic",
  } as const;
};
