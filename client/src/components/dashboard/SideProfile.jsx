import React from 'react';

function Sidebar() {
  return (
    <aside className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow pt-3 pb-7 w-full text-lg bg-gray-900 rounded-xl border-2 border-solid border-black border-opacity-20 text-zinc-50 max-md:mt-10">
        <div className="flex shrink-0 h-3.5 border-b-8 bg-blend-normal border-red-600 border-opacity-20" />
        <div className="flex flex-col items-center px-11 mt-6 w-full max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd0e2c4ace1e4f0b9d4328caab53c4ccd055a1af18626f7864523aa76e0978e2?apiKey=cb0dbcd120c84cf4a6cf9d039ebac0a2&" alt="User profile" className="object-contain bg-blend-normal aspect-[0.98] rounded-[50px] w-[90px]" />
          <div className="mt-4 text-xl font-medium tracking-normal leading-tight text-center text-white">
            Username
          </div>
          <button className="flex flex-col px-px mt-5 max-w-full text-sm leading-7 bg-zinc-50 rounded-[32px] text-zinc-800 w-[123px]">
            <div className="flex z-10 gap-1 justify-center items-center p-2.5 mt-0 -mb-2">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e8248a257f5ca0525a82336a55892a009493ec80b1620965d2db1a901fe65be?apiKey=cb0dbcd120c84cf4a6cf9d039ebac0a2&" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
              <span className="self-stretch my-auto">Edit Profile</span>
            </div>
          </button>
          <nav className="mt-[493px] max-md:mt-10">
            <ul className="list-none p-0">
              <li className="flex gap-3.5 self-start whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f58cc3c57df98c241453fd6aa2a5fb0395bd6bfa00d298a7541b1e1be526a98d?apiKey=cb0dbcd120c84cf4a6cf9d039ebac0a2&" alt="" className="object-contain shrink-0 self-start aspect-[0.89] w-[17px]" />
                <a href="#settings">Settings</a>
              </li>
              <li className="flex gap-3.5 self-start mt-5 whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2a0610445087f49f3369a4629ab4074d0ab1845cf2910e23babc4a668d8bea?apiKey=cb0dbcd120c84cf4a6cf9d039ebac0a2&" alt="" className="object-contain shrink-0 w-5 aspect-[0.91]" />
                <a href="#help">Help</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;