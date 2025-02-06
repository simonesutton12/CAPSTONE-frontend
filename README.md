The Personal Nutrition Plans app helps users generate personalized meal plans based on their weight. The app leverages the Spoonacular API to fetch meal data, including calorie counts and images, and allows users to select and manage their plans.

Features
Meal Plan Generation: Fetch personalized meal plans based on your weight.
Meal Plan Management: Add or remove meal plans from your list of selected plans.
Meal Images: View images for each meal to get a better idea of what you're eating.
Calories Information: See the calorie count for each meal to track your intake.
Technologies Used
React: A JavaScript library for building user interfaces.
Axios: A promise-based HTTP client for making API requests.
Spoonacular API: A food-related API used to fetch meal data, including nutrition facts and images.
CSS: For styling the app.

How to Use
Enter your weight in the input field (in kilograms).
Click the Fetch Meal Plans button to generate personalized meal plans based on your weight.
Browse through the generated meal plans, which include meal titles, calorie information, and images.
Click Add Plan to select a meal and add it to your list of selected plans.
Click Remove Plan to remove a selected meal plan.
API Reference
The app uses the Spoonacular Meal Planner API to fetch meal plans.

Endpoint Used:
GET https://api.spoonacular.com/mealplanner/generate
Parameters:

targetCalories: The target number of calories (calculated based on the user's weight).
timeFrame: The time frame for the meal plan (e.g., "day").
Note: You need to replace your_api_key_here with your actual Spoonacular API key in the .env file.


This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
The Spoonacular API for providing a comprehensive database of meals and nutritional information.
The React team for building an awesome JavaScript framework for building user interfaces.
