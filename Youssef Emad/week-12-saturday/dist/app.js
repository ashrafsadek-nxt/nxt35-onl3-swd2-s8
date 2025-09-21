"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    registeredUsers = [];
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.registeredUsers.push({ email: "test@test.com", password: "123456", token: "token-1" });
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
    //registration
    async register(email, password) {
        await new Promise(r => setTimeout(r, 1000)); // simulate delay
        const exists = this.registeredUsers.some(u => u.email === email);
        if (exists) {
            throw new Error("email already registered");
        }
        const token = `token-${Date.now()}`; // unique token
        const newUser = { email, password, token };
        this.registeredUsers.push(newUser);
        this.saveToken(token);
        return new User(email, token);
    }
}
// Get All HTML Elements
const auth = new AuthService("https://example.com");
const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const status = document.getElementById('status');
// Add registration form
const registerStatus = document.getElementById('registerStatus');
const regForm = document.getElementById('registerForm');
const regEmail = document.getElementById('regEmail');
const regPassword = document.getElementById('regPassword');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        status.textContent = "loading...";
        try {
            const user = await auth.login(email.value.trim(), password.value);
            status.textContent = `✅ Welcome back, ${user.getEmail()}`;
        }
        catch (err) {
            status.textContent = (err instanceof Error) ? err.message : "something went wrong";
        }
    });
}
if (regForm) {
    regForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        registerStatus.textContent = "loading...";
        try {
            const user = await auth.register(regEmail.value.trim(), regPassword.value);
            registerStatus.textContent = `🎉 Account created for ${user.getEmail()}`;
        }
        catch (err) {
            registerStatus.textContent = (err instanceof Error) ? err.message : "something went wrong";
        }
    });
}
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
if (showRegister && showLogin) {
    showRegister.addEventListener('click', () => {
        form.classList.add('hidden');
        regForm.classList.remove('hidden');
    });
    showLogin.addEventListener('click', () => {
        regForm.classList.add('hidden');
        form.classList.remove('hidden');
    });
}
//# sourceMappingURL=app.js.map