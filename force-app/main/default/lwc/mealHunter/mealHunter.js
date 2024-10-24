import { LightningElement } from 'lwc';
import fetchmeal from '@salesforce/apex/MealSerivces.fetchmeal'

export default class MealHunter extends LightningElement {

    searchresult;
    async mealsearchhandler(event) {
        let searchmeal = event.detail;
        console.log('SearchMeal : ', searchmeal);

        try {
           let  result=await fetchmeal({meal : searchmeal });
           let  data=JSON.parse(result);
           console.log('data : ',data);
           console.log('data :==> ',data.meals);
           if (data.length > 0) {
                this.searchresult=data.meals;
           }else{
            console.log('no meals');
           }

            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

}