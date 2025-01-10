import { MdDeleteSweep } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Total Orders:{cart.length}</h1>
        <h1 className="text-3xl font-bold">Total Price:${totalPrice}</h1>
   {cart.length > 0?     <Link to='/dashboard/payment' >
          <button className="btn bg-[#d1a054]">Pay</button>
        </Link>:<button disabled className="btn bg-[#d1a054]">Pay</button>}
      </div>

      <div className="overflow-x-auto mt-5 rounded-t-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th> ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <td className="font-bold">{idx + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td className="font-bold">$ {item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost text-2xl"
                  >
                    <MdDeleteSweep className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
