import { ImageResponse } from "next/og";

// Social share image (Facebook, iMessage, LinkedIn…). Generated at build time.
// Exported as a real /og.png file so every host serves it as an image.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf7f2",
          color: "#1c1a17",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 10, color: "#a4532f", textTransform: "uppercase" }}>
          Chef à domicile · Private chef
        </div>
        <div style={{ fontSize: 150, marginTop: 24, letterSpacing: -3 }}>Chez Vous</div>
        <div style={{ width: 1, height: 60, background: "#1c1a17", opacity: 0.3, margin: "28px 0" }} />
        <div style={{ fontSize: 34, fontStyle: "italic", opacity: 0.8 }}>Montréal</div>
      </div>
    ),
    size,
  );
}
