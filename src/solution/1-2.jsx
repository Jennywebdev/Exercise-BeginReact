const Header = () => (
  <header>
    <h1>Mes recettes de cuisine !</h1>
    <p>Par BeginReact.dev</p>
  </header>
);

const Recipe = ({ tag, recipe }) => (
  <li>
    <span className="tags">{tag}</span> {recipe}
  </li>
);

const RECIPES = [
  {
    tag: 'vegan',
    recipe: 'Salade de carottes aux fruits rouges',
  },
  {
    tag: 'dessert',
    recipe: 'Gateau aux poireaux',
  },
  {
    tag: 'heathy',
    recipe: 'Poulet et œuf',
  },
];

const Recipes = () => (
  <div>
    <h2>Liste de recettes à faire</h2>
    <ul className="list">
      {RECIPES.map((recipe, index) => (
        <Recipe key={index} tags={recipe.tags} recipe={recipe.recipe} />
      ))}
    </ul>
  </div>
);

const ShoppingItem = ({ quantity, item }) => (
  <li>
    <input type="checkbox" />
    <span className="unit">{quantity}</span> {item}
  </li>
);

const SHOPPING_ITEMS = [
  {
    quantity: '4',
    item: 'carottes',
  },
  {
    quantity: '1',
    item: 'fruits rouges',
  },
  {
    quantity: '2',
    item: 'poireaux',
  },
  {
    quantity: '1kg',
    item: 'poulet',
  },
  {
    quantity: '6',
    item: 'œufs',
  },
];

const ShoppingList = () => (
  <div>
    <h2>Liste de course</h2>
    <ul className="list">
      {SHOPPING_ITEMS.map((item, index) => (
        <ShoppingItem key={index} unit={item.unit} item={item.item} />
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer>
    <p>Create by BeginReact.dev</p>
  </footer>
);

const App = () => {
  return (
    <div className="container">
      <Header />
      <hr />
      <Recipes />
      <hr />
      <ShoppingList />
      <hr />
      <Footer />
    </div>
  );
};

export default App;
