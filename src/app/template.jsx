"use client"

import { usePathname } from "next/navigation"

export default function Template({ children }) {
    const pathname = usePathname()

    return (
        <div className="animate-appear">
            {/* <pre className="inline-block bg-muted px-2 py-1 rounded-lg">{pathname}</pre> */}
            {children}
        </div>
    )
}