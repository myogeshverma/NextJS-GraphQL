import React,{useContext} from 'react';
import {
  RepoIcon,
  EyeIcon,
  StarIcon,
  RepoForkedIcon,
  CodeIcon,
  GitPullRequestIcon,
  PlayIcon,
  ProjectIcon,
  BookIcon,
  ShieldIcon,
  GraphIcon,
  InfoIcon,
} from "@primer/octicons-react";
import {useRouter } from "next/router";
import {abbreviateNumber} from "../../utils/abbreviateNumber"
import {SharedContext} from '../../context/sharedContext';

interface IProps {
    props: any;
}

export default function HeaderSeconday() {
    const {sharedState} = useContext<any>(SharedContext);
    const { query, replace } = useRouter();
    const {watchersCount,stargazersCount, pullRequestsCount, issuesCount, forksCount} = sharedState || {}
  return (
    <>
    
      {sharedState ? 
        <div className="bg-gray-50 border-b border-gray-300">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between py-5">
          <div>
            <RepoIcon size={16} />{" "}
            <a href="#" className="text-blue-600 text-lg">
              {query.owner}{" "}
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 text-lg font-semibold">
              {query.name}{" "}
            </a>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="grid grid-cols-2 divide-x divide-gray-300 border-gray-300 border rounded-md text-center text-xs">
              <div className="p-1.5 px-3 bg-gray-100  rounded-md">
                <EyeIcon size={16} className="text-gray-600" /> Watch
              </div>
              <div className="p-1.5 ">{abbreviateNumber(watchersCount)}</div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-300 border-gray-300 border rounded-md text-center text-xs">
              <div className="p-1.5 px-3 bg-gray-100  rounded-md">
                <StarIcon size={16} className="text-gray-600" /> Star
              </div>
              <div className="p-1.5 ">{abbreviateNumber(stargazersCount)}</div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-300 border-gray-300 border rounded-md text-center text-xs">
              <div className="p-1.5 px-3 bg-gray-100 rounded-md">
                <RepoForkedIcon size={16} className="text-gray-600" /> Fork
              </div>
              <div className="p-1.5 ">{abbreviateNumber(forksCount)}</div>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex lg:flex-row list-none lg:ml-auto md:px-24 text-gray-600">
            <li className="nav-item font-light ">
              <a
                className="px-3 py-2 flex items-center text-xs  leading-snug hover:opacity-75"
                href="#Code"
              >
                <CodeIcon size={16} />
                <span className="ml-2 font-normal text-sm text-gray-800">
                  Code
                </span>
              </a>
            </li>
            <li className="nav-item border-b-2 border-red-500 cursor-pointer">
              <a
                onClick={() => replace(`/${query.owner}/${query.name}/issues`)}
                className="px-3 py-2 flex items-center text-xs leading-snug hover:opacity-75 text-black"
              >
                <InfoIcon size={16} />
                <span className="ml-2 font-semibold text-sm">Issues</span>{" "}
                <span className="bg-gray-300 ml-1 px-1.5 antialiased rounded-3xl p-0.5 ">
                  {issuesCount}
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs  leading-snug hover:opacity-75"
                href="#PullRequests"
              >
                <GitPullRequestIcon size={16} />
                <span className="ml-2 font-normal text-sm">
                  Pull Requests
                </span>{" "}
                <span className="bg-gray-300 ml-1 px-1.5 antialiased rounded-3xl p-0.5 font-normal">
                  {pullRequestsCount}
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs  leading-snug hover:opacity-75"
                href="#Actions"
              >
                <PlayIcon size={16} />
                <span className="ml-2 font-normal text-sm">Actions</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs  leading-snug hover:opacity-75"
                href="#Projects"
              >
                <ProjectIcon size={16} />
                <span className="ml-2 font-normal text-sm">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs  leading-snug hover:opacity-75"
                href="#Wiki"
              >
                <BookIcon size={16} />
                <span className="ml-2 font-normal text-sm">Wiki</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs  leading-snug hover:opacity-75"
                href="#Security"
              >
                <ShieldIcon size={16} />
                <span className="ml-2 font-normal text-sm">Security</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs  leading-snug hover:opacity-75"
                href="#Insights"
              >
                <GraphIcon size={16} />
                <span className="ml-2 font-normal text-sm">Insights</span>
              </a>
            </li>
          </ul>
        </div>
      </div> : ''}
    </>
  );
}


