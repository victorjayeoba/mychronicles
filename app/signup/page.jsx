import Head from "next/head"; // Next.js's Head component for meta tags
import SignupPage from "../pages/SignUp";
export const metadata = {
  title: "Sign Up - My Chronicles",
  description:
    "Create an account on My Chronicles to access exclusive features and join our community.",
  openGraph: {
    title: "Sign Up - My Chronicles",
    description:
      "Join the My Chronicles community by creating your account today. Enjoy personalized features and updates!",
    url: "https://mychronicles.vercel.app/signup",
    images: [
      {
        url: "https://dummyimage.com/800x600/7715e8/fafafa.png&text=My+Chronicles+Sign+Up",
        width: 800,
        height: 600,
        alt: "My Chronicles Sign Up Page",
      },
    ],
    site_name: "My Chronicles",
    type: "website", // Adjust based on the content type
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up - My Chronicles",
    description:
      "Create an account on My Chronicles to access exclusive features and join our community.",
    image:
      "https://dummyimage.com/800x600/7715e8/fafafa.png&text=My+Chronicles+Sign+Up",
  },
};

export default function SignUp() {
  return (
    <>
      <SignupPage />
    </>
  );
}
