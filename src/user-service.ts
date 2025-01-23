import axios from "axios";
import { DatabaseService, User } from "./database-service";

export async function getUserById(
  id: number
): Promise<{ id: number; name: string }> {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return {
      id: data.id,
      name: data.name,
    };
  } catch (error) {
    throw new Error("Error of getting user");
  }
}

export class UserService {
  private dbService: DatabaseService;

  constructor(dbService: DatabaseService) {
    this.dbService = dbService;
  }

  getUserById(id: number): User | undefined {
    return this.dbService.getUserById(id);
  }
}
