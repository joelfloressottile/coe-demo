import { Config, JsonDB } from "node-json-db";

export const usersDB = new JsonDB(
  new Config("public/mock-data/users.json", true, false, "/")
);
