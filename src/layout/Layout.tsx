import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../components/Loader";
import { Container } from "../components/Container";

export default function Layout() {
  return (
    <main className="h-full">
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </main>
  );
}
