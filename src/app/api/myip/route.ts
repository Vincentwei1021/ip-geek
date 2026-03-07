import { NextRequest, NextResponse } from "next/server";

const TOOLBOX_URL = process.env.TOOLBOX_API_URL || "http://localhost:3100";
const TOOLBOX_KEY = process.env.TOOLBOX_API_KEY || "test-key-123";

export async function GET(req: NextRequest) {
  try {
    // Extract client IP from headers
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const cfIp = req.headers.get("cf-connecting-ip");

    let clientIp = cfIp || (forwarded ? forwarded.split(",")[0].trim() : null) || realIp || "127.0.0.1";

    // If behind localhost/proxy, use a fallback public IP detection
    if (clientIp === "127.0.0.1" || clientIp === "::1" || clientIp.startsWith("192.168.") || clientIp.startsWith("10.") || clientIp.startsWith("172.")) {
      // Try to get public IP from external service
      try {
        const extRes = await fetch("https://api.ipify.org?format=json", { signal: AbortSignal.timeout(3000) });
        const extData = await extRes.json();
        clientIp = extData.ip || clientIp;
      } catch {
        // Keep the local IP as fallback
      }
    }

    const res = await fetch(`${TOOLBOX_URL}/v1/geoip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOOLBOX_KEY}`,
      },
      body: JSON.stringify({ ip: clientIp }),
      signal: AbortSignal.timeout(10000),
    });

    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ success: false, error: "Could not detect IP" }, { status: 502 });
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ success: false, error: "IP detection failed" }, { status: 500 });
  }
}
