/* eslint-disable react/prop-types */
import "./CartContainer.css";
const CartContainer = ({ handleIsActiveState, isActive, selectedPlayers }) => {
  return (
    <div className="z-40 sticky right-0  lg:-top-4 top-[76px]">
      <div className="w-11/12 mx-auto flex justify-end lg:pt-28 pt-5 pb-12 ">
        <div
          onClick={() => handleIsActiveState("available")}
          className={`${
            isActive.cart
              ? "button border rounded-l-lg active font-bold"
              : "button border rounded-l-lg bg-base-100 "
          }`}
        >
          Available
        </div>
        <div
          onClick={() => handleIsActiveState("selected")}
          className={`${
            isActive.cart
              ? "button border rounded-r-lg bg-base-100 "
              : "button border rounded-r-lg active font-bold"
          }`}
        >
          Selected(<span>{selectedPlayers.length}</span>)
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
