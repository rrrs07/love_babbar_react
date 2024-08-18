import React, { createContext, useReducer } from 'react';
import { initialDashboard } from './dashboardData';

const DashboardContext = createContext();

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category => 
          category.id === action.payload.categoryId ? {
            ...category,
            widgets: [...category.widgets, action.payload.widget]
          } : category
        )
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category => 
          category.id === action.payload.categoryId ? {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
          } : category
        )
      };
    default:
      return state;
  }
};

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialDashboard);
  
  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
