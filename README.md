# Dashboard Application

A modern React TypeScript dashboard for item management with real-time activity tracking and overview metrics.

---

## How to Run

### Prerequisites
- Node.js 18+ and npm installed

### Installation & Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
The application will be available at `http://localhost:5173` (or the next available port).

### Production Build
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## What Was Built

### Pages
- **Home** (`/`) - Main dashboard view with overview metrics, item management, and activity feed
- **Create Item** (`/create-item`) - Form page for adding new items to inventory

### Features

#### Dashboard Overview
- 4 metric cards displaying:
  - Total Items count
  - Active Projects count
  - Pending Tasks count
  - Users Online count
- Real-time metric values with formatted number display

#### Item Management
- Searchable table of inventory items (6 demo items included)
- Item properties: Name, SKU, Category, Status
- "Add New Item" button linking to create form
- Status badges with color-coded variants (Completed, In Progress, On Hold, Pending)

#### Recent Activities
- Timeline of recent user activities with timestamps
- Relative time display ("2 minutes ago", "1 hour ago", etc.)
- Mock activity data (6 recent activities)

#### Component Library
- **Button**: Reusable with outline, disabled, and invalid states
- **Input**: Search field with icon support
- **StatusDisplay**: Color-coded status badges
- **OverviewCard**: Metric card with title, icon, and formatted value

### Technology Stack
- **React 18** with TypeScript for type-safe component development
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for responsive, utility-first styling
- **React Router v7** for client-side navigation
- **React Icons** for consistent icon library

---

## Known Limitations

### Performance
1. **Expensive Time Calculations**: `timeSince()` function recalculates on every render
   - Impact: Noticeable lag with 100+ activity items
   - Solution: Use `Intl.RelativeTimeFormat` or implement memoization

2. **No List Virtualization**: All items render in DOM simultaneously
   - Impact: Performance degradation with 1000+ items
   - Solution: Implement virtual scrolling (e.g., react-window)

### Functionality
3. **Mock Data Only**: All data is placed in `lib/data.ts`
   - Impact: No API integration
   - Current: 6 demo items, 4 demo metrics, 6 demo activities

---

## No Broken States

### Verified Working
**Home Page** - Renders without errors, displays all metrics and data.

**Create Item Page** - Page loads and navigates correctly.

**Navigation** - Router links work between pages.

**Responsive Design** - Tailwind classes apply correctly, responsive on sm/md/lg breakpoints.

**Component Rendering** - All components render without type errors.

**TypeScript** - No type errors in build.

### Console Status
- No JavaScript errors on page load
- No missing dependencies
- No broken imports

### Current Safe to Deploy
The application is **functional and navigable** as-is for demonstration purposes. All UI renders correctly and navigation works as expected.

---

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── button.tsx
│   ├── input.tsx
│   ├── dashboard.tsx
│   ├── hero.tsx
│   ├── item-management.tsx
│   ├── overview-card.tsx
│   ├── recent-activities.tsx
│   └── status-display.tsx
├── pages/              # Route pages
│   ├── Home.tsx
│   └── CreateItem.tsx
├── lib/                # Utilities and constants
│   ├── constants.ts
│   ├── data.ts
│   ├── interfaces.ts
│   └── util.ts
└── main.tsx            # Entry point
```
