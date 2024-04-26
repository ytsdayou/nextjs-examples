'use client'
 
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button';
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <Button aria-disabled={pending}  disabled={pending} type="submit">
      {pending ? 'Submitting...' : 'Login'}
    </Button>
  )
}