export interface OverviewData {
    totalItems: number,
    activeProjects: number,
    pendingTasks: number,
    usersOnline: number
}

export interface ItemData {
    id: string | number,
    name: string,
    sku: string,
    category: Category,
    price: number,
    costPerItem: number,
    stockQuantity: number,
    description: string,
    supplier: string,
    status: Status
}

export interface FormErrors {
    name?: string;
    price?: string;
    stockQuantity?: string;
    supplier?: string;
}

export type Category = "Design" | "Development" | "Management" | "Product"
export const CATEGORIES: Category[] = [
  "Design",
  "Development",
  "Management",
  "Product",
];

export type Status = "In Progress" | "Completed" | "On Hold" | "Pending"

export interface RecentActivity {
    description: string,
    createdAt: Date
}