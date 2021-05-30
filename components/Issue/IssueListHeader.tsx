import { InfoIcon, TriangleDownIcon, CheckIcon } from "@primer/octicons-react";

interface IProps {
    countData:any
}

export default function IssueListHeader(props:IProps){
  const {openCount, countType} = props.countData;
    return (
        <>
        <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-50 rounded-md">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                {
                  countType == 'OPEN' ? <a className="text-sm font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                  href="#pablo" > <InfoIcon size={16} /> {openCount} Open </a> : <a className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-gray-600"
                  href="#pablo" ><CheckIcon size={16} /> {openCount} Closed </a>
                }
                
                  
              </div>
              <div
                className="lg:flex flex-grow items-center">
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-sm font-normal text-gray-600 leading-snug hover:opacity-75"
                      href="#pablo" ><span className="ml-2">Author</span> <TriangleDownIcon size={20} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-sm font-normal text-gray-600 leading-snug hover:opacity-75"
                      href="#pablo" ><span className="ml-2">Label</span> <TriangleDownIcon size={20} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-sm font-normal text-gray-600 leading-snug hover:opacity-75"
                      href="#pablo" ><span className="ml-2">Projects</span> <TriangleDownIcon size={20} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-sm font-normal text-gray-600 leading-snug hover:opacity-75"
                      href="#pablo" ><span className="ml-2">Milestones</span> <TriangleDownIcon size={20} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-sm font-normal text-gray-600 leading-snug hover:opacity-75"
                      href="#pablo" ><span className="ml-2">Assignee</span> <TriangleDownIcon size={20} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-sm font-normal text-gray-600 leading-snug hover:opacity-75"
                      href="#pablo" ><span className="ml-2">Sort</span> <TriangleDownIcon size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
    )
}