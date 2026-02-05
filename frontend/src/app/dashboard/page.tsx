"use client"
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
import { getStorageItem } from "../../utils/storage"
const page = () => {
    const router = useRouter();
    
    useEffect(() => {
        let isSaved = getStorageItem("email")
        if(!isSaved){
            router.push("/");
        }
    }, [router])

  return (
    <div>dashboard</div>
  )
}

export default page