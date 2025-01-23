import { describe, test, expect } from "@jest/globals";
import { getUserById } from "./../src/user-service";
import axios from "axios";

jest.mock("axios");

describe("User service", () => {
  test("fetches data correctly", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: { id: "1", name: "Leanne Graham" },
    });

    const data = await getUserById(1);
    expect(data).toEqual({ id: "1", name: "Leanne Graham" });
  });

  test("throws an error if the user is not found", async () => {
    (axios.get as jest.Mock).mockRejectedValue("Error of getting user");

    await expect(getUserById(99)).rejects.toThrow("Error of getting user");
  });
});
