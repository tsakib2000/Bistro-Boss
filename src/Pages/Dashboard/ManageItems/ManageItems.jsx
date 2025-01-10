import { MdDeleteSweep } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "./../../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure
          .delete(`/menu/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div>
      <SectionTitle heading="Manage All Items" subHeading="Hurry up" />
      <div className="overflow-x-auto mt-5 rounded-t-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td className="font-bold">{index + 1}</td>
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
                <td>{item.name}</td>
                <td className="font-bold">${item.price}</td>
                <td className="font-bold">
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn bg-[#D1A054]">
                      <FaEdit className="text-white text-xl" />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(item);
                    }}
                    className="btn bg-red-600 text-2xl"
                  >
                    <MdDeleteSweep className="text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
