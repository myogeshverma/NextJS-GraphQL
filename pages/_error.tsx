function Error() {
    return (
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 text-center z-50">
          <span className="text-black relative opacity-75 top-1/2 right-0 left-0 h-0 bold text-xl">
            OH! 🧐 - Here Comes The Time When We Have Error <br/>
            We don't Like It, But We Have Tt<br/>
            You May Have Forgot To Add Token <br/>
            If You Want To Add Token, Add It In ".env.local" File In NEXT_PUBLIC_ACCESS_TOKEN
          </span>
        </div>
    )
  }
  
  Error.getInitialProps = ({ res, err }:any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error