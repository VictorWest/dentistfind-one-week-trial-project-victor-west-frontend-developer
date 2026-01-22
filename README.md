# 1-WEEK TRIAL DAY 3 TASKS

## Project Bootstrapping

### ✅ Subtask 1: Justification for tooling choice
This project uses Vite for tooling, because it is pltform-agnostic, great with Typescript support and it has a good Developer Experience. 



- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### ✅ Subtask 2: Single-command startup
```bash
npm run dev
```
Starts the development server with HMR enabled. Application runs immediately with full TypeScript and hot module replacement support.

## Type Safety & Architecture

### ✅ Core TypeScript Models Defined
All models are defined in [`src/lib/interfaces.ts`](src/lib/interfaces.ts) with strict typing—**no `any` types**.

**Models Include:**
- **Entities**: `ItemData`, `OverviewData`
- **Enums**: `Category`, `ItemStatus` (stricter than union types)
- **Forms**: `ItemFormData` (excludes server-managed fields), `FormErrors`
- **API**: `ApiResponse<T>` (generic, reusable across all endpoints)
- **Search**: `SearchFilter`, `SearchResult`
- **Component Props**: `ItemCardProps`, `ItemListProps`, `ItemFormProps`

**Type Reusability:**
- All components import from `interfaces.ts` exclusively
- Props interfaces match component signatures exactly
- Generic types (`ApiResponse<T>`) support multiple response shapes
- Enums provide IDE autocomplete and refactoring safety

## Mock Data & API Simulation

### ✅ Realistic Mock Data (No Lorem Ipsum)
Mock data is defined in [`src/lib/data.ts`](src/lib/data.ts) with realistic, production-like values:

**Sample Items:**
- UI Design Kit v2.0 - $2,500 (34 units)
- React Dashboard Development - $5,800 (12 units)
- Project Management SaaS - $3,500 (5 units)
- Product Strategy Guide - $1,500 (28 units)
- TypeScript Migration Service - $4,200 (8 units)
- Brand Identity System - $3,200 (15 units)

Each item includes: ID, SKU patterns, category, pricing, stock quantity, and descriptive copy.

### ✅ API State Simulation
Three utility functions simulate real API behavior:

**1. Loading State** - `simulateApiDelay(min, max)`
```typescript
// Simulates network latency (default 200-800ms)
await simulateApiDelay();
```

**2. Empty State** - `fetchEmptyItems()`
```typescript
// Returns success response with empty array
const response = await fetchEmptyItems();
// Perfect for testing "No items found" UI
```

**3. Error State** - `fetchItemsWithError(errorType)`
```typescript
// Simulates three error scenarios:
// - "network": Network error
// - "unauthorized": Permission denied
// - "notfound": Resource not found

const response = await fetchItemsWithError("network");
```

**Usage in Components:**
```typescript
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string>();
const [items, setItems] = useState<ItemData[]>();

useEffect(() => {
  setIsLoading(true);
  fetchItems() // or fetchEmptyItems() or fetchItemsWithError()
    .then(response => {
      if (response.success && response.data) {
        setItems(response.data);
      } else {
        setError(response.error);
      }
    })
    .finally(() => setIsLoading(false));
}, []);
```

## List & Dashboard View

### ✅ Clear Visual Hierarchy
**Typography Levels:**
- Headings (2xl, bold) for page titles
- Subheadings (lg, semibold) for section breaks
- Body text (base, regular) for primary content
- Metadata (sm, gray-500) for timestamps and secondary info
- Actions (sm, blue-600) for interactive elements

**Color Structure:**
Primary content in dark gray/black, secondary details in medium gray, metadata in light gray, and actions in brand blue. This creates natural focus areas for users scanning the list.

### ✅ Responsive Layout
Built with mobile-first approach using Tailwind's responsive prefixes. Single-column layout on mobile phones, 2-column on tablets, and 3-column grid on desktop. Search and filter controls stack vertically on mobile, arranged horizontally on larger screens. All interactive elements remain easily tappable on touch devices.

### ✅ Spacing & Typography Standards
Consistent 4-point spacing scale (multiples of 4px/0.25rem) for all margins and padding. Gap between list items is 16px. Sections separated by 24px. Font sizes progress from 12px (metadata) to 24px (main headings). Line height adjusted per content type—tight for headings, normal for body, relaxed for descriptions.

### ✅ State Management
Loading states use skeleton placeholders to maintain layout stability. Empty states display centered messaging with clear next actions (e.g., "Add First Item" button). Hover effects on list items provide subtle visual feedback. Status badges use color coding (green for completed, orange for in-progress, gray for on-hold).

### ✅ Component Organization
ListView handles orchestration and state. ViewHeader contains title and top-level actions. SearchBar provides filtering. ListContainer wraps individual ListItem components. Separate EmptyState and LoadingState components render conditionally. Each component has focused, single responsibility.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
