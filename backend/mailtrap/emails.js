import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates.js';
import {sender,mailTrapClient} from './mailtrap.config.js';

export const sendVerificationEmail=async (email,verificationToken)=>{
    const recipient=[
        {
            email
        }
    ];

    try{
        const response=mailTrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification",
        });

        console.log("Verification Email send successfully",response);
    }catch(error)
    {
        console.error("Error while sending verification Email:",error);
        throw new Error(`Error while sending verification Email:,${error}`);
        
    }
}

export const sendWelcomeEmail=async(email,name)=>{
    const recipient = [
        {
            email
        }
    ];
    try{
        const response = mailTrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "df85fdd9-2573-46fe-81be-9babee0751b0",
            template_variables: {
                name:name,
            }
        });

        console.log("Welcome Email send successfully", response);
    }catch(error)
    {
        console.error("Error while sending Welcome Email:", error);
        throw new Error(`Error while sending Welcome Email:,${error}`);
    }
}

export const sendResetPasswordEmail=async(email,resetUrl)=>{
    const recipient=[
        {
            email
        }
    ];

    try{
        const response = mailTrapClient.send({
            from: sender,
            to: recipient,
            subject:"Reset Your Password",
            html:PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetUrl),
            category:"Password Reset",
        });

        console.log("Reset Password Email send successfully", response);

    }catch(error)
    {
        console.error("Error while sending Reset Password Email:", error);
        throw new Error(`Error while sending Reset Password Email:,${error}`);
    }
}

export const resetPasswordSuccessEmail=async(email)=>{
    const recipient=[
        {
            email
        }
    ];
    try{
        const response = mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successfully",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        });

        console.log("Reset Password Email send successfully", response);
    }catch(error)
    {
        console.error("Error while sending Reset Password Email:", error);
        throw new Error(`Error while sending Reset Password Email:,${error}`);
    }
}