import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page-width not-found">
        <span className="eyebrow mono">404 / AN UNWRITTEN PAGE</span>
        <h1>
          A little
          <br />
          <em>off the map.</em>
        </h1>
        <p>This field note doesn’t exist. There’s still plenty to explore.</p>
        <Link href="/" className="text-link">
          Back to familiar ground <Arrow direction="right" />
        </Link>
      </main>
    </>
  );
}
