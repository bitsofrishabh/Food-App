import { CDN_URL } from "../utils/constants";

const MenuList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border text-left flex justify-between  border-gray-400 border-b-2"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span className="font-bold">{item.card.info.name}</span>
                  <b>{"- Rs."}</b>
                  <span className="font-bold">
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                  <div className="text-s">{item.card.info.description}</div>
                </div>
              </div>
              <div className="w-3/12 p-4 m-2">
                <div>
                  <button className="p-2 bg-white shadow-lg text-xs font-bold absolute m-auto rounded">
                    Add +
                  </button>
                </div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full rounded-md "
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
