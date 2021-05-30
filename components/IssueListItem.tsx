import { InfoIcon, TriangleDownIcon, CheckIcon } from "@primer/octicons-react";
import TimeAgo from "react-timeago";
import Link from "next/link";

interface IProps {
  itemData: any;
}
export default function IssueListItem(props:IProps){

    const {number,name, owner, createdAt, author, title} = props.itemData;

    return (
        <>
        <li
                  key={number}
                  className="border-b border-gray-200 px-6 py-3 grid grid-flow-col auto-cols-max"
                >
                  <InfoIcon size={16} className="text-green-700" />
                  <span className="-mt-1 ml-2">
                    <h3 className="font-medium hover:text-blue-700">
                      <Link href={`/${owner}/${name}/issues/${number}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-600">
                      #{number} opened <TimeAgo date={createdAt} /> by{" "}
                      {author.login}
                    </p>
                  </span>
                </li>
        </>
    )
}