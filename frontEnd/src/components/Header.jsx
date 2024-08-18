import { LuArrowUpRightFromCircle } from "react-icons/lu";

export default function Header() {
  return (
    <div>
      <div className="bg-black w-full mt-1 rounded-t-xl h-16 flex items-center justify-between text-white">
        <div className="ml-16 flex gap-2" >
          <LuArrowUpRightFromCircle size={"25px"} color="white"/>
          <p>Abstract | Help Center</p>
        </div>
        <div className="border px-5 py-2 rounded-md bg-slate-900 mr-32">
          <button>Submit a request</button>
        </div>
      </div>
    </div>
  )
}
