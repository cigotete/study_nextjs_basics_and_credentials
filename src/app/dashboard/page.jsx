"use client"
import {signOut} from 'next-auth/react'

function DashboardPage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>
        <h1>Dashboard</h1>
        <button
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </section>
  )
}
export default DashboardPage