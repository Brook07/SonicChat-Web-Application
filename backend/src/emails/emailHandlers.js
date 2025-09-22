import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  // Debugging to check sender details
  console.log("Sender Name:", sender.name);
  console.log("Sender Email:", sender.email);

  try {
    const { data, error } = await resendClient.emails.send({
      from: `${sender.name} <${sender.email}>`, // Make sure this is properly formatted
      to: email,
      subject: "Welcome to SonicChat!",
      html: createWelcomeEmailTemplate(name, clientURL),
    });

    if (error) {
      console.error("Error sending welcome email:", error);
      throw new Error("Failed to send welcome email");
    }

    console.log("Welcome Email sent successfully", data);
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
};
