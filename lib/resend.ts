// 网站自动发送邮件
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
