import { NextRequest, NextResponse } from "next/server";
import { Config, JsonDB } from "node-json-db";

export const usersDB = new JsonDB(
  new Config("public/mock-data/users.json", true, false, "/")
);

export const GET = async (
  req: NextRequest,
  props: { params: Promise<{ username: string }> }
) => {
  try {
    const params = await props.params;
    const user = await usersDB.getData(`/users/${params.username}`);
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error al buscar usuario: " + error.message, {
      status: 500,
    });
  }
};
