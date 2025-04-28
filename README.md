# Space_launch_tracker
## Overview
Space Launch Tracker is a lightweight and fully responsive web app that displays upcoming rocket launches, spacecrafts, and launch locations using real-time data from the SpaceDevs Launch Library 2 API.

Built with pure HTML, CSS, and JavaScript, this project is designed to help you explore future space missions, launch sites across the globe, and information about spacecrafts — all in a sleek, user-friendly interface.

Perfect for learning how to work with real-world APIs, responsive layouts, dynamic DOM manipulation, and live countdown timers!

## ✨Features
- Live countdown to upcoming rocket launches.

- Information about launch locations with images.

- Spacecraft details including type, agency, and time spent in space.

- Responsive and mobile-friendly design.

- Simple navigation between Launches, Locations, and Spacecraft pages.

- No build setup needed — pure frontend project.

## 📂 Project Setup

No backend server required — it's a pure HTML/CSS/JS frontend project.

1. Clone the repository:
  ```sh
  git clone https://github.com/Harsh-R-Singh/space_launch_tracker.git
  cd space_launch_tracker
  ```

2. Open index.html in your browser:

    - Simply double-click index.html Or use a local server like Live Server extension in VSCode for better experience.

## 🔗 APIs Used
We are using Launch Library 2 API by The Space Devs:


API |	URL	| Purpose
----|-----|--------
Upcoming Launches | https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=10	| Fetch upcoming rocket launches
Launch Locations | https://ll.thespacedevs.com/2.2.0/location/?limit=10	| Fetch launch site locations
Spacecrafts | https://ll.thespacedevs.com/2.2.0/spacecraft/?limit=10 | Fetch spacecraft details

Note: These APIs are public but have rate limits. If you send too many requests quickly, you might see a 429 Too Many Requests error.

## 📸 Screenshots
- ![Upcoming_launch_page](https://github.com/user-attachments/assets/113cb39e-58b2-4c16-937e-2c1b28102b01)
- ![Spacecrafts_page](https://github.com/user-attachments/assets/b51c4c59-842a-4554-b7dd-5927e3bd6405)
- ![Location_page](https://github.com/user-attachments/assets/e7f12cab-4f93-4081-ae97-f5afc1801a11)
