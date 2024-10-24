import { LightningElement ,api} from 'lwc';

export default class MealLoad extends LightningElement {
    @api mealresult =[];

    get checkmeal(){
        return this.mealresult.length > 0;
    }
}