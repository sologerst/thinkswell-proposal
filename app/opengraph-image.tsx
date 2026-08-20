import { ImageResponse } from "next/og";

export const alt = "Thinkswell Proposal Hub";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#17161a",
          color: "#f0ede8",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.18em" }}>
          THINKSWELL / PROPOSAL HUB
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontFamily: "Georgia, serif",
            }}
          >
            Client Proposal Hub
          </div>
          <div style={{ marginTop: 20, fontSize: 28, color: "#60dde8" }}>
            Think smart. Built in Nashville.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
