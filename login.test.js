const { login } = require("./login");

test("Đăng nhập đúng", () => {
    expect(login("admin", "123")).toBe(true);
});
