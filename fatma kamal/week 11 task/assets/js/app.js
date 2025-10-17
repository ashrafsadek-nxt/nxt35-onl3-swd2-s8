// User Class
class User {
    // Attributes
    email;
    token; // optional string undefined
    // Constructor
    constructor(email, token) {
        this.email = email;
        this.token = token;
    }
    // Method to use Email
    getEmail() {
        return this.email;
    }
}
// Base Class
class BaseService {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    saveToken(t) {
        if (t) {
            localStorage.setItem("auth_token", t);
        }
    }
}
class AuthService extends BaseService {
    // كلاس وارث له كونستركتور وبيستخدم الكونسترتور بتاع الكلاس السوبر
    constructor(baseUrl) {
        super(baseUrl);
    }
    async login(email, password) {
        await new Promise(r => setTimeout(r, 1000));
        if (email === "test@test.com" && password === "123456") {
            const token = "token-1";
            this.saveToken(token);
            return new User(email, token);
        }
        throw new Error("email or password is wrong");
    }
}
// Get All HTML Elements
const auth = new AuthService("https://example.com");
const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const status = document.getElementById('status');
//
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!email || !password || !status)
            status.textContent = "loading...";
        try {
            const user = await auth.login(email?.value.trim(), password.value);
            status.textContent = `hello ${user.getEmail()}`;
        }
        catch (err) {
            status.textContent = (err instanceof Error) ? err.message : "something error";
        }
    });
}
export {};
//# sourceMappingURL=app.js.map