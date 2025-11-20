import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { email, fullName } = await request.json();

    const user = await prisma.user.upsert({
      where: { clerkId: userId },
      update: {
        email: email,
        name: fullName,
      },
      create: {
        clerkId: userId,
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
