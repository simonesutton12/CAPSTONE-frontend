import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Nutrition Decision</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to Nutrition Decision, your go-to platform for personalized meal plans and healthy eating. Our mission is to help you achieve your health and fitness goals by providing customized meal plans based on your unique dietary needs and preferences.
        </p>
        <p>
          Whether you're looking to lose weight, gain muscle, or simply eat healthier, Nutrition Decision has got you covered. Our platform leverages the power of the Spoonacular API to generate meal plans that are tailored to your specific requirements.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Personalized meal plans based on your weight and dietary goals</li>
          <li>Detailed nutritional information for each meal</li>
          <li>Easy-to-follow recipes with step-by-step instructions</li>
          <li>Track your progress and update your profile as you achieve your goals</li>
        </ul>
        <h2>How It Works</h2>
        <p>
          Getting started with Nutrition Decision is easy. Simply enter your weight and select a meal plan that suits your needs. Our platform will generate a customized meal plan for you, complete with nutritional information and recipes. You can add the meal plan to your profile and track your progress over time.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback, feel free to reach out to us at <a href="mailto:support@nutritiondecision.com">support@nutritiondecision.com</a>. We'd love to hear from you!
        </p>
      </section>
    </div>
  );
};

export default About;