import { resend } from "@/lib/resend"
import { ApiResponce } from "@/types/apiResponse";
import VerificationEmail from "../../emails/VerificationEmail";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string   //otp code
): Promise<ApiResponce> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'mistryMessanger | Verification code',
            react: VerificationEmail({username, otp:verifyCode})
        })

        return {
            success: true,
            message: "verification email send successfully"
        }
    } catch (emailError) {
        console.error("Error sending verfication error")
        return {
            success: false,
            message: "faild to send verification email"
        }
    }
}