import { Link } from "../components/link";

export default async function AboutPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: "About",
    headline: "About Waku",
    body: "The minimal React framework",
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
