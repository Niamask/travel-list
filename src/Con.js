import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function Con(params) {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo(params) {
  return (
    <div className="logo">
      <h1> 🏝️ Fat Ayaw 🧳</h1>
    </div>
  );
}

// const [isPacke, setIsPacked] = useState(true);
// function handelIsPacked(params) {
//   setIsPacked(!isPacke);
// }

function Form(params) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form " onSubmit={handelSubmit}>
      <h3>What you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList(params) {
  return (
    <>
      <div className="list">
        <ul>
          {initialItems.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <form className="list ">
        <div>
          <select name="Order">
            <option value="US">Sort by input order</option>
            <option value="CA">Canada</option>
            <option value="MX">Mexico</option>
          </select>
          <button>Clear list</button>
        </div>
      </form>
    </>
  );
}

function Item({ item }) {
  return (
    <>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
    </>
  );
}

function Stats(params) {
  return (
    <footer className="stats">
      <em> 🧳 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
