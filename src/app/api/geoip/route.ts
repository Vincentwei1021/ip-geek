import { NextRequest, NextResponse } from "next/server";

const TOOLBOX_URL = process.env.TOOLBOX_API_URL || "http://localhost:3100";
const TOOLBOX_KEY = process.env.TOOLBOX_API_KEY || "test-key-123";

export async function GET(req: NextRequest) {
  try {
    const ip = req.nextUrl.searchParams.get("ip");
    if (!ip) {
      return NextResponse.json({ success: false, error: "ip parameter is required" }, { status: 400 });
    }

    const res = await fetch(`${TOOLBOX_URL}/v1/geoip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOOLBOX_KEY}`,
      },
      body: JSON.stringify({ ip }),
      signal: AbortSignal.timeout(10000),
    });

    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ success: false, error: data.error?.message || "GeoIP lookup failed" }, { status: 502 });
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ success: false, error: "GeoIP service unavailable" }, { status: 500 });
  }
}
