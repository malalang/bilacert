import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const accessKey = process.env.PEXELS_API_KEY;

  if (!accessKey) {
    console.error("PEXELS_API_KEY is not set in environment variables");
    return NextResponse.json(
      { error: "Pexels API key is not configured" },
      { status: 500 }
    );
  }

  // If query is provided, search. Otherwise, get curated photos.
  const url = query 
    ? `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=21`
    : `https://api.pexels.com/v1/curated?per_page=21`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: accessKey,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error || "Failed to fetch from Pexels" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
