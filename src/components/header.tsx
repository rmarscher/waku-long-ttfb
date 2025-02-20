"use client";

import { useRouter_UNSTABLE as useRouter } from "waku/router/client";
import { Link } from "./link";
import { useAtomValue } from "jotai";
import { navigatingAtom } from "../atoms";

export const Header = () => {
  const { path } = useRouter();
  const navigating = useAtomValue(navigatingAtom);
  return (
    <>
      <header className="flex items-center gap-4 p-6 lg:fixed lg:left-0 lg:top-0">
        <h2 className="text-lg font-bold tracking-tight">
          <Link to="/">Waku starter</Link>
        </h2>
        <p>Current path: {path}</p>
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
