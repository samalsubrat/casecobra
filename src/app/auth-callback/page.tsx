"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAuthStatus } from "./actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [configId, setConfigId] = useState<string | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const configurationId = localStorage.getItem("configurationId");
    if (configurationId) setConfigId(configurationId);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {data} = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => await getAuthStatus(),
    retry:true,
    retryDelay: 500,
  });

  if(data?.success){
    if(configId){
      localStorage.removeItem("configurationId")
      router.push(`/configure/preview?id=${configId}`)
    }else{
      router.push('/')
    }
  }

  return <div className="w-full mt-24 flex justify-center">
    <div className="flex flex-col items-center gap-2">
      <Loader2 className="size-9 animate-spin text-zinc-500"/>
      <h3 className="font-semibold text-xl">Loggging you in...</h3>
      <p>You will be redirected automatically.</p>
    </div>
  </div>;
};

export default page;

