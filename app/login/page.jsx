import LogInPage from "../pages/LogIn";

export const metadata = {
  title: "Log In - My Chronicles",
  description:
    "Log in to My Chronicles to access your account and enjoy personalized features.",
  openGraph: {
    title: "Log In - My Chronicles",
    description:
      "Access your My Chronicles account and continue exploring personalized features and updates.",
    url: "https://mychronicles.vercel.app/login", // Adjust the URL to the login page
    images: [
      {
        url: "https://dummyimage.com/800x600/7715e8/fafafa.png&text=My+Chronicles+Log+In",
        width: 800,
        height: 600,
        alt: "My Chronicles Login Page",
      },
    ],
    site_name: "My Chronicles",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Log In - My Chronicles",
    description:
      "Log in to My Chronicles to access your account and enjoy personalized features.",
    image:
      "https://dummyimage.com/800x600/7715e8/fafafa.png&text=My+Chronicles+Log+In",
  },
};

export default function LogIn() {
  return (
    <>
      <LogInPage />
    </>
  );
}
