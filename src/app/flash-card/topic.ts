export class Topic {
    public isDisplayed: boolean;
    constructor(public id: number, public name: string, public definition: string, public date: Date){
        this.isDisplayed = false
    }
}
