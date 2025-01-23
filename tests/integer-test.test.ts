import { DatabaseService, User } from "../src/database-service";
import { UserService } from "../src/user-service";

jest.mock("../src/database-service");

describe("Database service with user service", () => {
  let dbService: DatabaseService;
  let userService: UserService;

  beforeEach(() => {
    dbService = new DatabaseService();
    userService = new UserService(dbService);
  });

  test("Should return undefined when user does not exist", () => {
    const user = userService.getUserById(1);
    expect(user).toBeUndefined();
  });

  // test("Should return user", () => {
  //   const user: User = { id: 1, name: "John Doe" };
  //   dbService.addUser(user);

  //   const addedUser = userService.getUserById(1);
  //   expect(addedUser).toEqual(user);
  // });
});
