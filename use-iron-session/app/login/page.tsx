'use client'

import { loginAction } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormState } from "@/lib/form/login";
import { useFormState } from "react-dom";

export default function Login() {
  const [state, action] = useFormState<FormState, FormData>(loginAction, undefined);

  return (
    <form action={action}>
      <div>user name:</div>
      <div>
        <label htmlFor="username"></label>
        <Input 
          type="text" 
          id="username"
          name="username"
          placeholder="username" 
        />
      </div>
      {state?.errors?.username && <p className="text-red-600">{state.errors.username}</p>}

      <div>password:</div>
      <div>
        <label htmlFor="password"></label>
        <Input 
            type="password" 
            id="password"
            name="password"
            placeholder="password" 
          />
      </div>
      {state?.errors?.password && <p className="text-red-600">{state.errors.password}</p>}

      <Button type="submit">login</Button>
      {state?.errors?.form && <p>{state.errors.form}</p>}
    </form>
  )
}
