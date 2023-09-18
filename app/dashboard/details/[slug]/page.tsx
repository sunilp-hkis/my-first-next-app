"use client";

import { getUser } from "@/api/user";
import { Params } from "@/utils/types";
import { useEffect } from "react";

const Detail = ({ params }: Params) => {
  const id = params.slug;

  const userDetails = async () => {
    const user = await getUser(`/admin/user/${id}`);
    console.log({ user });
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:min-h-screen">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-mono font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                User Details,
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
