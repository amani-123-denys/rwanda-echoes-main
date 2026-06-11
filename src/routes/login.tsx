import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signInWithGoogle } from "@/lib/google";

type LoginForm = {
  email: string;
  password: string;
};

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — History of Rwanda" }] }),
  component: LoginPage,
});

function LoginPage() {
  const methods = useForm<LoginForm>({ defaultValues: { email: "", password: "" } });
  const { register, handleSubmit } = methods;
  const [error, setError] = useState<string | null>(null);

  function onSubmit(data: LoginForm) {
    setError(null);
    const users = JSON.parse(localStorage.getItem("hor_users") || "[]");
    const user = users.find((u: any) => u.email === data.email && u.password === data.password);
    if (!user) {
      setError("Invalid email or password");
      return;
    }
    localStorage.setItem("hor_auth", JSON.stringify({ token: "local-token", user: { email: user.email, name: user.name } }));
    window.location.href = "/";
  }

  async function handleGoogle() {
    try {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      if (!clientId) return alert("Google client id not configured. Set VITE_GOOGLE_CLIENT_ID.");
      const user = await signInWithGoogle(clientId);
      const users = JSON.parse(localStorage.getItem("hor_users") || "[]");
      let existing = users.find((u: any) => u.email === user.email);
      if (!existing) {
        existing = { name: user.name, email: user.email, password: "" };
        users.push(existing);
        localStorage.setItem("hor_users", JSON.stringify(users));
      }
      localStorage.setItem("hor_auth", JSON.stringify({ token: "google", user: { email: user.email, name: user.name } }));
      window.location.href = "/";
    } catch (e: any) {
      console.error(e);
      alert("Google sign-in failed: " + (e?.message || e));
    }
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-md px-6 py-24">
        <h1 className="font-display text-3xl mb-4">Sign in</h1>
        <p className="text-sm text-muted-foreground mb-6">Sign in to your account to continue.</p>
        <Form {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...register("email", { required: "Email is required" })} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...register("password", { required: "Password is required" })} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>

            {error && <div className="text-destructive">{error}</div>}

            <div className="flex items-center gap-3">
              <Button type="submit">Sign in</Button>
              <Link to="/signup" className="text-sm text-muted-foreground underline">
                Create account
              </Link>
            </div>
            <div className="mt-4">
              <Button variant="outline" onClick={handleGoogle} type="button">
                Continue with Google
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </SiteLayout>
  );
}
