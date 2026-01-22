import type { ItemData, OverviewData } from "./interfaces";

export const mockOverviewData: OverviewData = {
  totalItems: 1234,
  activeProjects: 12,
  pendingTasks: 19,
  usersOnline: 7
}

export const items: ItemData[] = [
  {
    name: "UI Design Kit",
    sku: "DSN-UI-001",
    category: "Design",
    price: 120,
    costPerItem: 65,
    stockQuantity: 34,
    description: "Reusable UI components and design assets for web projects.",
    status: "Completed"
  },
  {
    name: "Landing Page Development",
    sku: "DEV-LP-014",
    category: "Development",
    price: 450,
    costPerItem: 280,
    stockQuantity: 12,
    description: "Responsive landing page built with React and Tailwind.",
    status: "In Progress"
  },
  {
    name: "Project Management Template",
    sku: "MGT-PM-007",
    category: "Management",
    price: 75,
    costPerItem: 30,
    stockQuantity: 50,
    description: "Agile-friendly project tracking and reporting template.",
    status: "Completed"
  },
  {
    name: "Product Roadmap Planner",
    sku: "PRD-RM-003",
    category: "Product",
    price: 95,
    costPerItem: 40,
    stockQuantity: 18,
    description: "Strategic roadmap planner for early-stage products.",
    status: "Pending"
  },
  {
    name: "Admin Dashboard Module",
    sku: "DEV-ADM-021",
    category: "Development",
    price: 600,
    costPerItem: 410,
    stockQuantity: 6,
    description: "Customizable admin dashboard with charts and analytics.",
    status: "On Hold"
  },
  {
    name: "Brand Identity Pack",
    sku: "DSN-BRD-009",
    category: "Design",
    price: 180,
    costPerItem: 90,
    stockQuantity: 22,
    description: "Logo, typography, and color system for brands.",
    status: "In Progress"
  },
  {
    name: "Sprint Planning Toolkit",
    sku: "MGT-SPR-011",
    category: "Management",
    price: 60,
    costPerItem: 25,
    stockQuantity: 40,
    description: "Tools and docs for efficient sprint planning sessions.",
    status: "Completed"
  },
  {
    name: "MVP Feature Specification",
    sku: "PRD-MVP-005",
    category: "Product",
    price: 110,
    costPerItem: 55,
    stockQuantity: 15,
    description: "Detailed feature specs for minimum viable products.",
    status: "Pending"
  }
]
