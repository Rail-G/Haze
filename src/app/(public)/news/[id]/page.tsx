'use client'
import NewsBlog from "@/components/newsBlog/NewsBlog"
import { useParams } from "next/navigation"

export default function NewsById() {
    const {id} = useParams()
    return (
        <NewsBlog id={Number(id)}/>
    )
}