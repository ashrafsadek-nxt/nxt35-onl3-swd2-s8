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
    constructor(baseUrl: string)
    {
        this.baseUrl = baseUrl;
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
}
 
// Get All HTML Elements
const auth = new AuthService("https://example.com");
const form = document.getElementById('loginForm') as HTMLFormElement;
const email = document.getElementById('email') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const status = document.getElementById('status') as HTMLElement;
 
//
if(form)
{
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if(!email || !password || !status)
            status.textContent = "loading...";
        try{
            const user = await auth.login(email?.value.trim(),password.value);
            status.textContent = `hello ${user.getEmail()}`;
        }
        catch (err){
            status.textContent = (err instanceof Error) ? err.message : "something error";
        }
    })
}
 
