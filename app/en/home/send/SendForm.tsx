"use client";

import { useState } from "react";

export default function SendForm({ sendEmail }: { sendEmail: (formData: FormData) => Promise<any> }) {
  const [status, setStatus] = useState("");

  return (
    <form
      action={async (formData) => {
        const result = await sendEmail(formData);
        setStatus(result.message);
      }}
      className="flex flex-col gap-4 w-80"
    >
      <input
        type="email"
        name="email"
        placeholder="请输入收件人邮箱"
        className="border rounded p-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
      >
        发送
      </button>

      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </form>
  );
}
