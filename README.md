# 📅 Booking App - Stylist Session Booking

A modern, fully functional booking page built with Next.js 15, TypeScript, and Tailwind CSS. This application allows users to book sessions by selecting a date and time with a beautiful, responsive UI that adapts perfectly to mobile and desktop devices.


## 🚀 Live Demo

**[View Live Application](https://booking-app-smoky-eight.vercel.app/)**

Experience the full functionality of the Booking App application deployed on Vercel.

## ✨ Features

### 📱 Mobile-First Design
- **Hero Section**: Orange gradient background with session info and stylist image
- **Overlapping Card**: White booking card with rounded top corners
- **Full-screen Experience**: Optimized for mobile devices
- **Touch-friendly**: Large touch targets and smooth scrolling

### 🖥️ Desktop Experience
- **Centered Layout**: Card centered on page with shadow
- **Profile Image**: Circular stylist avatar in header
- **Clean Interface**: Professional desktop layout

### 📆 Date Selection
- **42-day range**: Displays dates from today to 6 weeks ahead
- **Dynamic months**: Shows current and future months automatically
- **Visual feedback**: Current date and selected date are highlighted
- **Horizontal scroll**: Smooth scrolling with arrow navigation
- **Responsive design**: Works perfectly on mobile, tablet, and desktop

### ⏰ Time Selection
- **96 time slots**: 15-minute intervals from 00:00 to 23:45
- **Smart disabling**: Past time slots are automatically disabled
- **12-hour format**: User-friendly time display (e.g., "1:15 PM")
- **Horizontal scroll**: Easy navigation through available times

### ✅ Confirmation
- **Smart button**: Only enabled when both date and time are selected
- **Console output**: Logs UNIX timestamp on confirmation
- **Clear feedback**: Visual states for all interactions

### ♿ Accessibility
- **Keyboard navigation**: Keyboard support
- **ARIA labels**: Proper accessibility attributes
- **Focus management**: Clear focus indicators
- **Screen reader friendly**: Semantic HTML structure

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <https://github.com/Vadim-Milanko/booking-app.git>
cd booking-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
booking-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── BookingCard.tsx     # Main booking component
│   │   ├── DateCard.tsx        # Individual date card
│   │   ├── TimeSlotButton.tsx  # Time slot button
│   │   └── ScrollableList.tsx  # Horizontal scroll container
│   ├── icons/
│   │   ├── ChevronLeft.tsx     # Left arrow icon
│   │   ├── ChevronRight.tsx    # Right arrow icon
│   │   └── ClockIcon.tsx       # Clock icon
│   └── utils/
│       └── dateUtils.ts        # Date/time utilities
├── public/
│   ├── desktop-icon.png        # Desktop stylist image
│   └── mobile-icon.png         # Mobile stylist image
├── package.json
├── tsconfig.json
└── README.md
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🔍 Key Components

### BookingCard
Main component that manages the booking state and coordinates all child components. Features responsive design with mobile hero section and desktop layout.

### DateCard
Displays individual date with day of week and day of month. Highlights today and selected date with pink background.

### TimeSlotButton
Shows individual time slots with disabled state for past times. Rounded corners and hover effects.

### ScrollableList
Reusable horizontal scroll container with arrow navigation. Smooth scrolling and responsive arrow visibility.

### Icon Components
- **ChevronLeft/Right**: Navigation arrows for scrolling
- **ClockIcon**: Clock icon for session duration display
