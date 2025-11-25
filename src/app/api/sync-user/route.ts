// ----- clerk -----
import { auth } from "@clerk/nextjs/server";
// ----- next -----
import { NextResponse } from "next/server";
// ----- prisma -----
import { prisma } from "@/lib/prisma";

/**
 * Syncs the user's information with the database.
 * @param {Request} request - The request object containing the user's information.
 * @returns {Promise<NextResponse>} The response object containing the user's information.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { email, fullName } = (await request.json()) as {
      email: string;
      fullName: string;
    };

    const user = await prisma.user.upsert({
      where: { id: userId },
      update: {
        email: email,
        name: fullName,
      },
      create: {
        id: userId,
        email: email,
        name: fullName,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("Error syncing user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
