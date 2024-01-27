import React from "react";

const Users = () => {
  const userData = [
    { name: "John Brown", age: 45, address: "New York No. 1 Lake Park" },
    { name: "Jim Green", age: 27, address: "London No. 1 Lake Park" },
    // Add more user data as needed
  ];

  return (
    <div className="text-black">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "even:bg-gray-100 " : ""
                      }odd:bg-white even:bg-gray-100`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {user.age}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {user.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none text-blue-500 hover:text-blue-400 focus:outline-none focus:ring-1 focus:ring-gray-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
