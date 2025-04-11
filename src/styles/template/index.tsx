import Footer from "@/components/footer"
import NavBar from "@/components/navbar"
import { FC, ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

const RootStructure: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
                <main className="flex-grow">{ children }</main>
            <Footer />
        </div>
    )
}

export default RootStructure