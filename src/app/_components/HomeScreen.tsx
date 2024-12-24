"use client"
import { useState, useEffect } from "react";

export const Homescreen =() => {
    const [isLoading, setIsLoading] = useState(true)
    const [title, setTitle] = useState("")
    type Movie = {
        name: string;
      
    }
    const movie: Movie = {
        name: ""
    }
    // isLoading(false)
    return <>
    <div className="w-100% h-[606.5px]">

    </div>
    </>
}