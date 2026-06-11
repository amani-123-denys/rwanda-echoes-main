import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signInWithGoogle } from "@/lib/google";

type SignupForm = {
  name: string;
  email: string;
  password: string;
};

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — History of Rwanda" }] }),
  component: SignupPage,
});

function SignupPage() {
  const methods = useForm<SignupForm>({ defaultValues: { name: "", email: "", password: "" } });
  const { register, handleSubmit } = methods;
  const [error, setError] = useState<string | null>(null);

  function onSubmit(data: SignupForm) {
    setError(null);
    const users = JSON.parse(localStorage.getItem("hor_users") || "[]");
    if (users.find((u: any) => u.email === data.email)) {
      setError("An account with this email already exists");
      return;
    }
    users.push({ name: data.name, email: data.email, password: data.password });
    localStorage.setItem("hor_users", JSON.stringify(users));
    localStorage.setItem("hor_auth", JSON.stringify({ token: "local-token", user: { email: data.email, name: data.name } }));
    window.location.href = "/";
  }

  async function handleGoogle() {
    try {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      if (!clientId) return alert("Google client id not configured. Set VITE_GOOGLE_CLIENT_ID.");
      const user = await signInWithGoogle(clientId);
      const users = JSON.parse(localStorage.getItem("hor_users") || "[]");
      if (!users.find((u: any) => u.email === user.email)) {
        users.push({ name: user.name, email: user.email, password: "" });
        localStorage.setItem("hor_users", JSON.stringify(users));
      }
      localStorage.setItem("hor_auth", JSON.stringify({ token: "google", user: { email: user.email, name: user.name } }));
      window.location.href = "/";
    } catch (e: any) {
      console.error(e);
      alert("Google sign-up failed: " + (e?.message || e));
    }
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-md px-6 py-24">
        <h1 className="font-display text-3xl mb-4">Create account</h1>
        <p className="text-sm text-muted-foreground mb-6">Create an account to save favorites and access extra features.</p>
        <Form {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...register("name", { required: "Name is required" })} />
              </FormControl>
              <FormMessage />
            </FormItem>

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
                <Input {...register("password", { required: "Password is required", minLength: 6 })} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>

            {error && <div className="text-destructive">{error}</div>}

            <div className="flex items-center gap-3">
              <Button type="submit">Sign up</Button>
              <Link to="/login" className="text-sm text-muted-foreground underline">
                Have an account?
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
