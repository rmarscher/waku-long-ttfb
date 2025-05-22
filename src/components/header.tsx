"use client";

import { useRouter } from "waku/router/client";
import { Link } from "./link";
import { useAtom } from "jotai";
import { navigatingAtom } from "../atoms";
import { useEffect } from "react";

export const Header = () => {
  const { path, unstable_events } = useRouter();
  const [ navigating, setNavigating ] = useAtom(navigatingAtom);

  useEffect(() => {
    const logStart = (event: any) => {
      console.log("routing start", event);
      setNavigating({
        from: event.from,
        to: event.to,
        started: new Date(),
        route: event,
      })
    };
    const logComplete = (event: any) => {
      console.log("routing complete", event);
      setNavigating(undefined);
    };
    unstable_events.on("start", logStart);
    unstable_events.on("complete", logComplete);
    console.log("set up routing events");
    return () => {
      unstable_events.off("start", logStart);
      unstable_events.off("complete", logComplete);
      console.log("cleaned up routing events");
    }
  }, [unstable_events]);

  return (
    <>
      <header className="flex items-center gap-4 p-6 lg:fixed lg:left-0 lg:top-0">
        <h2 className="text-lg font-bold tracking-tight">
          <Link to="/">Waku starter</Link>
        </h2>
        <p>Current path: {path}</p>
        <Link to="/" className="ml-4 underline" unstable_pending="...">
          Index
        </Link>
        <Link to="/about" className="ml-4 underline" unstable_pending="...">
          About
        </Link>
      </header>
      {navigating ? (
        <p className="p-6 lg:fixed lg-left-0 lg:top-16">
          {JSON.stringify(navigating)}
        </p>
      ) : (
        ""
      )}
    </>
  );
};
