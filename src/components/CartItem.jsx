
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="max-w-2xl mb-6 pb-5 border-b-2 border-blue-950 mx-3">

      <div className="flex gap-3 justify-evenly items-center">

        <div>
          <img src={item.image} width={140}/>
        </div>
        <div className="w-[60%]">
          <h1 className="mb-2">{item.title}</h1>
          <h1>{item.description.length > 70 ? `${item.description.substring(0,100)}...` : item.description}</h1>
          <div className="flex justify-between items-center mt-4">
            <p className="text-green-500 font-bold">${item.price}</p>
            <div className="bg-red-500 p-3 rounded-full"
            onClick={removeFromCart}>
              <FcDeleteDatabase className="text-xl cursor-pointer"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
