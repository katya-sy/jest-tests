import axios from "axios";

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
