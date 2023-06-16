import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { lazily } from "react-lazily";
import { ErrorBoundary } from "react-error-boundary";
import { Loading, Error } from "@/components";
const { Home, About } = lazily(() => import("@/pages"));

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading width={"w-14"} height={"w-14"} />}>
        <ErrorBoundary fallback={<Error />}>
          <Home />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading width={"w-14"} height={"w-14"} />}>
        <ErrorBoundary fallback={<Error />}>
          <About />
        </ErrorBoundary>
      </Suspense>
    ),
  },
]);
