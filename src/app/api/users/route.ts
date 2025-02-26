import { usersDB } from "@/app/databases/usersDatabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await usersDB.getData("/users");
    const usersArray = Object.values(users);
    return new NextResponse(JSON.stringify(usersArray), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error al buscar usuarios: " + error.message, {
      status: 500,
    });
  }
};
