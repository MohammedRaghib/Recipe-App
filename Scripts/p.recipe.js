const recipes = [
    {
        title: 'Delicious Cake',
        ingredients: `2 cups all-purpose flour \n
1 ½ cups sugar \n
½ cup unsalted butter \n
1 cup milk \n
3 ½ tsp baking powder \n
1 tsp vanilla extract \n
½ tsp salt \n
3 large eggs`,
        instructions: `1. Preheat your oven to 350°F (175°C).\n
2. In a bowl, cream together the butter and sugar until light and fluffy.\n
3. Add the eggs one at a time, beating well after each addition.\n
4. Stir in the vanilla extract.\n
5. In another bowl, combine the flour, baking powder, and salt.\n
6. Gradually add the dry ingredients to the wet mixture, alternating with milk.\n
7. Pour the batter into a greased cake pan.\n
8. Bake for 30-35 minutes or until a toothpick comes out clean.\n
9. Let it cool before serving.`
    }
];

const save = document.querySelector('.save-button');
const p_main = document.querySelector('.p_main');

save.addEventListener('click', save());

function save(){
    recipes.forEach((recipe) =>{
        let span = document.createElement('span');
        span.innerHTML = `${recipe.title} \n ${recipe.ingredients} \n ${recipe.instructions}`
        p_main.innerHTML = '';
        p_main.appendChild(span);
    })
}