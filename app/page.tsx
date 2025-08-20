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
    <Button onClick={enter}>Enter</Button>
    </>
    
  )
}

export default page