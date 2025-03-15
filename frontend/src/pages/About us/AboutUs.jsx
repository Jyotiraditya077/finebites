import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h1>About FineBites</h1>
        <p>
          Welcome to <b>FineBites</b>, your trusted home delivery service that brings delicious food straight to your doorstep. 
          We partner with top restaurants and talented home chefs to offer you a diverse menu filled with flavors from around the world. 
          Our mission is to provide a seamless, high-quality dining experience from the comfort of your home.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>🍽️ <b>Quality Ingredients</b> – We ensure that every dish is made with the finest and freshest ingredients.</li>
          <li>🚀 <b>Fast & Reliable Delivery</b> – Your meals arrive hot and fresh, right on time.</li>
          <li>🌍 <b>Diverse Menu</b> – Enjoy a wide variety of cuisines, from local delicacies to international flavors.</li>
          <li>🛒 <b>Easy Ordering</b> – Simple, user-friendly interface for a hassle-free experience.</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>
          At <b>FineBites</b>, we are committed to ensuring a delightful food experience for every customer. Whether you’re craving comfort food, 
          healthy meals, or gourmet delights, we’ve got you covered. Our team works tirelessly to bring you the best food from your favorite restaurants, 
          prepared with love and delivered with care.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
