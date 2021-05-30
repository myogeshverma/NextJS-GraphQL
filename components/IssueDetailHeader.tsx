import { InfoIcon } from "@primer/octicons-react";
import TimeAgo from "react-timeago";
export default function IssueDetailHeader(props:any){
    const {title, number, closed, createdAt, author, comments} = props.labelData
    return (
        <div className="lg:mx-64 my-10 ">
            <div className="flex justify-between">
              <h3 className="text-3xl font-light ">
                {title} <span className="text-gray-400">#{number}</span>
              </h3>
              <div className="mt-2">
                <button className="bg-green-600 text-white text-sm w-24 p-1 rounded-lg ">
                  New Issue
                </button>
              </div>
            </div>
            <div className="mt-4">
              {closed ? (
                <span className="inline-block rounded-full text-white bg-red-600 px-4 py-1 text-md font-light mr-3">
                  <InfoIcon size={16} /> Closed
                </span>
              ) : (
                <span className="inline-block rounded-full text-white bg-green-600 px-4 py-1 text-md font-light mr-3">
                  <InfoIcon size={16} /> Open
                </span>
              )}
              <span className="text-gray-600 font-medium">{author}</span>{" "}
              <span className="text-gray-600 font-light">
                {" "}
                opened this issue <TimeAgo date={createdAt} /> ·{" "}
                {comments} comments
              </span>
            </div>
          </div>
    )
}