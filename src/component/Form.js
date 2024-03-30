import { useState } from "react";
function Form(params) {
  const [description, setDesciption] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();
    // console.log(e);

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDesciption("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* <option value="">Item...</option> */}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDesciption(e.target.value)}
      />
      {/* <input type="submit" id="formBtn" value="ADD" /> */}
      <button>ADD</button>
    </form>
  );
}

export default Form;
