function Items({ item }) {
  return (
    <div className="items">
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
      {/* <form id="form">
        <input type="checkbox" id="item1" name="item1" value="item1" />
        <label for="vehicle1" id="lable">
          {item.quantity} {item.description}
        </label>
        <input type="submit" id="close" value="&times;" />
      </form> */}
    </div>
  );
}

export default Items;
