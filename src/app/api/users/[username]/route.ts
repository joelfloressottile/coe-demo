import { NextRequest, NextResponse } from "next/server";
import { usersDB } from "@/app/databases/usersDatabase";

export const GET = async (
  req: NextRequest,
  props: { params: Promise<{ username: string }> }
) => {
  try {
    const params = await props.params;
    const user = await usersDB.getData(`/users/${params.username}`);
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error: unknown) {
    return new NextResponse(
      "Error al buscar usuario: " + (error as Error).message,
      {
        status: 500,
      }
    );
  }
};
