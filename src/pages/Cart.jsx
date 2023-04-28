import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => Math.floor(acc + curr.price),0) );
  }, [cart])

  const checkOutHandler = () => {
    window.location.reload();
  }

  return (
    <div className="mt-10 mb-10">
  {
    cart.length > 0  ? 
    (<div className="flex gap-20 sm:gap-40 sm:flex-row flex-col">

      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="summary">

        <div>
          <div className="mb-10 font-semibold text-gray-950 text-3xl">Your Cart</div>
          <div className="text-yellow-700 text-3xl font-semibold mb-3">Summary</div>
          <p>
            <span className="text-gray-800 text-xl font-semibold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="text-gray-800 text-xl font-semibold">Total Amount: ${totalAmount}</p>
          <button className="bg-green-800 py-4 px-8 text-white font-bold text-2xl mt-10 rounded-md"
          onClick={checkOutHandler}>
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex justify-center items-center min-h-[80vh] flex-col gap-5">
      <h1 className="text-gray-900 font-bold text-2xl">CART EMPTY</h1>
      <Link to={"/"}>
        <button className="bg-green-500 py-3 px-5 rounded-md text-white font-semibold">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
