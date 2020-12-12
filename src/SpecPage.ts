import { By, until, WebDriver } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";

export class SpecPage{
     driver: WebDriver;
     url: string="https://www.google.com/";
     search: By = By.className("gLFyf gsfi");
     content: By = By.id("rso");

     constructor(driver: WebDriver){
        this.driver = driver;
     }

     async navigate(){
        await this.driver.get(this.url);
     }

     async doSearch(s: string){
        await this.driver.wait(until.elementLocated(this.search));
        await this.driver.findElement(this.search).sendKeys(`${s}\n`);

     };

     async getResults(){
         await this.driver.wait(until.elementsLocated(this.content));
         return await (await this.driver.findElement(this.content)).getText();

     }
}