import React, { useRef, useEffect } from "react";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const segmentSeconds = 60;

    function onTimeUpdate() {
      const maxTime =
        v.duration && !isNaN(v.duration)
          ? Math.min(segmentSeconds, v.duration)
          : segmentSeconds;

      if (v.currentTime >= maxTime) {
        v.currentTime = 0;
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      }
    }

    v.addEventListener("timeupdate", onTimeUpdate);

    v.muted = true;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});

    return () => v.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  return (
    <section className="home container">

      {/* Top Words */}
      <div className="top-words fade-slide-down">
        <div className="top-words-inner">
          <p className="top-words-text">Innovate · Build · Deliver</p>
        </div>
      </div>

      <div className="home-content">

        <h2 className="fade-slide-up">Welcome to TechBuild Group</h2>
        <h3 className="subtitle fade-slide-up">
          The craft of creating the future
        </h3>

        {/* Video Section */}
        <div className="video-crop fade-in">
          <video
            ref={videoRef}
            className="home-inline-video"
            autoPlay
            muted
            playsInline
            preload="auto"
          >
            <source src="/video/3D_walkthrough.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Discussion Section */}
        <div className="discussion-section fade-in" style={{ marginTop: "40px" }}>
          <p className="discussion-text">
            TechBuild Group specializes in visionary architectural design including
            transforming ideas into compelling spaces through innovative concepts,
            detailed 3D visualizations, and thoughtful planning. We combine
            creativity, technical expertise, and design insight to craft
            environments that inspire and elevate everyday experiences.
          </p>

          <ul className="service-list enhanced-list">
            <li>architectural design</li>
            <li>interior design</li>
            <li>3D visualisation</li>
            <li>landscape design</li>
          </ul>
        </div>

        {/* IMAGE LEFT + TEXT RIGHT SECTION (Civil Engineering) */}
        <div
          className="split-section fade-slide-left"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            marginTop: "50px",
          }}
        >
          {/* Left Image */}
          <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <img
              src="/images/civil2.PNG"
              alt="Civil Engineering"
              style={{
                width: "65%",
                borderRadius: "10px",
                objectFit: "cover",
                boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
              }}
            />
          </div>

          {/* Right Text */}
          <div style={{ flex: "1" }}>
            <p className="lead">
              At TechBuild Group, every project begins with understanding the
              client’s vision. Before bringing ideas to life, our experts discuss
              design goals, site conditions, budget expectations, and the
              technical roadmap that will guide the entire construction process.
            </p>

            <ul className="service-list enhanced-list">
              <li>structural design</li>
              <li>BOQ</li>
              <li>MEP (mechanical, electrical, plumbing)</li>
              <li>geotechnical investigation</li>
              <li>topographic works</li>
            </ul>
          </div>
        </div>

        {/* NEW SERVICE SECTION */}
        <div
          className="split-section fade-slide-right"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            marginTop: "70px",
            flexDirection: "row-reverse",
          }}
        >
          {/* Right Image */}
          <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <img
              src="/images/swe.jpg"
              alt="Architectural Innovation"
              style={{
                width: "75%",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
              }}
            />
          </div>

          {/* Left Text */}
          <div style={{ flex: "1" }}>
            <p className="lead">
              At TechBuild Group, we transform ideas into intelligent software
              solutions. Every system we design is guided by careful planning,
              scalable architecture, and innovative thinking,ensuring your
              vision becomes a robust, efficient, and future-ready digital
              experience.
            </p>

            <ul className="service-list enhanced-list">
              <li>concept development</li>
              <li>sustainable software design</li>
              <li>software development</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
