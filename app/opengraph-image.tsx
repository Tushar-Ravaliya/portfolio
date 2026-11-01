import { ImageResponse } from "next/og";

export const alt = "Tushar Ravaliya — Curiosity, in working form.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#f4f1e9",
        color: "#252820",
        width: "100%",
        height: "100%",
        padding: "60px 70px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 20,
          justifyContent: "space-between",
          borderBottom: "1px solid #cdd0c1",
          paddingBottom: 25,
        }}
      >
        <span>TUSHAR RAVALIYA</span>
        <span>DEVELOPER & CURIOUS HUMAN</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 104,
          letterSpacing: -5,
          lineHeight: 1.04,
          marginTop: 40,
        }}
      >
        <span>Curiosity,</span>
        <span>
          in working <span style={{ color: "#b8452b" }}>form.</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          fontSize: 17,
          color: "#73776b",
        }}
      >
        PROJECTS. EXPERIMENTS. A SENSE OF WONDER.
      </div>
    </div>,
    size,
  );
}
