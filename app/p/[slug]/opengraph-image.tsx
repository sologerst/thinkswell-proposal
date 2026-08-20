import { ImageResponse } from "next/og";
import { getProposal } from "@/lib/proposals";

export const alt = "Thinkswell proposal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proposal = getProposal(slug);
  const title = proposal?.clientName ?? "Thinkswell Proposal";
  const subtitle = proposal?.heroAccent ?? "Think smart.";

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
          THINKSWELL / PROPOSAL
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontFamily: "Georgia, serif",
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 20, fontSize: 28, color: "#60dde8" }}>
            {subtitle}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
