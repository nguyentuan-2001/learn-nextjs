"use client";
import ContainerHome from "@/components/home/home.container";
import { useEffect } from "react";
import useSWR from "swr";

const Blogpage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ContainerHome
        blogs={data?.sort((a: any, b: any) => b.id - a.id) ?? []}
      />
    </>
  );
};

export default Blogpage;
