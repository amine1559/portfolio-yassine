import { ImageResponse } from "next/og";
import { content } from "@/data/portfolio";

export const alt = content.metaTitle;
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
          backgroundColor: "#0F172A",
          color: "#FFFFFF",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#C4B5FD" }}>Communication digitale</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{content.profile.fullName}</div>
          <div style={{ marginTop: 18, fontSize: 34, color: "#E2E8F0" }}>{content.profile.title}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#93C5FD" }}>{content.profile.location}</div>
      </div>
    ),
    size,
  );
}
