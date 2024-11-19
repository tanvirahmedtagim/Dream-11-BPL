/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Available = ({ handleSelectedPlayers }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("./players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto pb-[378px]">
      <h1 className="text-2xl font-bold pb-9">Available Players</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 ">
        {players.map((player) => (
          <div key={player.player_id} className="card bg-base-100 p-5 border-2">
            <figure>
              <img
                src={player.image}
                alt="Shoes"
                className="rounded-xl w-full h-64 object-cover"
              />
            </figure>
            <div className="flex flex-col py-6 gap-6">
              <div className="flex justify-start items-center gap-3">
                <div>
                  <i className="fa-solid fa-user fa-xl"></i>
                </div>
                <h1 className="text-xl font-semibold">{player.name}</h1>
              </div>
              <div className="flex justify-between items-baseline">
                <div className="flex items-baseline gap-3 text-gray-400">
                  <i className="fa-solid fa-flag fa-xl"></i>
                  <p>{player.country}</p>
                </div>
                <div className="border p-3 rounded-lg bg-gray-200">
                  <button>{player.role}</button>
                </div>
              </div>
              <hr />
              <div>
                <h1 className="font-bold">Rating</h1>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">{player.batting_type}</p>
                <p className="text-gray-600">{player.bowling_type}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Price: ${player.bidding_price}</p>
                <div className="card-actions">
                  <button
                    onClick={() => handleSelectedPlayers(player)}
                    className="btn hover:bg-[#E7FE29]"
                  >
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Available;
