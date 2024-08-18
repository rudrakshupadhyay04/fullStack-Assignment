import { LuArrowUpRightFromCircle } from "react-icons/lu";

export default function Footer() {
  return (
    <div>
      <div className="bg-black w-full h-full rounded-b-xl flex justify-around py-8 text-white">
        <div>
          <div className="font-bold"><h1>Abstract</h1></div>
          <div className="mt-3 flex flex-col text-sm"><a href="#">Branches</a></div>
        </div>
        <div>
          <div className="font-bold"><h1>Resources</h1></div>
          <div className="flex flex-col mt-3 text-sm">
            <a href="#">Blog</a>
            <a href="#">Help Center</a>
            <a href="#">Release Notes</a>
            <a href="#">Status</a>
          </div>
        </div>
        <div>
          <div className="font-bold"><h1>Community</h1></div>
          <div className="flex flex-col mt-3 text-sm">
            <a href="https://x.com">Twitter</a>
            <a href="https://linkedin.com">Linkedin</a>
            <a href="https://facebook.com">Facebook</a>
            <a href="#">Dribbble</a>
            <a href="#">Podcast</a>
          </div>
        </div>
        <div className="">
          <div className="font-bold"><h1>Company</h1></div>
          <div className="flex flex-col mt-3 text-sm">
            <a href="#">About us</a>
            <a href="#">careers</a>
            <a href="#">Legal</a>
          </div>
          <div className="mt-4">
            <div className="font-semibold"><h3>Contact Us</h3></div>
            <div className="flex flex-col text-sm">
            <a href="mailto:info@abstract.com">info@abstract.com</a>
            </div>
          </div>
        </div>
        <div className="ml-16 flex gap-2 flex-col mt-36" >
          <div><LuArrowUpRightFromCircle size={"25px"} color="white"/></div>
          <div>
          <p>
          &#169; Copyright 2022 <br /> Abstract Studio Design, inc. <br /> All right reserved
          </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
