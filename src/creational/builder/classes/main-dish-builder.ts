import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice('Arroz', 28);
        const beans = new Beans('Feijão', 12);
        const meat = new Meat('Carne', 55);
        this._meal.add(rice, beans, meat);
        return this;
    }

    makeDessert(): this {
        const desert = new Dessert('Sobremesa', 7);
        this._meal.add(desert);
        return this;
    }

    makeBeverage(): this {
        const beverage = new Beverage('Bebida', 7);
        this._meal.add(beverage);
        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }
}
