"use client";

import { useRouter } from "next/navigation";
import { getUser } from "@/api/user";
import { Params } from "@/utils/types";
import { useEffect, useState } from "react";

interface User {
  userId: number;
  name: string;
  email: string;
}

const Detail = ({ params }: Params) => {
  const id = params.slug;
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userDetails = async () => {
      const user = await getUser(`/admin/user/${id}`);
      setUser(user.data.user);
    };

    userDetails();
  }, []);

  console.log(user);

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:min-h-screen">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-mono font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                User Details, <span onClick={() => router.back()}>Back</span>
              </h1>

              <table className="table w-full">
                <thead>
                  <tr className="bg-teal-500">
                    <th className="text-right px-5 py-2 bg-teal-500">
                      User ID
                    </th>
                    <td className="px-5">{user?.userId}</td>
                  </tr>
                  <tr>
                    <th className="text-right px-5 py-2 bg-teal-300">
                      User Name
                    </th>
                    <td className="px-5">{user?.name}</td>
                  </tr>
                  <tr>
                    <th className="text-right px-5 py-2 bg-teal-300">
                      Email ID
                    </th>
                    <td className="px-5">{user?.email}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
