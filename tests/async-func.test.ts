import { fetchData, delay } from "../src/async-func";

describe("async-func test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("fetchData", () => {
    it("should fetch data", async () => {
      const mockResponse = "mock data";
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        text: jest.fn().mockResolvedValue(mockResponse),
      });

      const data = await fetchData("https://jsonplaceholder.typicode.com");
      expect(data).toBe(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com"
      );
    });

    it("should return error when response is not ok", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
      });

      await expect(
        fetchData("https://jsonplaceholder.typicode.com")
      ).rejects.toThrow("Network response was not ok");
      expect(global.fetch).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com"
      );
    });
  });

  describe("delay", () => {
    it("should delay for specified time", async () => {
      jest.useFakeTimers();
      const setTimeoutSpy = jest.spyOn(global, "setTimeout");
      const delayPromise = delay(1000);

      jest.advanceTimersByTime(1000);
      await delayPromise;

      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 1000);
    });
  });
});
