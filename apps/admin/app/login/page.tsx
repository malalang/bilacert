import LoginForm from "./LoginForm";

export const metadata = {
  title: "Sign In",
  description: "Sign in to the Bilacert admin panel.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};

export default function LoginPage() {
  return <LoginForm />;
}
