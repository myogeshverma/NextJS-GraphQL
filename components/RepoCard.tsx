import React,{useContext} from 'react';
import { MarkGithubIcon, RepoIcon, EyeIcon, StarIcon, RepoForkedIcon, CodeIcon, GitPullRequestIcon, PlayIcon, ProjectIcon, BookIcon, ShieldIcon, GraphIcon, InfoIcon, TriangleDownIcon, CheckIcon } from "@primer/octicons-react";
import {abbreviateNumber} from "../utils/abbreviateNumber"
import {useRouter} from "next/router";
import {SharedContext} from '../context/sharedContext';

export default function RepoCard(props:RepoCard) {
    const router = useRouter()
    const {nameWithOwner, forkCount, stargazerCount, watchers, pullRequests, issues, id} = props.repoData.node;

    const {setSharedState} = useContext<any>(SharedContext);

  const updateState =(e:any) => {
    e.preventDefault()
    setSharedState({
      pullRequestsCount: pullRequests.totalCount,
      issuesCount: issues.totalCount,
      stargazersCount: stargazerCount,
      watchersCount: watchers.totalCount,
      forksCount: forkCount,
    })
    router.push(`${nameWithOwner}/issues`)
    }

    return (        
        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl" >
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-gray-800 left-4 -top-6">
            <MarkGithubIcon size={24} className="text-white"/>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2 break-all">{nameWithOwner}</p>
            <div className="flex space-x-2 text-gray-00 text-sm">
              <RepoForkedIcon size={16} className="text-gray-400"/>
              <p className="text-gray-400">Fork {abbreviateNumber(forkCount)}</p>
            </div>
            <div className="flex space-x-2 text-gray-400 text-sm my-3">
              <StarIcon size={16} className="text-gray-400"/>
              <p className="text-gray-400">Star {abbreviateNumber(stargazerCount)}</p>
            </div>
            <div className="flex space-x-2 text-gray-400 text-sm my-3">
              <EyeIcon size={16} className="text-gray-400"/>
              <p className="text-gray-400">Watch {abbreviateNumber(watchers.totalCount)}</p>
            </div>
            <div className="border-t-2"></div>

            <div className="text-center flex  ">
                <button className="p-2 mt-4 rounded-lg bg-gray-800 outline-none text-white shadow w-32 text-center" onClick={updateState}>Visit Repo</button>
              
            </div>
          </div>
        </div>

    );
  }
