import { ImageResponse } from "next/og";
import { content } from "@/data/portfolio";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F172A",
          color: "#FFFFFF",
          fontSize: 13,
          fontWeight: 700,
        }}
      >
        {content.profile.initials}
      </div>
    ),
    size,
  );
}
