type Home = {
    repo : {
      search : {
        edges
      }
    };
    repoData: Array<object>;
    el:Array<object>;
  }

  type RepoCard = {
    repoData:{
      node: {
        nameWithOwner, forkCount, stargazerCount, watchers, pullRequests, issues, id
      }
    }
  }
  
  type ContextType = {
    children:any;
  }