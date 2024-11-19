import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import CartContainer from "./components/CartContainer/CartContainer";
import Navbar from "./components/Navbar";
import Available from "./components/Available";
import Selected from "./components/Selected";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleDelete = (id) => {
    handleIncreasePrice(id);
    const deletePlayer = selectedPlayers.filter((p) => p.player_id != id);
    setSelectedPlayers(deletePlayer);
  };

  const handleSelectedPlayers = (player) => {
    const isExist = selectedPlayers.find(
      (p) => p.player_id === player.player_id
    );
    if (isExist) {
      toast.error("player already selected");
    } else {
      if (selectedPlayers.length >= 6) {
        toast.error("Maximum player added");
      } else {
        handleDecreasePrice(player);
      }
    }
  };

  const [price, setPrice] = useState(0);
  const handleClaimFreeCredit = (pr) => {
    toast.success("Credit Added To Your Account");
    setPrice((pr += price));
  };
  const handleDecreasePrice = (player) => {
    if (price > player.bidding_price) {
      setPrice(price - player.bidding_price);
      const addedPlayer = [...selectedPlayers, player];
      setSelectedPlayers(addedPlayer);
      toast.success(`Congrates!! ${player.name} is now in your squad`);
    } else {
      toast.error("Not Enough Money To Buy This Player Claim Some Credit");
    }
  };
  const handleIncreasePrice = (id) => {
    const player = selectedPlayers.find((p) => p.player_id == id);
    toast.warning(`${player.name} remove from your squad`);
    setPrice(price + player.bidding_price);
  };

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "available",
  });
  const handleIsActiveState = (status) => {
    if (status == "available") {
      setIsActive({
        cart: true,
        status: "available",
      });
    } else {
      setIsActive({
        cart: false,
        status: "selected",
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
        containerStyle={{
          zIndex: 9999,
        }}
      />
      <Navbar price={price}></Navbar>

      <Banner handleClaimFreeCredit={handleClaimFreeCredit}></Banner>
      <CartContainer
        selectedPlayers={selectedPlayers}
        isActive={isActive}
        handleIsActiveState={handleIsActiveState}
      ></CartContainer>
      {isActive.cart ? (
        <Available handleSelectedPlayers={handleSelectedPlayers}></Available>
      ) : (
        <>
          <Selected
            handleIsActiveState={handleIsActiveState}
            selectedPlayers={selectedPlayers}
            handleDelete={handleDelete}
          ></Selected>
        </>
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
