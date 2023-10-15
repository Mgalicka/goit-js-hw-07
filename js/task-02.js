const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients"); // Wybierz element ul#ingredients

ingredients.forEach((ingredient) => {
  const li = document.createElement("li"); // Utwórz element <li>
  li.textContent = ingredient; // Dodaj tekst z tablicy jako zawartość tekstową
  li.classList.add("item"); // Dodaj klasę "item" do elementu <li>
  ul.appendChild(li); // Dodaj element <li> do listy <ul>
});