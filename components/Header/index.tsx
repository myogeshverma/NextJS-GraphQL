import React, { useState } from "react";
import { MarkGithubIcon, ThreeBarsIcon } from "@primer/octicons-react";
import {useRouter} from "next/router";
import { DEFAULT_SEARCH_QUERY } from "../../utils/global";
export default function Header() {
  const router = useRouter()
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchValue, setSearchvalue] = useState(DEFAULT_SEARCH_QUERY);

  const handleSearchButton = () => {
    router.replace(`/?search=${searchValue}`)
  }

  const handleSearchChange = (e:any) => {
    setSearchvalue(e.target.value);
   
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <MarkGithubIcon size={32} className="text-white" />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <ThreeBarsIcon size={16} />
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex">
              <input
                type="search"
                placeholder="Search Repo"
                className="outline-none form-input rounded bg-transparent border-gray-500 text-white h-8 appearance-none"
                onChange={handleSearchChange}
                value={searchValue}
              />
              <button onClick={handleSearchButton} className="p-1 mx-2 focus:ring-transparent rounded-full border border-gray-500 outline-none text-white shadow w-24 text-center">search</button>
            </div>
            <ul className="flex flex-col md:flex-row list-none  ">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Pull Requests</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Issues</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Marketplace</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Explore</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
