import { NextResponse } from "next/server";
const PHP_API_URL = process.env.PHP_API_URL + "/blog/get_top_viewed.php";

export async function GET() {
  try {
    const res = await fetch(PHP_API_URL, { cache: "no-store" });
    const data = await res.json();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Top viewed blog API error:", error);
    return NextResponse.json(
      { success: false, message: "Server error", data: [] },
      { status: 500 }
    );
  }
}
