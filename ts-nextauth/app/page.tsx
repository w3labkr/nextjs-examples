'use client'

import { useSession, signIn, signOut } from "next-auth/react"
 
export default function Home() {
  const { data: session } = useSession()

  return (
    <main>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
          Sign in With Google
      </button>
      <br />
      <button onClick={() => signOut()}>
          Sign out
      </button>
    </main>
  )
}
