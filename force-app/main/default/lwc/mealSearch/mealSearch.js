import { LightningElement } from 'lwc';
import mealDb from '@salesforce/resourceUrl/MealDb';

export default class MealSearch extends LightningElement {
    Serarchtext;
    handlesearchitem(event){
        this.Serarchtext=event.target.value;
        console.log('OUTPUT search : ',this.Serarchtext);
    }
    clickhandler(){
        let custevet=new CustomEvent('searchmeal',{detail : this.Serarchtext});
        this.dispatchEvent(custevet);
        console.log('dispatch',custevet);
    }
}