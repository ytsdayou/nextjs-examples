'use client'

import { useState } from "react";
import { loginAction } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      loginAction({
        username: username,
        password: password
      })
    } catch(error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>user name:</div>
      <div>
        <Input 
          type="text" 
          placeholder="username" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
        />
      </div>
      <div>password:</div>
      <div>
      <Input 
          type="text" 
          placeholder="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit">login</Button>
      {session?.error && <p>{error.message}</p>}
    </form>
  )
}
