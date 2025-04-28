document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('#launchesDiv')) {
    fetchLaunches();
  }
  if (document.querySelector('#locationsDiv')) {
    fetchLocations();
  }
  if (document.querySelector('#spacecraftsDiv')) {
    fetchSpacecrafts();
  }

  const refreshBtn = document.getElementById('refreshBtn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', fetchLaunches);
  }
});

// ====== FETCH UPCOMING LAUNCHES ======
async function fetchLaunches() {
  const launchesDiv = document.getElementById('launchesDiv');
  launchesDiv.innerHTML = "<p>Loading launches...</p>";

  try {
    const response = await fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=10');
    const data = await response.json();
    displayLaunches(data.results);
  } catch (error) {
    launchesDiv.innerHTML = "<p>Failed to load launches. Try again later.</p>";
    console.error(error);
  }
}

function displayLaunches(launches) {
  const launchesDiv = document.getElementById('launchesDiv');
  launchesDiv.innerHTML = "";

  launches.forEach((launch, index) => {
    const launchDate = new Date(launch.net);

    const launchEl = document.createElement('div');
    launchEl.className = 'launch-card';
    launchEl.innerHTML = `
      <h3>${launch.name}</h3>
      <img src="${launch.image || 'https://via.placeholder.com/400x200?text=No+Image'}" alt="Launch Image" class="spacecraft-image">
      <p><strong>Agency:</strong> ${launch.launch_service_provider?.name || 'Unknown'}</p>
      <p><strong>Mission:</strong> ${launch.mission?.name || 'No Mission Name'}</p>
      <p><strong>Launch Date:</strong> ${launchDate.toLocaleString()}</p>
      <p id="countdown-${index}" class="countdown">⏳ Loading...</p>
    `;

    launchesDiv.appendChild(launchEl);
    startCountdown(`countdown-${index}`, launchDate);
  });
}

function startCountdown(elementId, targetDate) {
  const countdownEl = document.getElementById(elementId);
  let interval; 

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownEl.innerText = "🚀 Launched!";
      clearInterval(interval); // Now this will work correctly
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerText = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  interval = setInterval(updateCountdown, 1000); // Assign after declaration
  updateCountdown(); // Initial call to show immediately
}


// ====== FETCH LAUNCH LOCATIONS ======
async function fetchLocations() {
  const locationsDiv = document.getElementById('locationsDiv');
  locationsDiv.innerHTML = "<p>Loading locations...</p>";

  try {
    const response = await fetch('https://ll.thespacedevs.com/2.2.0/location/?limit=10');
    const data = await response.json();
    displayLocations(data.results);
  } catch (error) {
    locationsDiv.innerHTML = "<p>Failed to load locations. Try again later.</p>";
    console.error(error);
  }
}

function displayLocations(locations) {
  const locationsDiv = document.getElementById('locationsDiv');
  locationsDiv.innerHTML = "";

  locations.forEach(location => {
    const locationEl = document.createElement('div');
    locationEl.className = 'location-card';
    locationEl.innerHTML = `
      <div class="location-inner-grid">
        <div class="location-image">
          <img src="${location.map_image || 'https://via.placeholder.com/400x200?text=No+Image'}" alt="Location Image" class="spacecraft-image">
        </div>
        <div class="location-content">
          <h3>${location.name}</h3>
          <p><strong>Country:</strong> ${location.country_code || 'Unknown'}</p>
          <p><strong>Description:</strong> ${location.description || 'Unknown'}</p>
          <p><strong>Launch Count:</strong> ${location.total_launch_count || 0}</p>
          <p><strong>Land Count:</strong> ${location.total_landing_count || 0}</p>
        </div>
      </div>
    `;
    locationsDiv.appendChild(locationEl);
  });
}

// ====== FETCH SPACECRAFTS ======
async function fetchSpacecrafts() {
  const spacecraftsDiv = document.getElementById('spacecraftsDiv');
  spacecraftsDiv.innerHTML = "<p>Loading spacecrafts...</p>";

  try {
    const response = await fetch('https://ll.thespacedevs.com/2.2.0/spacecraft/?limit=10');
    const data = await response.json();
    displaySpacecrafts(data.results);
  } catch (error) {
    spacecraftsDiv.innerHTML = "<p>Failed to load spacecrafts. Try again later.</p>";
    console.error(error);
  }
}

function displaySpacecrafts(spacecrafts) {
  const spacecraftsDiv = document.getElementById('spacecraftsDiv');
  spacecraftsDiv.innerHTML = "";

  spacecrafts.forEach(spacecraft => {
    const duration = spacecraft.time_in_space;
    const spacecraftEl = document.createElement('div');
    spacecraftEl.className = 'spacecraft-card';
    spacecraftEl.innerHTML = `
      <h3>${spacecraft.name}</h3>
      
      <p><strong>Type:</strong> ${spacecraft.spacecraft_config?.type?.name || 'Unknown'}</p>
      <p><strong>Agency:</strong> ${spacecraft.spacecraft_config?.agency?.name || 'Unknown'}</p>
      <p><strong>Description:</strong> ${spacecraft.description || 'Unknown'}</p>
      <p><strong>Time in space:</strong> ${duration ? duration.replace("P", "").replace("T", " ").toLowerCase() : 'Unknown'}</p>
    `;
    spacecraftsDiv.appendChild(spacecraftEl);
  });
}
