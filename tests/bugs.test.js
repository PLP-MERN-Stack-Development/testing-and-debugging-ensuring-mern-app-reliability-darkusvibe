import request from "supertest";
import app from "../server.js";

describe("Bugs API", () => {
  it("should return an empty list", async () => {
    const res = await request(app).get("/bugs");
    expect(res.body).toEqual([]);
  });

  it("should create a bug", async () => {
    const bug = { title: "Crash", status: "open" };
    const res = await request(app).post("/bugs").send(bug);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(bug);
  });
});
