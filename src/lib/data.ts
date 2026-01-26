import type { ItemData, OverviewData, RecentActivity } from "./interfaces";

export const mockOverviewData: OverviewData = {
  totalItems: 1234,
  activeProjects: 12,
  pendingTasks: 19,
  usersOnline: 7
};

export const items: ItemData[] = [
  {
    id: "item-001",
    name: "UI Design Kit v2.0",
    sku: "DSN-UI-001",
    category: "Design",
    price: 2500,
    costPerItem: 1200,
    stockQuantity: 34,
    supplier: "Mark Fugi",
    description: "Comprehensive design system with 200+ components for enterprise web applications.",
    status: "Completed"
  },
  {
    id: "item-002",
    name: "React Dashboard Development",
    sku: "DEV-DB-042",
    category: "Development",
    price: 5800,
    costPerItem: 3200,
    stockQuantity: 12,
    supplier: "Mark Fugi",
    description: "Full-featured analytics dashboard with real-time data visualization and custom widgets.",
    status: "In Progress",
  },
  {
    id: "item-003",
    name: "Project Management SaaS",
    sku: "MGT-PM-007",
    category: "Management",
    price: 3500,
    costPerItem: 1800,
    stockQuantity: 5,
    supplier: "Mark Fugi",
    description: "Agile project management platform with Kanban boards, resource allocation, and reporting.",
    status: "Completed"
  },
  {
    id: "item-004",
    name: "Product Strategy Guide",
    sku: "PRD-SG-015",
    category: "Product",
    price: 1500,
    costPerItem: 600,
    stockQuantity: 28,
    supplier: "Mark Fugi",
    description: "Step-by-step guide for building go-to-market strategy and product roadmaps.",
    status: "On Hold"
  },
  {
    id: "item-005",
    name: "TypeScript Migration Service",
    sku: "DEV-TS-089",
    category: "Development",
    price: 4200,
    costPerItem: 2100,
    stockQuantity: 8,
    supplier: "Mark Fugi",
    description: "Migrate legacy JavaScript codebases to TypeScript with full type coverage.",
    status: "In Progress"
  },
  {
    id: "item-006",
    name: "Brand Identity System",
    sku: "DSN-BIS-021",
    category: "Design",
    price: 3200,
    costPerItem: 1500,
    stockQuantity: 15,
    supplier: "Mark Fugi",
    description: "Complete brand guidelines including logo, typography, color palette, and usage standards.",
    status: "Pending"
  }
];

export const mockRecentActivities: RecentActivity[] = [
    {
        description: "Uploaded new project files",
        createdAt: new Date("2026-01-25T09:15:00")
    },
    {
        description: "Updated profile information",
        createdAt: new Date("2026-01-24T16:42:00")
    },
    {
        description: "Commented on 'Frontend Optimization Tips'",
        createdAt: new Date("2026-01-24T14:30:00")
    },
    {
        description: "Completed the 'React Hooks Tutorial'",
        createdAt: new Date("2026-01-23T18:05:00")
    },
    {
        description: "Started a new task: 'Design Homepage UI'",
        createdAt: new Date("2026-01-23T10:20:00")
    },
    {
        description: "Deleted old draft documents",
        createdAt: new Date("2026-01-22T22:15:00")
    },
    {
        description: "Joined the 'Web Developers' group",
        createdAt: new Date("2026-01-22T08:50:00")
    }
];