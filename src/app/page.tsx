"use client"
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setStorageItem, getStorageItem } from "../utils/storage"
import Input from "../components/Input";
import Button from "../components/Button";


export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();
  
  useEffect(() => {
    let savedEmail = getStorageItem("email");
    if(savedEmail){
      router.push("/dashboard");
    }
  }, [])


  function addEmail(){
      setStorageItem("email", email)
      router.push("/dashboard");
  }
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form onSubmit={
          e => {
            e.preventDefault();
            addEmail()
          }
        }>
          <label htmlFor="email">Email</label>
          <Input type="email" Icon="alternate_email" id="email" placeholder="test@gmail.com" value={email} onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="pass">Password</label>
          <Input type="password" Icon="lock" id="pass" placeholder="Senha123#" value={password} onChange={e => setPassword(e.target.value)}/>
          <Button type="submit" value="Log in" />
        </form>
      </main>
    </div>
  );
}