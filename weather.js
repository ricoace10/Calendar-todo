window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector(".weather");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  let weatherType = "none";

  function createParticlesForSnow() {
    const particleCount = 300;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.2 + 1,
        direction: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }
  }

  function createParticlesForRain() {
    const particleCount = 1000;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 0.5,
        speed: Math.random() * 5 + 1,
        direction: Math.PI / 2,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }
  }

  function createParticles(weather) {
    particles = [];
    if (weather === "snow") {
      createParticlesForSnow();
    } else if (weather === "rain") {
      createParticlesForRain();
    }
  }

  function updateParticleMovement() {
    particles.forEach((particle) => {
      particle.y += particle.speed;
      if (weatherType === "snow") {
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      } else {
        particle.x += Math.sin(particle.direction);
        if (
          particle.y > canvas.height ||
          particle.x > canvas.width ||
          particle.x < 0
        ) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      }
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = weatherType === "snow" ? "white" : "#89CFF0";

    particles.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 4, Math.PI * 2);
      ctx.closePath();
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
    });
  }

const clouds = [];

function initializeClouds() {
  for (let i = 0; i < 5; i++) {
    const cloudSize = Math.random() * 50 + 30; 
    const cloudX = Math.random() * canvas.width;
    const cloudY = Math.random() * canvas.height * 0.4; 

    clouds.push({
      x: cloudX,
      y: cloudY,
      size: cloudSize,
      speed: Math.random() * 0.5 + 0.1, 
    });
  }
}

function updateCloudMovement() {
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].x += clouds[i].speed;

    if (clouds[i].x > canvas.width + clouds[i].size) {
      clouds[i].x = -clouds[i].size;
    }
  }
}

function drawClouds() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";

  for (let i = 0; i < clouds.length; i++) {
    const { x, y, size } = clouds[i];

    ctx.beginPath();
    ctx.arc(x, y, size / 2, 1, Math.PI * 2);
    ctx.arc(x + size * 0.25, y - size * 0.15, size / 2, 0, Math.PI * 2);
    ctx.arc(x + size * 0.59, y, size / 2, 0, Math.PI * 2);
    ctx.arc(x + size * 0.25, y + size * 0.15, size / 2, 0, Math.PI * 2);
    ctx.arc(x + size * 0.6, y + size * 0.15, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}


function animateWeather() {
  drawParticles();
  updateParticleMovement();
  if (weatherType === "none") {
    drawClouds(); 
    updateCloudMovement(); 
  }
  requestAnimationFrame(animateWeather);
}

initializeClouds();
animateWeather(); 

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles(weatherType);
  });

  async function fetchWeather() {
/*     const apiKey = "04cefb85cb8ecd887ad8e9600dddc436"; */
    const location = "gothenburg";

    try {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`
      );
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.info);
      }

      const weatherDescription =
        data.current.weather_descriptions[0].toLowerCase();

      if (weatherDescription.includes("snow")) {
        weatherType = "snow";
      } else if (weatherDescription.includes("rain")) {
        weatherType = "rain";
      } else {
        weatherType = "none";
      }

      createParticles(weatherType);

      const temperatureCelsius = data.current.temperature;
      const weatherText = `${weatherDescription} ${temperatureCelsius}°C`;
      const locationWeather = document.querySelector(".location-weather");
      locationWeather.textContent = weatherText;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      const locationWeather = document.querySelector(".location-weather");
      locationWeather.textContent = "Failed to fetch weather";
    }
  }

  window.onload = fetchWeather;
});
