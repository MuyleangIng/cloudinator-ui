"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    Node,
    NodeTypes,
    Edge,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    ConnectionMode
} from 'reactflow';
import 'reactflow/dist/style.css';

// Sample services data
const services = [
    { value: "User Service", label: "User Service" },
    { value: "Product Service", label: "Product Service" },
    { value: "Order Service", label: "Order Service" },
    { value: "Payment Service", label: "Payment Service" },
    { value: "Notification Service", label: "Notification Service" },
    { value: "Review Service", label: "Review Service" },
];

// Custom node component
const ServiceNode = ({ data }: { data: { label: string } }) => {
    return (
        <div className="bg-purple-500 text-white p-2 rounded-md shadow-md">
            {data.label}
        </div>
    );
};

const nodeTypes: NodeTypes = {
    serviceNode: ServiceNode,
};

export function ServiceCreationFlow() {
    const [open, setOpen] = React.useState(false);
    const [selectedServices, setSelectedServices] = React.useState<string[]>([]);

    // Use useNodesState and useEdgesState hooks for managing nodes and edges
    const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);

    const toggleService = (value: string) => {
        setSelectedServices((current) =>
            current.includes(value)
                ? current.filter((item) => item !== value)
                : [...current, value]
        );
    };

    const addServiceToFlow = () => {
        if (selectedServices.length > 0) {
            const newNodes: Node[] = selectedServices.map((service, index) => ({
                id: service,
                type: 'serviceNode',
                data: { label: service },
                position: {
                    x: 100 + index * 200, // Adjust position as needed
                    y: 100
                },
            }));

            setNodes((prevNodes) => [...prevNodes, ...newNodes]);
            setSelectedServices([]); // Clear selected services after adding
            setOpen(false); // Close the popover
        }
    };

    // Modify the connection handler to use addEdge
    const onConnect = React.useCallback((connection: Connection) => {
        setEdges((eds) => addEdge(
            {
                ...connection,
                type: 'default',
                animated: true,
                style: { stroke: 'purple' }
            },
            eds
        ));
    }, []);

    return (
        <div className="flex flex-col gap-4 pb-4">
            <div className="rounded-lg border border-purple-300 bg-white text-purple-600 p-4">
                <p className="text-sm text-muted-foreground">Selected services:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                    {selectedServices.length === 0 ? (
                        <div className="text-sm text-gray-500">No services selected.</div>
                    ) : (
                        selectedServices.map((value) => (
                            <div
                                key={value}
                                className="rounded-md bg-purple-100 px-2 py-1 text-sm text-purple-600"
                            >
                                {services.find((service) => service.value === value)?.label}
                            </div>
                        ))
                    )}
                </div>
            </div>

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between border-purple-500 text-purple-500 hover:bg-purple-100"
                    >
                        {selectedServices.length === 0
                            ? "Select services..."
                            : `${selectedServices.length} service${
                                selectedServices.length === 1 ? "" : "s"
                            } selected`}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="center" className="w-full min-w-[--trigger-width] p-0">
                    <Command>
                        <CommandEmpty>No services found.</CommandEmpty>
                        <CommandGroup>
                            {services.map((service) => (
                                <CommandItem
                                    key={service.value}
                                    onSelect={() => toggleService(service.value)}
                                    className="flex items-center gap-2 text-purple-600 hover:bg-purple-100"
                                >
                                    {service.label}
                                    {selectedServices.includes(service.value) && (
                                        <Check className="ml-auto h-4 w-4 text-purple-600" />
                                    )}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>

            {/* Button to add selected services to flow */}
            <Button
                onClick={addServiceToFlow}
                disabled={selectedServices.length === 0}
                className="bg-purple-500 text-white hover:bg-purple-400 disabled:opacity-50"
            >
                Add Selected Services to Flow
            </Button>

            {/* Render the React Flow diagram */}
            <div className="h-96 w-full border border-purple-300">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    connectionMode={ConnectionMode.Loose}
                    fitView
                >
                    <MiniMap />
                    <Controls />
                    <Controls />
                    <Background />
                </ReactFlow>
            </div>
        </div>
    );
}