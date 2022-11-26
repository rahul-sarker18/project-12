import { format } from 'date-fns';
import React, { useContext } from 'react';
import { Authcontext } from '../../../Context/Usercontext';

const AddaProducts = () => {
  const {user} =useContext(Authcontext)
const dat = new Date()
const date = format(dat , 'PP')



const handelsubmite = (event) => {
  event.preventDefault();
  const form = event.target;
  const productname =form.productname.value;
  const catocory =form.catocory.value;
  const price =form.price.value;
  const originalprice =form.originalprice.value;
  const yearsof =form.yearsof.value;
  const location =form.location.value;
  const img =form.img.value;
 let cotogory;
 if(catocory === 'iphone'){
  cotogory = '111'
 }
 if(catocory === 'oppo'){
  cotogory = '222'
 }
 if(catocory === 'sumsung'){
  cotogory = '333'
 }
console.log('cotogory' , cotogory);

  const ued ={
    productname,catocory,price,originalprice,yearsof,location,date, id:cotogory, emali:user?.email
  }
  console.log(ued);
};

return (
  <div className="w-full max-w-md p-8 mx-auto my-5 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
    <h1 className="text-2xl font-bold text-center">Login</h1>
    <form
      onSubmit={handelsubmite}
      className="space-y-6 ng-untouched ng-pristine ng-valid"
    >
      <div className="space-y-1 text-sm">
        <label for="productname" className="block dark:text-gray-400">
          product name
        </label>
        <input
          type="text"
          name="productname"
          id="productname"
          placeholder="productname"
          className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
        />
      </div>
      
{/* 22222 */}
      <div className="space-y-1 text-sm">
        <label for="catocory" className="block dark:text-gray-400">
          catocory
        </label>
        <select
          name="catocory"
          className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
        >
          <option>iphone</option>
          <option>oppo</option>
          <option>sumsung</option>
        </select>
      </div>
	  {/* 333 */}
	  <div className='flex gap-4'>
	  <div className="space-y-1 text-sm">
        <label for="price" className="block dark:text-gray-400">
          Price
        </label>
        <input
         required
          type="text"
          name="price"
          id="price"
          placeholder="price"
          className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
        />
      </div>
	  {/* 44 */}
	  <div className="space-y-1 text-sm">
        <label for="originalprice" className="block dark:text-gray-400">
        Original price
        </label>
        <input
         required
          type="text"
          name="originalprice"
          id="originalprice"
          placeholder="originalprice"
          className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
        />
      </div>
	  </div>
	  {/* 5555 */}
	  <div className='flex gap-4'>
    <div className="space-y-1 text-sm">
        <label for="yearsof" className="block dark:text-gray-400">
        Years of usd
        </label>
        <input
         required
          type="text"
          name="yearsof"
          id="yearsof"
          placeholder="yearsof"
          className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
        />
      </div>
	  <div className="space-y-1 text-sm">
        <label for="location" className="block dark:text-gray-400">
        Location
        </label>
        <input
        required
          type="text"
          name="location"
          id="location"
          placeholder="location"
          className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
        />
      </div>
	  {/* 66 */}
	  
	  </div>
	  {/* 77777 */}


    <div className="space-y-1 text-sm">
          <label for="img" className="block dark:text-gray-400">
           Image
          </label>
          <input
          required
            type="file"
            name="img"
            id="img"
            placeholder="img"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        
        </div>
	  
	  










      <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
        Sign in
      </button>
    </form>
  </div>
);
};

export default AddaProducts;