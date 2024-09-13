import Head from "next/head"; // Next.js's Head component for meta tags
import SignupPage from "../pages/SignUp";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up - My Chronicles</title>
        <meta
          name="description"
          content="Create an account on My Chronicles to access exclusive features and join our community."
        />
        <meta property="og:title" content="Sign Up - My Chronicles" />
        <meta
          property="og:description"
          content="Join the My Chronicles community by creating your account today. Enjoy personalized features and updates!"
        />
        <meta
          property="og:url"
          content="https://mychronicles.vercel.app/signup"
        />
        <meta
          property="og:image"
          content="https://dummyimage.com/800x600/7715e8/fafafa.png&text=My+Chronicles+Sign+Up"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:site_name" content="My Chronicles" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign Up - My Chronicles" />
        <meta
          name="twitter:description"
          content="Create an account on My Chronicles to access exclusive features and join our community."
        />
        <meta
          name="twitter:image"
          content="https://dummyimage.com/800x600/7715e8/fafafa.png&text=My+Chronicles+Sign+Up"
        />
      </Head>
      <SignupPage />
    </>
  );
}
