export class LoginPage{
    constructor(page){
        //this.userName = page.locator('#loginusername');
        this.page = page;
        this.loginLink = '#login2';
        this.userNameTxt = '#loginusername';
        this.passwordTxt = '#loginpassword';
        this.loginBtn = "//button[normalize-space()='Log in']";
    }
    async gotoLoginPage(){
        console.log("Hi Kowsalya");
        await this.page.goto("https://www.demoblaze.com/");
    
    }
    async loginIntoApplication(username, password){
        console.log("Hi Dhanalakshmi");
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userNameTxt).fill(username);
        await this.page.locator(this.passwordTxt).fill(password);
        await this.page.locator(this.loginBtn).click();
    }
}
