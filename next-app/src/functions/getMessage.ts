"use server"

export const getMessage = async() => {
    const res = await fetch("http://0.0.0.0:8000/world")

    if (res.ok){
        return res.json()
    }
}
