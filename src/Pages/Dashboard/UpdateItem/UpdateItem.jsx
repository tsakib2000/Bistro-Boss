
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
    const {_id,name,category,recipe,price}=useLoaderData();

    const {register,handleSubmit}=useForm();
    const axiosSecure=useAxiosSecure();
    const axiosPublic=useAxiosPublic();
const onSubmit = async (data) => {
        const imageFile ={image:data.image[0]}
const res = await axiosPublic.post(image_hosting_api,imageFile,{
    headers:{
        'Content-Type':'multipart/form-data'
    }
});
if(res.data.success){
    const menuItem ={
        name:data.name,
        category:data.category,
        price:parseFloat(data.price),
        recipe:data.recipe,
        image:res.data.data.display_url
    }
 const menuData= await axiosSecure.patch(`/menu/${_id}`,menuItem)
 console.log(menuData.data);
if(menuData.data.modifiedCount >0){
    Swal.fire('Menu Updated Successfully')
}
}
      
    }
    return (
        <div>
            <SectionTitle heading='update Item' subHeading="refresh info"/>

            
      <div className="flex justify-center items-center ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
          {/* Recipe Name */}
          <div className="form-control mb-4">
            <label className="label font-semibold text-gray-700">
              Recipe Name*
            </label>
            <input
            defaultValue={name}
            {...register('name',{required:true})}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </div>
          {/* Category and Price */}
          <div className="flex gap-4 mb-4">
            {/* Category */}
            <div className="form-control flex-1">
              <label className="label font-semibold text-gray-700">
                Category*
              </label>
              <select  defaultValue={category} {...register('category',{required:true})} className="select select-bordered w-full">
                <option value='default' >
                  Category
                </option>
                <option value='salad'>Salad</option>
                <option value='pizza'>Pizza</option>
                <option value='soup'>Soup</option>
                <option value='dessert'>Dessert</option>
                <option value='drinks'>Drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control flex-1">
              <label className="label font-semibold text-gray-700">
                Price*
              </label>
              <input
              defaultValue={price}
                 {...register('price',{required:true})}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control mb-4">
            <label className="label font-semibold text-gray-700">
              Recipe Details*
            </label>
            <textarea
            defaultValue={recipe}
               {...register('recipe',{required:true})}
              placeholder="Recipe Details"
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="form-control mb-4">
            <label className="label font-semibold text-gray-700">
              Upload Image
            </label>
            <input
               {...register('image')}
              type="file"
              className="file-input  file-input-bordered w-full"
            />
          </div>

          {/* Add Item Button */}
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center justify-center gap-2 text-white">
              Add Item <span>🍴</span>
            </button>
          </div>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;