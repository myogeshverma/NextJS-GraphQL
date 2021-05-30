export default function CommentSidebar(props: any) {
    return (
        <div className="w-2/12">
              <div className="w-full border-b pb-4 mb-6">
                <span className="font-light text-gray-800 text-md">
                  Assignees
                </span>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-gray-600 font-light">
                    None yet
                  </div>
                </div>
              </div>
              <div className="w-full border-b pb-4 mb-6">
                <span className="font-light text-gray-800 text-md">Labels</span>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-gray-600 font-light">
                    None yet
                  </div>
                </div>
              </div>
              <div className="w-full border-b pb-4 mb-6">
                <span className="font-light text-gray-800 text-md">
                  Projects
                </span>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-gray-600 font-light">
                    None yet
                  </div>
                </div>
              </div>
              <div className="w-full border-b pb-4 mb-6">
                <span className="font-light text-gray-800 text-md">
                  Milestone
                </span>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-gray-600 font-light">
                    No milestone
                  </div>
                </div>
              </div>
              <div className="w-full border-b pb-4 mb-6">
                <span className="font-light text-gray-800 text-md">
                  Linked pull requests
                </span>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-gray-600 font-light">
                    Successfully merging a pull request may close this issue.
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-gray-600 font-light">
                    None yet
                  </div>
                </div>
              </div>
              <div className="w-full border-b pb-4 mb-6">
                <span className="font-light text-gray-800 text-md">Author</span>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-gray-600 font-light">
                    Author Name
                  </div>
                </div>
              </div>
            </div>
    )
}
