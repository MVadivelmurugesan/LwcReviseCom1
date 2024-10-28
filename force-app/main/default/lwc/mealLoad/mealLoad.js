import { LightningElement, api } from 'lwc';

export default class MealLoad extends LightningElement {
    @api mealresult = [];

    get checkmeal() {
        return this.mealresult.length > 0;
    }

    recipehandler(event) {
        const mealId = event.target.dataset.id;
        console.log('Meal ID:', mealId);
        const selectedMeal = this.mealresult.find(meal => meal.idMeal === mealId);
        console.log('Selected Meal:', selectedMeal);
    }
}
