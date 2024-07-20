import * as React from "react";

import { SnowballChain } from "@snowballtools/js-sdk";
import { useSnowball } from "@/app/snowball";

import { useForm } from "react-hook-form";
import { parseEther } from "viem";

type NewUserFormData = {
  email: string;
};
type VerifyEmailFormData = {
  code: string;
};
type SendEthFormData = {
  to: string;
  amount: string;
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="">Lets goo snowball</div>
    </main>
  );
}
