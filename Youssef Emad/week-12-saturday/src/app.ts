// User Class
class User{
    // Attributes
    public email: string;
    protected token: string; // optional string undefined
    // Constructor
    constructor(email: string, token: string)
    {
        this.email = email;
        this.token = token;
    }
    // Method to use Email
    public getEmail(): string{
        return this.email;
    }
}
// Base Class
class BaseService {
    protected baseUrl: string;
    protected registeredUsers: { email: string; password: string; token: string }[] = [];
    constructor(baseUrl: string)
    {
        this.baseUrl = baseUrl;
        this.registeredUsers.push({ email: "test@test.com", password: "123456", token: "token-1" });
    }
    protected saveToken(t: string|undefined)
    {
        if(t) { localStorage.setItem("auth_token",t); }
    }
}
class AuthService extends BaseService
{
    // كلاس وارث له كونستركتور وبيستخدم الكونسترتور بتاع الكلاس السوبر
    constructor(baseUrl: string)
    {
        super(baseUrl);
    }
    public async login(email: string, password: string): Promise<User>
    {
        await new Promise(r=>setTimeout(r, 1000));
        if(email === "test@test.com" && password === "123456")
        {
            const token = "token-1";
            this.saveToken(token);
            return new User(email, token);
        }
        throw new Error("email or password is wrong")
    }
    //registration
    public async register(email: string, password: string): Promise<User> {
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
const form = document.getElementById('loginForm') as HTMLFormElement;
const email = document.getElementById('email') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const status = document.getElementById('status') as HTMLElement;
// Add registration form
const registerStatus = document.getElementById('registerStatus') as HTMLElement;
const regForm = document.getElementById('registerForm') as HTMLFormElement;
const regEmail = document.getElementById('regEmail') as HTMLInputElement;
const regPassword = document.getElementById('regPassword') as HTMLInputElement;
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        status.textContent = "loading...";
        try {
            const user = await auth.login(email.value.trim(), password.value);
            status.textContent = `✅ Welcome back, ${user.getEmail()}`;
        } catch (err) {
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
        } catch (err) {
            registerStatus.textContent = (err instanceof Error) ? err.message : "something went wrong";
        }
    });
}
const showRegister = document.getElementById('showRegister') as HTMLElement;
const showLogin = document.getElementById('showLogin') as HTMLElement;

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
