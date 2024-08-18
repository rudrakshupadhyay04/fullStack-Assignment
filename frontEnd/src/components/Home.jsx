import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <div className='bg-purple-100 h-72 flex flex-col justify-center items-center gap-4'>
        <h1 className=' text-4xl font-bold'>How can we help??</h1>
        <div className='flex items-center justify-between border shadow-2xl rounded-md  border-black w-96 gap-2 bg-white py-2 px-2'>
          <input type="text" placeholder='search' className='outline-none w-80 '/>
          <button>
            <FiArrowRight className="hover:transform hover:translate-x-1 size-6"/>
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center py-32 justify-around pl-96 pr-96 gap-x-1 gap-y-16 overflow-hidden ">
        <div className="border rounded-lg w-72 bg-slate-100 h-44">
          <div className="p-2 font-bold"><h2>Branches</h2></div>
          <hr />
          <div className="p-2">Abstract Branches lets you manage, version, and document your design in one place.</div>
        </div>
        <div className="border rounded-lg w-72 bg-slate-100 h-44">
          <div className="p-2 font-bold"><h3>Manage your account</h3></div>
          <hr />
          <div className="p-2">Configure your account settings, such as your email, profile details, and password.</div>
        </div>
        <div className="border rounded-lg w-72 bg-slate-100 h-44">
          <div className="p-2 font-bold"><h3>Manage organizations, teams, and projects</h3></div>
          <hr />
          <div className="p-2">Use Abstract organizations, teams, and projects to organize your people and your work.</div>
        </div>
        <div className="border rounded-lg w-72 bg-slate-100 h-44">
          <div className="p-2 font-bold"><h3>Manage billing</h3></div>
          <hr />
          <div className="p-2">Change subscription and payment details.</div>
        </div>
        <div className="border rounded-lg w-72 bg-slate-100 h-36">
          <div className="p-2 font-bold"><h3>Authanticate to Abstract</h3></div>
          <hr />
          <div className="p-2">Set up and configure SSO, SCIM, and just-in-Time provisioning</div>
        </div>
        <div className="border rounded-lg w-72 bg-slate-100 h-36">
          <div className="p-2 font-bold"><h3>Abstract support</h3></div>
          <hr />
          <div className="p-2">Get in touch with a human.</div>
        </div>
      </div>
    </div>
  )
}
