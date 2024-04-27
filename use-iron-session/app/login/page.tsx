'use client'

import { loginAction } from "@/actions/login";
import { Input } from "@/components/ui/input";
import { FormState } from "@/lib/form/login";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/submit";

export default function Login() {
  const [state, action] = useFormState<FormState, FormData>(loginAction, undefined);

  return (
    <div className="w-4/6 m-auto">
      <div className="my-10 text-4xl text-center">Login Page</div>
      <form action={action}>
        <div className="mb-5">
          <div>
            <label htmlFor="username">User Name:</label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="username" />
          </div>
          {state?.errors?.username && <p className="text-red-600">{state.errors.username}</p>}
        </div>

        <div className="mb-5">
          <div>
            <label htmlFor="password">Password:</label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="password" />
          </div>
          {state?.errors?.password && <p className="text-red-600">{state.errors.password}</p>}
        </div>

        <SubmitButton />
        {state?.errors?.form && <p>{state.errors.form}</p>}
      </form>
    </div>
  )
}
