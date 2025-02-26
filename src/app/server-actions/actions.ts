"use server";

import { usersDB } from "@/app/databases/usersDatabase";
import { NextResponse } from "next/server";

export const getUsersAction = async () => {
  try {
    const users = await usersDB.getData("/users");
    const usersArray = Object.values(users);
    return usersArray;
  } catch (error: any) {
    return new NextResponse("Error al buscar usuarios: " + error.message, {
      status: 500,
    });
  }
};

export const getUserAction = async (username: string) => {
  try {
    const user = await usersDB.getData(`/users/${username}`);
    return user;
  } catch (error: any) {
    return new NextResponse("Error al buscar usuario: " + error.message, {
      status: 500,
    });
  }
};
