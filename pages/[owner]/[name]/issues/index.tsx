import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import client from "../../../../utils/apollo-client";
import HeaderSecondary from "../../../../components/Issue/IssuePageHeader";
import IssueListHeader from "../../../../components/Issue/IssueListHeader";
import { withRouter, NextRouter } from "next/router";
import { REPO_ISSUE_WITH_FILTER } from "../../../../utils/queries";
import IssueListItem from "../../../../components/Issue/IssueListItem";
import {GetServerSideProps} from 'next';

interface IProps {
  data: any;
  title: String;
  router: NextRouter;
  context: NextRouter;
}

enum STATE {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

function Issues({ data, router }: IProps) {
  const { owner, name } = router.query;
 
  const [issueData, setIssueData] = useState(data);
  const [issueType, setIssuetype] = useState(STATE.OPEN);
  const { issues } = issueData;

  const [loadMoreIssues] = useLazyQuery(REPO_ISSUE_WITH_FILTER, {
    onCompleted: (data) => {
      let basic = JSON.parse(JSON.stringify( data.repository));
      var appendNodes  = [...issueData.issues.nodes,...data.repository.issues.nodes];
      basic.issues.nodes = appendNodes;
          setIssueData(basic);
        }
  });

  const [getFilteredIssues] = useLazyQuery(REPO_ISSUE_WITH_FILTER, {
    variables: {
      name: router.query.name,
      owner: router.query.owner,
      states: issueType,
    },
    onCompleted: (data) => {
      setIssueData(data.repository);
    },
  });

  const handleLoadMoreIssues = () => {
    loadMoreIssues({
      variables: {
        name: router.query.name,
        owner: router.query.owner,
        states: issueType,
        after: issues.pageInfo.endCursor
      }
    })
  };

  const handleFilterClick = (issuetype:any) => {
    setIssuetype(issuetype);
    getFilteredIssues({
      variables: {
        name: router.query.name,
        owner: router.query.owner,
        states: issuetype,
      },
    });
  };
  return (
    <>
      <HeaderSecondary />
      <div className="lg:mx-64 my-10 flex justify-between">
        <div className="grid grid-cols-3 divide-x divide-gray-300 border-gray-300 border rounded-md text-center text-xs">
          <div className="p-1.5 px-3 bg-gray-100  rounded-md">Issue Type</div>
          <div
            className={
              issueType == STATE.CLOSED
                ? "p-1.5 bg-gray-600 text-white cursor-pointer"
                : "p-1.5 cursor-pointer"
            }
            onClick={() => handleFilterClick(STATE.CLOSED)}
          >
            Closed
          </div>
          <div
            className={
              issueType == STATE.OPEN
                ? "p-1.5 bg-gray-600 text-white rounded-r-md cursor-pointer"
                : "p-1.5 cursor-pointer"
            }
            onClick={() => handleFilterClick(STATE.OPEN)}
          >
            Open
          </div>
        </div>

        <div></div>
        <div>
          <button className="bg-green-600 text-white text-sm w-24 p-1 rounded-lg ">
            New Issue
          </button>
        </div>
      </div>
      <div className="lg:mx-64 my-10 border-gray-200 border rounded-md ">
        <IssueListHeader
          countData={{ openCount: issues.totalCount, countType: issueType }}
        />
        <div>
          <ul>
            {issues.nodes.map((el:any) => {
              return <IssueListItem itemData={{ ...el, ...{ owner, name } }} key={el.id}/>;
            })}
          </ul>
        </div>
      </div>
      
        <div className="lg:mx-64 my-10 mb-32 text-center">
        {issues.pageInfo.hasNextPage ? (
          <button
            className="border-green-600 border text-green-600 text-sm w-40 p-3 rounded-lg "
            onClick={handleLoadMoreIssues}
          >
            Get Me More Issues
          </button>
          ) : (
            " No More Issues For The Day"
          )}
        </div>
      
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const { owner, name } = context.query;
  const { data } = await client.query({
    query: REPO_ISSUE_WITH_FILTER,
    variables: { name, owner, states: STATE.OPEN  },
  });
  return {
    props: {
      data: data.repository,
    },
  };
}

export default withRouter(Issues);
