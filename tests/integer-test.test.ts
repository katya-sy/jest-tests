import { DatabaseService, User } from "../src/database-service";
import { UserService } from "../src/user-service";

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

  test("Should add and return users", () => {
    const user1: User = { id: 1, name: "John Doe" };
    const user2: User = { id: 2, name: "John Blue" };

    dbService.addUser(user1);
    dbService.addUser(user2);

    const addedUser1 = userService.getUserById(1);
    const addedUser2 = userService.getUserById(2);

    expect(addedUser1).toEqual(user1);
    expect(addedUser2).toEqual(user2);
  });
});
