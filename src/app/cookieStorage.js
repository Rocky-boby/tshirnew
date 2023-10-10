import Cookies from 'js-cookie';

// Function to save Redux state in a cookie
export const saveStateToCookie = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    Cookies.set('CartItem', serializedState);
  } catch (error) {
    // Handle errors (e.g., cookie storage failure)
    console.error('Error saving state to cookie:', error);
  }
};

// Function to load Redux state from a cookie
export const loadStateFromCookie = () => {
  try {
    const serializedState = Cookies.get('CartItem');
    if (serializedState === undefined) {
      return undefined; // No saved state found
    }
    return JSON.parse(serializedState);
  } catch (error) {
    // Handle errors (e.g., deserialization failure)
    console.error('Error loading state from cookie:', error);
    return undefined;
  }
};
