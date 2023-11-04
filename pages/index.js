// src/pages/index.js
import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from 'next/image';
import room1Image from '../public/room1.jpg'; // Assuming the path is correct
import room2Image from '../public/room2.jpg'; // Assuming the path is correct

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>My Hotel</title>
        <meta name="description" content="Welcome to Our Hotel" />
        {/* Add any additional head tags here */}
      </Head>
      <main>
        {/* Hero Section */}
        <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(234, 215, 192, 0.5), rgba(108, 139, 163, 0.5)), url('/hero-img.jpg')` }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Welcome to our Hotel</h1>
            <p>Experience luxury and comfort.</p>
          </div>
        </div>

        {/* Main Content */}
        <section className="featured-rooms">
          <h2>Our Premium Accommodations</h2>
          <div className="room-grid">
            {/* Room 1 */}
            <div className="room">
              <Image src={room1Image} alt="Deluxe Room" width={500} height={300} />
              <h3>Deluxe Room</h3>
              <p>
                Experience luxury with our deluxe rooms, featuring king-sized
                beds, modern decor, and stunning views.
              </p>
              <button>Learn More</button>
            </div>
            {/* Room 2 */}
            <div className="room">
              <Image src={room2Image} alt="Executive Suite" width={500} height={300} />
              <h3>Executive Suite</h3>
              <p>
                Our executive suites provide ample space, comfort, and amenities
                to make your stay unforgettable.
              </p>
              <button>Learn More</button>
            </div>
            {/* More rooms can be added here */}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
