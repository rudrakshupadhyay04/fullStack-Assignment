import { useState } from "react"
import axios from 'axios';
import { CARD_API_END_POINT } from "../utils/constant.js";
import toast, { Toaster } from 'react-hot-toast';


export default function CreateCard() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(title,description);
        try {
            const res = await axios.post(`${CARD_API_END_POINT}/cards`, {title,description});
            console.log(res);
            setTitle("");
            setDescription("");
            toast("Card created successfully!!!")
            
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div className="flex items-center justify-center">
        <div>
            <form className='flex flex-col w-80  my-20 ' onSubmit={handleSubmit}>
                <input type='text' placeholder='Title' value={title} onChange={(e) => {setTitle(e.target.value)}} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold'/>
                <input type='text' placeholder='Description' value={description} onChange={(e) => {setDescription(e.target.value)}} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold'/>
                <button className='bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white'>Submit</button>
                <Toaster/>
            </form>
        </div>    
    </div>
  )
}
