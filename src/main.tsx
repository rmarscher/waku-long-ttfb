import { startTransition, StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Router } from "waku/router/client";

const rootElement = (
  <StrictMode>
    <Router />
    {/* <Router unstable_enhanceCreateData={(createData) => {
      return async (responsePromise) => {
        console.log("calling createData");
        const createDataPromise = createData(responsePromise);
        console.log("awaited response promise", await responsePromise);
        console.log("awaited createData promise", await createDataPromise);
        return createDataPromise;
      };
    }} /> */}
  </StrictMode>
);

if ((globalThis as any).__WAKU_HYDRATE__) {
  hydrateRoot(document, rootElement);
} else {
  createRoot(document as any).render(rootElement);
}
