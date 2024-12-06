import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Database, GitBranch, MoreVertical, Play, Settings2 } from 'lucide-react'

interface MicroserviceCardProps {
    name: string
    description: string
    version: string
    dependencies: number
    technologies: string[]
}

export function SpringMicroservice({
                                     name,
                                     description,
                                     version,
                                     dependencies,
                                     technologies,
                                 }: MicroserviceCardProps) {
    return (
        <Card className="relative">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex flex-col space-y-1.5">
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Play className="mr-2 h-4 w-4" />
                            Deploy
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <GitBranch className="mr-2 h-4 w-4" />
                            View Git History
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings2 className="mr-2 h-4 w-4" />
                            Configure CI/CD
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-4 text-sm">
                    <div>
                        <span className="text-muted-foreground">Version</span>{" "}
                        <span className="font-medium">{version}</span>
                    </div>
                    <div>
                        <span className="text-muted-foreground">Dependencies</span>{" "}
                        <span className="font-medium">{dependencies}</span>
                    </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge
                            key={tech}
                            variant="secondary"
                            className={
                                tech === "Spring"
                                    ? "bg-green-100 text-green-700"
                                    : tech === "Spring JPA"
                                        ? "bg-blue-100 text-blue-700"
                                        : "bg-orange-100 text-orange-700"
                            }
                        >
                            {tech === "Database" ? <Database className="mr-1 h-3 w-3" /> : null}
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

