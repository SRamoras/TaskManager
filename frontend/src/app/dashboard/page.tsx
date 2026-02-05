"use client"
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    
    useEffect(() => {
        let isSaved = localStorage.getItem("email")
        if(!isSaved){
            router.push("/");
        }
    }, [router])

  return (
    <div>dashboard</div>
  )
}

export default page