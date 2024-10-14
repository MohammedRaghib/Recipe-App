const recipes = [
    {
        title: 'Delicious Cake',
        ingredients: `2 cups all-purpose flour <br>
1 ½ cups sugar <br>
½ cup unsalted butter <br>
1 cup milk <br>
3 ½ tsp baking powder <br>
1 tsp vanilla extract <br>
½ tsp salt <br>
3 large eggs`,
        instructions: `1. Preheat your oven to 350°F (175°C). <br>
2. In a bowl, cream together the butter and sugar until light and fluffy.<br>
3. Add the eggs one at a time, beating well after each addition. <br>
4. Stir in the vanilla extract. <br>
5. In another bowl, combine the flour, baking powder, and salt.<br>
6. Gradually add the dry ingredients to the wet mixture, alternating with milk.<br>
7. Pour the batter into a greased cake pan.<br>
8. Bake for 30-35 minutes or until a toothpick comes out clean.<br>
9. Let it cool before serving.`
    }
];

const save_btn = document.querySelector('.save-button');
const p_main = document.querySelector('.p_main');

function save() {
    recipes.forEach((recipe) => {
        let span = document.createElement('span');
        span.innerHTML = `
        <div class='cake_p_recipe'>
            <h2 class='title'>
                ${recipe.title}
            </h2>
            <br>
            <br>
            <div class='ingredients'>
                ${recipe.ingredients}
            </div>
            <br>
            <br>
            <div class='instructions'>
                ${recipe.instructions}
            </div>
        </div>`
        p_main.innerHTML = '';
        p_main.appendChild(span);
    })
}