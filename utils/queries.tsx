import { gql } from "@apollo/client";
export const ADD_COMMENT = gql`
  mutation AddComment($subjectId: ID!, $body: String!) {
    addComment(input: { subjectId: $subjectId, body: $body }) {
      commentEdge {
        node {
        author {
          login
        }
        id
        bodyHTML
        createdAt
      }
      }
    }
  }
`;

export const GET_COMMENTS_OF_ISSUE = gql`
query ($name: String!, $owner: String!, $issueID: Int!) {
  repository(name: $name, owner: $owner) {
    issue(number: $issueID) {
      id
      title
      state
      closed
      bodyHTML
      number
      author {
        login
        avatarUrl
      }
      createdAt
      comments(first: 20) {
        totalCount
        nodes {
          author {
            login
            avatarUrl
          }
          id
          bodyHTML
          createdAt
        }
      }
    }
  }
}
`;

export const SEARCH_REPOS = gql`
query ($query: String! ) {
  search(query: $query, type: REPOSITORY, first: 10) {
    edges {
      node {
        ... on Repository {
          id
          name
          nameWithOwner
          owner {
            login
          }
          forkCount
          stargazerCount
          watchers {
            totalCount
          }
          issues(states: OPEN) {
            totalCount
          }
          pullRequests {
            totalCount
          }
        }
      }
    }
}
}
`

export const REPO_ISSUE_WITH_FILTER = gql`
  query ($name: String!, $owner: String!, $states: [IssueState!], $after: String) {
    repository(name: $name, owner: $owner) {
      forkCount
      stargazerCount
      pullRequests(states: OPEN) {
        totalCount
      }
      watchers {
        totalCount
      }
      issues(
        orderBy: { field: CREATED_AT, direction: DESC }
        first: 10
        states: $states
        after: $after
      ) {
        totalCount
        nodes {
          number
          title
          url
          author {
            login
          }
          createdAt
          id
        }
        pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    }
`;