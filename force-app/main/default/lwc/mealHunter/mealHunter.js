import { LightningElement, track } from 'lwc';
import fetchmeal from '@salesforce/apex/MealServices.fetchmeal';

export default class MealHunter extends LightningElement {
    @track searchresult = [];

    async mealsearchhandler(event) {
        let searchmeal = event.detail;
        console.log('SearchMeal:', searchmeal);

        try {
            let result = await fetchmeal({ meal: searchmeal });
            let data = JSON.parse(result);
            console.log('data:', data);

            if (data && data.meals) {
                this.searchresult = data.meals;
                console.log('Search Result:', this.searchresult);
            } else {
                console.log('No meals found.');
                this.searchresult = [];
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}
