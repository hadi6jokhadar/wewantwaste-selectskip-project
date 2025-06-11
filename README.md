# WeWantWaste - Skip Selection Project

A React TypeScript application for managing waste collection skip selection with a multi-step wizard interface.

## 🚀 Features

- **Multi-step wizard**: Navigate through waste type selection, skip selection, and permit checking
- **Interactive skip cards**: Browse available skips with size-based imagery and pricing
- **Persistent selection**: Selected skip data is stored in localStorage
- **Route validation**: Smart navigation with accessibility controls
- **Responsive design**: Built with SCSS for modern, mobile-friendly UI
- **Real-time data**: Fetches skip availability from WeWantWaste API

## 🛠️ Tech Stack

- **React 19.1.0** with TypeScript
- **React Router DOM 7.6.2** for navigation
- **SCSS/Sass** for styling
- **Custom hooks** for data fetching and state management
- **Singleton service pattern** for global state management

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd wewantwaste-selectskip-project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── item/           # Skip item card components
│   └── stepper/        # Multi-step navigation
├── features/           # Page-level components
│   ├── waste type/     # Step 1: Waste type selection
│   ├── select skip/    # Step 2: Skip selection
│   └── permit check/   # Step 3: Permit verification
├── hooks/              # Custom React hooks
├── services/           # API services and global state
├── utils/              # Utility functions and route validation
└── styles/             # Global SCSS variables and styles
```

## 🎯 Application Flow

1. **Waste Type** (`/weste-type`): Initial step for waste type selection
2. **Select Skip** (`/select-skip`): Browse and select available skips
3. **Permit Check** (`/permit-check`): Verify permit requirements (only accessible after skip selection)

## 🔧 Key Components

### GlobalService

Singleton service managing:

- Step navigation and accessibility
- Skip selection state with localStorage persistence
- Route validation logic

### ItemCard

Interactive component featuring:

- Skip browsing with previous/next navigation
- Visual size indicators (small/medium/large)
- Two-click selection (select → confirm)
- Price calculation with VAT

### Stepper

Navigation component providing:

- Visual progress indication
- Step accessibility based on completion status
- Click-to-navigate functionality

## 🌐 API Integration

The application integrates with the WeWantWaste API:

- **Endpoint**: `https://app.wewantwaste.co.uk/api/skips/by-location`
- **Parameters**: postcode, area
- **Default**: NR32, Lowestoft

## 📱 Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`

Builds the app for production to the `build` folder with optimized bundles

### `npm run eject`

⚠️ **One-way operation**: Ejects from Create React App for full configuration control

## 🎨 Styling

- **SCSS modules** for component-specific styles
- **Global variables** in `_variables.scss`
- **FontAwesome icons** for UI elements
- **Responsive design** principles

## 💾 Data Persistence

- Selected skip data persists across browser sessions using localStorage
- Route accessibility is maintained based on selection state
- Automatic data restoration on application reload

## 🚦 Route Protection

- Smart route validation prevents accessing incomplete steps
- Automatic redirection to appropriate steps based on completion status
- Step accessibility updates dynamically based on user progress

## 🏗️ Architecture Patterns

### Singleton Pattern

- `GlobalService` ensures single source of truth for application state
- Persistent data management across components

### Custom Hooks

- `useGetItems`: Fetches and manages skip data from API
- `useRouteValidator`: Handles route protection and validation

### Component Composition

- Modular component structure for maintainability
- Clear separation of concerns between UI and business logic

## 🔄 State Management

The application uses a combination of:

- **React hooks** for local component state
- **GlobalService singleton** for application-wide state
- **localStorage** for data persistence
- **React Router** for navigation state

## 🎯 User Experience Features

- **Progressive disclosure**: Steps unlock as user progresses
- **Visual feedback**: Clear indication of selection status
- **Accessibility**: ARIA-compliant navigation and controls
- **Mobile-responsive**: Touch-friendly interface for all devices

## 📄 License

This project is public.

## 🛠️ Built With

- [Create React App](https://github.com/facebook/create-react-app) - Application bootstrapping
- [React Router](https://reactrouter.com/) - Client-side routing
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Sass](https://sass-lang.com/) - CSS preprocessing

## 📞 Support

For questions or support, please contact the development team. @ https://github.com/hadi6jokhadar
