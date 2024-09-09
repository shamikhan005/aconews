import { NextResponse } from "next/server";
import axios from 'axios';

export async function GET(request: Request) {

  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { headers });
  }


  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const q = searchParams.get('q');

  const apiKey = process.env.GNEWS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'api key is missing' }, { status: 500 });
  }

  let url = new URL('https://gnews.io/api/v4/top-headlines');

  if (q) {
    url = new URL('https://gnews.io/api/v4/search');
    url.searchParams.append('q', q);
  }

  url.searchParams.append('token', apiKey);
  url.searchParams.append('lang', 'en');
  // url.searchParams.append('country', 'in');
  url.searchParams.append('max', '10');
  url.searchParams.append('page', page);

  try {
    const response = await axios.get(url.toString());
    return NextResponse.json(response.data);

  } catch (error) {
    return NextResponse.json({ error: 'failed to fetch news' }, { status: 500 });
  }
}