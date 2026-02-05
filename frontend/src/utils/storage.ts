export function setStorageItem(key: string, value: unknown){
    if(typeof window === "undefined") return

    localStorage.setItem(key, JSON.stringify(value))
}

export function getStorageItem(key: string){
    if(typeof window === "undefined") return
        
    let saved = localStorage.getItem(key)
    if(saved){
        return JSON.parse(saved)
    }
}