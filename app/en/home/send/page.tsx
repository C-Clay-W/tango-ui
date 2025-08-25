import { resend } from "@/lib/resend";
import SendForm from "./SendForm";

// 定义一个 Server Action
export async function sendEmail(formData: FormData) {
  "use server";

  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, message: "请输入邮箱地址" };
  }

  try {
    await resend.emails.send({
      from: "Clay <noreply@tangoui.me>",
      to: email,
      subject: "测试邮件",
      text: "你好，这是一封来自 tangoui.me 的测试邮件。",
    });

    return { success: true, message: "邮件发送成功 ✅" };
  } catch (err) {
    return { success: false, message: "发送失败 ❌" };
  }
}

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      {/* 把 server action 传给客户端表单 */}
      <SendForm sendEmail={sendEmail} />
    </div>
  );
}
