export default function AddComment(props:any) {
  const { handleChange, handleOnsubmit, commentValue } = props.handler;
  return (
    <div className="flex w-full my-10 mb-32">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src={
            "https://avatars.githubusercontent.com/u/19171423?u=f0ca775912ed034156ec2411acb9ae4e1d4f37c7&v=4"
          }
          alt=""
        />
      </div>
      <div className="flex-1 border rounded-lg leading-relaxed">
        <form className=" rounded-lg px-4 pt-2 " onSubmit={handleOnsubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Add a new comment
            </h2>
            <div className="w-full md:full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-32 focus__TWSEP__:__TWSEP__py-2 px-3 font-light placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required
                value={commentValue}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="w-full md:w-full flex items-start md:w-full px-3">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                <p className="text-xs md:text-sm pt-px">
                  Always be polite while commenting
                </p>
              </div>
              <div className="-mr-1">
                <input
                  type="submit"
                  className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  value="Post Comment"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
