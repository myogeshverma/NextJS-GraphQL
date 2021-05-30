import React from 'react';
import TimeAgo from "react-timeago";
import parse from "html-react-parser";
export default function CommentBox(props: any) {
    const {avatarUrl, login, createdAt, bodyHTML, id } = props.comment
    return (
        <div className="flex w-full mb-10" key={id}>
          <div className="flex-shrink-0 mr-3">
            <img
              className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
              src={avatarUrl}
              alt=""
            />
          </div>
          <div className="flex-1 border rounded-lg   leading-relaxed">
            <div className="bg-gray-100 p-3 font-light">
              <span className="font-medium">{login}</span> commented <TimeAgo date={createdAt} />
            </div>
            <div className="p-3 font-light">
              {parse(bodyHTML)}
            </div>
          </div>
        </div>
    )
}
