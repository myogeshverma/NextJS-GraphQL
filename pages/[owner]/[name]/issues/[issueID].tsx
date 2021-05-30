import React, { useState } from "react";
import { ClockIcon } from "@primer/octicons-react";
import { useMutation, useQuery } from "@apollo/client";
import TimeAgo from "react-timeago";
import HeaderSecondary from "../../../../components/HeaderSeconday";
import CommentBox from "../../../../components/CommentBox";
import { withRouter, NextRouter } from "next/router";
import { ADD_COMMENT, GET_COMMENTS_OF_ISSUE } from "../../../../utils/queries";
import CommentSidebar from "../../../../components/CommentSidebar";
import AddComment from "../../../../components/AddComment";
import IssueDetailHeader from "../../../../components/IssueDetailHeader";

interface IProps {
  router: NextRouter;
}

function IssueDetail({ router }: IProps) {
  const { issueID, name, owner } = router.query;
  const [commentValue, setCommentValue] = useState("");

  const { loading, data, error } = useQuery(GET_COMMENTS_OF_ISSUE, {
    variables: { name, owner, issueID: Number(issueID) },
  });
  console.log("data", data);
  const { title, number, closed, createdAt, author, comments, bodyHTML, id } =
    data ? data.repository.issue : "";
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [
      {
        query: GET_COMMENTS_OF_ISSUE,
        variables: { name, owner, issueID: Number(issueID) },
      },
    ],
    awaitRefetchQueries: false,
  });

  const handleOnsubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addComment({
      variables: { body: commentValue, subjectId: id },
    });
    setCommentValue("");
  };

  const handleChange = (event: any) => {
    let target = event.target as HTMLTextAreaElement;
    setCommentValue(target.value);
  };

  return (
    <>
      <HeaderSecondary />
      {!loading ? (
        <>
          <IssueDetailHeader labelData={{title, number, closed, createdAt, author: author.login, comments: comments.totalCount}}/>
          <div className="lg:mx-64 my-10 flex  gap-7">
            <div className="w-10/12">
              <CommentBox
                comment={{
                  login: author.login,
                  avatarUrl: author.avatarUrl,
                  createdAt,
                  bodyHTML,
                }}
              />
              {comments.nodes.map((el:any) => {
                return (
                  <CommentBox
                    key={el.id}
                    comment={{
                      login: el.author.login,
                      avatarUrl: el.author.avatarUrl,
                      createdAt: el.createdAt,
                      bodyHTML: el.bodyHTML,
                      id: el.id,
                    }}
                  />
                );
              })}
              <hr />
              <AddComment
                handler={{ handleOnsubmit, handleChange, commentValue }}
              />
            </div>
            <CommentSidebar />
          </div>
        </>
      ) : (
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
          <span className="text-gray-800 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
            <ClockIcon size={64} />
            Loading
          </span>
        </div>
      )}
    </>
  );
}

export default withRouter(IssueDetail);
