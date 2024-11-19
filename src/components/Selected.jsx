/* eslint-disable react/prop-types */
const Selected = ({ handleIsActiveState, selectedPlayers, handleDelete }) => {
  return (
    <div className=" w-11/12 mx-auto">
      <h1 className="text-2xl font-bold pb-9">
        Selected Player (<span>{selectedPlayers.length}</span>/6)
      </h1>

      {selectedPlayers.map((player) => (
        <div
          key={player.player_id}
          className=" mb-5 flex justify-between  border-2 items-center p-4 rounded-2xl"
        >
          <div className="flex gap-5">
            <div className="w-24 h-24">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src={player.image}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-2xl">{player.name}</p>
              <p>{player.role}</p>
              <p>{player.bidding_price}</p>
            </div>
          </div>
          <div>
            <button onClick={() => handleDelete(player.player_id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
      <div className="md:pb-52 pb-80 pt-6">
        <button
          onClick={() => handleIsActiveState("available")}
          className="btn bg-[#E7FE29]"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default Selected;
