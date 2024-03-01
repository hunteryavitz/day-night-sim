const body = document.body;
const celestial = document.getElementById('celestial');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

let cycle = 0; // 0 to 1, where 0 is the start of the cycle (night) and 1 is the midpoint (day)

let degrees = 0; // Starting rotation in degrees

function updateScene() {
  // Update cycle
  cycle += 0.001;
  if (cycle >= 5) {
    cycle = 0;
  } 
  // Calculate and set background color
  let color;
  if (cycle < 1) {
    // Night to day
    const r = Math.min(255, cycle * 255); // Red
    const g = Math.min(255, cycle * 255); // Green
    const b = 255; // Blue
    color = `rgb(${r},${g},${b})`;
  } else {
    // Day to night
    const r = 255 - (cycle - 1) * 255; // Red
    const g = 255 - (cycle - 1) * 255; // Green
    const b = 0; // Blue
    color = `rgb(${r},${g},${b})`;
  }
  body.style.backgroundColor = color;

  // Update sun and moon positions
  // const sunCycle = cycle < 1 ? cycle : 0;
  // const moonCycle = cycle >= 1 ? cycle - 1 : 0;
  // sun.style.bottom = `${-50 + sunCycle * 100}px`; // Sun rises and sets
  // moon.style.bottom = `${-50 + moonCycle * 100}px`; // Moon rises and sets
  degrees += 0.05; // Increment the rotation
  if (degrees >= 360) degrees = 0; // Reset after a full rotation

  // Rotate the celestial div
  celestial.style.transform = `rotate(${degrees}deg)`;

  requestAnimationFrame(updateScene);
}

updateScene();
