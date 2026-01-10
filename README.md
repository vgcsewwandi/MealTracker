# Meal Planner & Calorie Tracker

A responsive web-based meal planner and calorie tracking system designed for maintaining healthy eating habits. This application allows users to log meals, track calorie intake, and visualize dietary patterns over time.

## Project Information

- **Group Number:** 02
- **Team Members:**
  - V.G.C.Sewwandi (UWU/BBST/22/036)
  - A.V.J.Mandari (UWU/BBST/22/021)
  - S.M.M.P.Sandanayaka (UWU/BBST/22/098)
- **Department:** Bio System Technology
- **Faculty:** Faculty of Technological Studies
- **University:** Uva Wellassa University

## Features

- ✅ Responsive design for PC, tablet, and mobile devices
- ✅ Daily calorie intake tracking
- ✅ Meal logging with categories (Breakfast, Lunch, Dinner, Snack)
- ✅ Food library with common Sri Lankan foods
- ✅ Visual analytics (Weekly and Monthly charts)
- ✅ Settings for calorie goals
- ✅ Data export/import in JSON format
- ✅ Local storage (no backend database required)

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript, Bootstrap 5.3
- **Data Storage:** LocalStorage (browser-based)
- **Charts:** Chart.js (for analytics)
- **Icons:** Bootstrap Icons

## Project Structure

```
meal-planner/
├── index.html          # Dashboard page
├── add-meal.html       # Add meal page
├── analytics.html      # Analytics page
├── settings.html       # Settings page
├── css/
│   └── style.css      # Custom styles
├── js/
│   ├── navigation.js  # Navigation handler
│   ├── dashboard.js   # Dashboard functionality
│   ├── add-meal.js    # Add meal functionality (Student 2)
│   ├── analytics.js   # Analytics charts (Student 3)
│   └── settings.js    # Settings functionality (Student 2)
└── data/
    └── food-library.json  # Default food library
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation

1. Clone or download this repository
2. Open `index.html` in a web browser, OR
3. Use a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```
4. Navigate to `http://localhost:8000` in your browser

## Development Phases

### Phase 1: Student 1 (Current) ✅
- Project structure setup
- HTML pages for all routes
- CSS styling with Bootstrap
- Navigation system
- Dashboard page with daily summary

### Phase 2: Student 2 (Pending)
- Add Meal functionality
- Food Library management
- Settings page (calorie goal, data management)
- Local storage implementation

### Phase 3: Student 3 (Pending)
- Analytics charts (Weekly and Monthly)
- Chart.js integration
- JSON export/import functionality
- Data visualization

## Usage

### Dashboard
- View daily calorie intake summary
- See today's logged meals
- Monitor progress toward daily goal

### Add Meal
- Select from food library or enter custom meal
- Choose meal category
- Enter meal name and calories
- Save meal to daily log

### Analytics
- View weekly intake trends
- View monthly calorie consumption patterns
- Compare intake vs. goals

### Settings
- Set daily calorie goal
- Manage food library (add, edit, delete foods)
- Export data as JSON
- Import data from JSON file
- Clear all data

## Data Storage

All data is stored locally in the browser's LocalStorage:
- `meals`: Array of meal entries
- `foodLibrary`: Array of food items
- `calorieGoal`: Daily calorie goal (default: 2000)

## Limitations

- Data is stored locally only (no cloud sync)
- Calorie values are approximate/demonstration purposes only
- Requires modern web browser
- No multi-user support
- No advanced nutritional analysis

## Future Enhancements

- Migration to React/Angular/Vue.js
- Backend database integration
- User authentication
- Advanced nutritional breakdown
- Meal planning and recipes
- Mobile app version

## Testing

1. Test meal logging functionality
2. Verify calorie calculations
3. Test data export/import
4. Validate responsive design on different devices
5. Test analytics charts with sample data

## License

This project is developed as part of an academic requirement.

## Contributors

- Student 1: UI/UX, Structure, Dashboard
- Student 2: Add Meal, Settings, Data Management
- Student 3: Analytics, Charts, Data Export/Import

