// how get access token
import { getAccessToken, getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
 
export async function GET() { 
  const session = await getSession();
  // const { accessToken } = await getAccessToken();
  return NextResponse.json({ ...session });
}