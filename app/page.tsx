"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "tango-ui-cw";

const page = () => {
  const router = useRouter();

  function enter() {
    router.push("/en/home/components/button");
  }
  return (
    <>
      <div>tangoui</div>
      <div className="text-amber-500">已接入CICD流水线</div>

      <Button onClick={enter}>Enter</Button>
    </>
  );
};

export default page;
