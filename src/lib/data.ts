import type { ItemData, OverviewData } from "./interfaces";

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
    description: "Complete brand guidelines including logo, typography, color palette, and usage standards.",
    status: "Pending"
  }
];

// ============ API SIMULATION UTILITIES ============

/**
 * Simulates API delay (200-800ms)
 * Use in components to simulate real network latency
 */
// export const simulateApiDelay = (min = 200, max = 800): Promise<void> => {
//   const delay = Math.random() * (max - min) + min;
//   return new Promise(resolve => setTimeout(resolve, delay));
// };

/**
 * Fetches items with simulated API behavior
 * Demonstrates: Loading, Success, Error states
 */
// export const fetchItems = async (shouldFail = false): Promise<ApiResponse<ItemData[]>> => {
//   await simulateApiDelay();
  
//   if (shouldFail) {
//     return {
//       success: false,
//       error: "Failed to fetch items. Please check your connection and try again.",
//       timestamp: new Date()
//     };
//   }

//   return {
//     success: true,
//     data: items,
//     timestamp: new Date()
//   };
// };

/**
 * Empty state simulation - returns no items
 */
// export const fetchEmptyItems = async (): Promise<ApiResponse<ItemData[]>> => {
//   await simulateApiDelay();
  
//   return {
//     success: true,
//     data: [],
//     timestamp: new Date()
//   };
// };

/**
 * Error state simulation - various error scenarios
 */
// export const fetchItemsWithError = async (errorType: "network" | "unauthorized" | "notfound" = "network"): Promise<ApiResponse<ItemData[]>> => {
//   await simulateApiDelay();
  
//   const errorMessages = {
//     network: "Network error: Unable to reach the server. Please try again later.",
//     unauthorized: "Unauthorized: You don't have permission to access this resource.",
//     notfound: "Not found: The requested items could not be found."
//   };

//   return {
//     success: false,
//     error: errorMessages[errorType],
//     timestamp: new Date()
//   };
// };
