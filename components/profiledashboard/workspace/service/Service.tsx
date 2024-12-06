import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ArrowLeft, Database, Layout, MoreVertical, Server, Share2, User2} from 'lucide-react'
import Link from "next/link";

interface Service {
    name: string
    timeAgo: string
    type: 'frontend' | 'backend' | 'database' | 'subworkspace'
}

const services: Service[] = [
    {
        name: "E-Commerces",
        timeAgo: "40 minutes ago",
        type: "frontend"
    },
    {
        name: "Portfolio",
        timeAgo: "26 minutes ago",
        type: "backend"
    },
    {
        name: "Angular",
        timeAgo: "15 hours ago",
        type: "database"
    },
    {
        name: "MongoDB",
        timeAgo: "2 days ago",
        type: "frontend"
    },
    {
        name: "Postgres",
        timeAgo: "26 minutes ago",
        type: "backend"
    },
    {
        name: "Spring-Microservice",
        timeAgo: "15 hours ago",
        type: "database"
    }
]

function getServiceIcon(type: Service['type']) {
    switch (type) {
        case 'frontend':
            return <Layout className="w-5 h-5 text-purple-600" />
        case 'backend':
            return <Server className="w-5 h-5 text-pink-600" />
        case 'database':
            return <Database className="w-5 h-5 text-orange-600" />
        case 'subworkspace':
            return <Share2 className="w-5 h-5 text-blue-600" />
    }
}

export default function Service() {
    return (
        <div className="container mx-auto py-6">
            <div className="flex items-center space-x-2 pb-6">
                <Link href="/workspace">
                    <ArrowLeft className="h-8 w-8 text-purple-500"/>
                </Link>

                <h1 className="text-3xl font-bold tracking-tight text-purple-500">
                    Workspace
                </h1>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                    <Select defaultValue="personal">
                        <SelectTrigger className="w-[200px]">
                            <User2 className="mr-2 h-4 w-4"/>
                            <SelectValue placeholder="Select Workspace"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="personal">Personal Workspace</SelectItem>
                            <SelectItem value="team">Team Workspace</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mb-4">
                    <h2 className="text-sm font-medium text-gray-500">Filter By:</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="bg-white">
                        <Layout className="mr-2 h-4 w-4"/>
                        Frontend
                    </Button>
                    <Button variant="outline" className="bg-white">
                        <Server className="mr-2 h-4 w-4"/>
                        Backend
                    </Button>
                    <Button variant="outline" className="bg-white">
                        <Database className="mr-2 h-4 w-4"/>
                        Database
                    </Button>
                    <Button variant="outline" className="bg-white">
                        <Share2 className="mr-2 h-4 w-4"/>
                        SubWorkspace
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {services.map((service, index) => (
                    <Link href="/workspace/service/microservice" key={index}>
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3">
                                {getServiceIcon(service.type)}
                                <div>
                                    <h3 className="font-medium">{service.name}</h3>
                                    <p className="text-sm text-gray-500">{service.timeAgo}</p>
                                </div>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreVertical className="h-4 w-4"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Share</DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    )
}

