"use client";

import { getUsers } from "@/api/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  userId: number;
  name: string;
  email: string;
}

const Dashboard = () => {
  const router = useRouter();
  const [data, setData] = useState<User[]>();

  const LS = typeof window !== "undefined" && localStorage.getItem("kreynick");
  if (LS === null) router.push("/login");

  const user = async () => {
    const response = await getUsers("/admin/users");
    setData(response?.data?.user);
  };

  useEffect(() => {
    user();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                UserId
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((user: User, i: number) => {
                return (
                  <>
                    <tr
                      key={user.userId}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        #{i + 1}
                      </th>
                      <td className="px-6 py-4">{user?.userId}</td>
                      <td className="px-6 py-4">{user?.name}</td>
                      <td className="px-6 py-4">{user?.email}</td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/dashboard/details/${user.userId}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          View
                        </Link>
                        <Link
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-5"
                        >
                          Edit
                        </Link>
                        <Link
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
