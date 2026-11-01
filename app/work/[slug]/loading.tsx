import { SiteHeader } from "@/components/site-header";
import { FoldMark } from "@/components/brand-mark";

export default function LoadingProject() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page-width not-found" aria-busy="true">
        <span className="eyebrow mono">OPENING THE FIELD NOTES</span>
        <FoldMark />
        <h1>
          One moment
          <br />
          <em>of curiosity.</em>
        </h1>
        <p role="status">Loading the project…</p>
      </main>
    </>
  );
}
