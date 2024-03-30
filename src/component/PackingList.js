import Items from "./Items";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function PackingList(params) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Items item={item} key={item.id} />
        ))}
      </ul>

      <div>
        <form id="packingListForm">
          <select name="category" id="category">
            <option value="">Item...</option>
            <option value="Tech">SORT BY INPUT ORDER</option>
            <option value="Art">SORT BY DESCRIPTION</option>
            <option value="Sports">SORT BY PACKED STATUS</option>
          </select>
          <input type="submit" id="formBtn" value="CLEAR LIST" />
        </form>
      </div>
    </div>
  );
}

export default PackingList;
