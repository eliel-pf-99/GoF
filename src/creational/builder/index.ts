import { MealBox } from './classes/meal-box';
import { Beans, Meat, Rice } from './classes/meals';

const rice = new Rice('Arroz', 28);
const beans = new Beans('Feijão', 12);
const meat = new Meat('Carne', 55);
const mealBox = new MealBox();
mealBox.add(rice, beans, meat);
console.log(mealBox);
console.log(mealBox.getPrice());
