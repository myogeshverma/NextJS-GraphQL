import React from 'react';

export default function Footer() {
    return (
      <div className="bg-gray-800 fixed -bottom-0 w-full">
      <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
          <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
              <ul className="flex mx-auto text-white text-center">
                <li className="p-2 cursor-pointer hover:underline">Terms & Conditions</li>
                <li className="p-2 cursor-pointer hover:underline">Privacy</li>
                <li className="p-2 cursor-pointer hover:underline">Security</li>
                <li className="p-2 cursor-pointer hover:underline">Status</li>
              </ul>
              <div className="flex mx-auto text-white text-center">
              © 2021 GitHub, Inc.
              </div>
          </div>
      </footer>
  </div>
    )
}
