"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import React, { useRef } from "react"
import { FcGoogle } from "react-icons/fc"
import axios from "axios";
import { useRouter } from "next/navigation"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const router  = useRouter();
  
  const signupUser = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(passwordRef.current?.value !== confirmPasswordRef.current?.value){
      alert("Passwords do not match");
      return;
    }
    axios.post('http://localhost:5000/auth/signup', {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      role : "PATIENT"
    }).then((response)=>{
      console.log(response);
      router.push('/login');
    }).catch((error)=>{
      console.log(error);
    });
  }

  return (
    <form onSubmit={signupUser} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create a new account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to create a new account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input ref={emailRef} id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input ref={passwordRef} id="password" type="password" required />
          <div className="flex items-center">
            <Label htmlFor="password">Confirm Password</Label>
          </div>
          <Input ref={confirmPasswordRef} id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <FcGoogle size={20} />
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Already has an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  )
}
