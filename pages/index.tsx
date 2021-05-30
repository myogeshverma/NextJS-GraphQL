import { gql } from "@apollo/client";
import client from "../utils/apollo-client";
import RepoCard from "../components/RepoCard";
import { useRouter } from "next/router";
import { SEARCH_REPOS } from "../utils/queries";
import { DEFAULT_SEARCH_QUERY } from "../utils/global";
import {GetServerSideProps} from 'next';

export default function Home({ repo }:Home) {
  const router = useRouter();
  const {search}  = router.query;
  return (
    <>
      <div className="lg:mx-64 my-10 border-gray-200 mb-32">
        <h3 className="text-3xl font-light mb-20 text-center">
          Suggested Repositories for "{search ? search : DEFAULT_SEARCH_QUERY}"
          </h3>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {repo.search.edges.map((el:any) => {
              return <RepoCard repoData={el} key={el.node.id}/>
              
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {search} = context.query;
  let searchQuery = search ? search : DEFAULT_SEARCH_QUERY
  const { data } = await client.query({
    query: SEARCH_REPOS,
    variables: { query: searchQuery },
  });
  return {
    props: {
      repo: data,
    },
  };
}
