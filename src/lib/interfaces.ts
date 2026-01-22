export interface OverviewData {
    totalItems: number,
    activeProjects: number,
    pendingTasks: number,
    usersOnline: number
}

export interface ItemData {
    id: string,
    name: string,
    sku: string,
    category: Category,
    price: number,
    costPerItem: number,
    stockQuantity: number,
    description: string,
    status: Status
}

export type Category = "Design" | "Development" | "Management" | "Product"
export type Status = "In Progress" | "Completed" | "On Hold" | "Pending"