"use client";

import { useCallback, useEffect } from "react";
import { Link as WakuLink } from "waku";
import {
  type LinkProps,
  useRouter_UNSTABLE as useRouter,
} from "waku/router/client";
import { useAtom } from "jotai";
import { navigatingAtom } from "../atoms";

export const Link: React.FC<LinkProps> = (props) => {
  const { hash, path, query } = useRouter();
  const [_navigating, setNavigating] = useAtom(navigatingAtom);
  const onClick = props.onClick;
  const to = props.to;
  const internalOnClick = useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (onClick) onClick(evt);
      const from = `${path}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
      if (from.split("#")[0] === to.split("#")[0]) {
        return;
      }
      setNavigating({
        from,
        to,
        started: new Date(),
      });
    },
    [path, to, onClick],
  );
  useEffect(() => {
    setNavigating(undefined);
  }, [path]);
  return <WakuLink {...props} onClick={internalOnClick} />;
};
