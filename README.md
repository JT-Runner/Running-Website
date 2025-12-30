<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Running Career</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');

:root {
  --bg-main: #0f1115;
  --bg-secondary: #161a22;
  --bg-nav: #121620;
  --accent: #e10600;
  --text-main: #eaeaea;
  --text-muted: #b0b0b0;
  --border-subtle: #2a2f3a;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--bg-main);
  color: var(--text-main);
  line-height: 1.7;
}

/* HEADER */
header {
  background: linear-gradient(180deg, #161a22, #0f1115);
  padding: 50px 20px;
  text-align: center;
  border-bottom: 1px solid var(--border-subtle);
}

h1 {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  margin: 0;
  font-size: 2rem;
}

/* NAVIGATION */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-nav);
  border-bottom: 1px solid var(--border-subtle);
}

nav ul, YAC {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 26px;
  padding: 14px 0;
  margin: 0;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: var(--text-main);
  padding: 8px 14px;
  border-radius: 4px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

nav a:hover {
  background-color: var(--accent);
  color: white;
}

/* MAIN LAYOUT */
.starting-layout {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  display: flex;
  gap: 50px;
  align-items: flex-start;
}

#starting {
  flex: 2;
  font-size: 1.05rem;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 18px;
  border-left: 4px solid var(--accent);
  padding-left: 12px;
}

p {
  margin-bottom: 18px;
  color: var(--text-muted);
}

/* IMAGES */
.starting-images {
  flex: 1;
  display: flex;
  gap: 20px;
}

.starting-images img {
  width: 70%;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid var(--border-subtle);
}

/* COMPETITION SECTION */
#competition {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}

/* FOOTER */
footer {
  margin-top: 100px;
  padding: 40px 20px;
  background-color: var(--bg-secondary);
  text-align: center;
  border-top: 1px solid var(--border-subtle);
}

footer p {
  color: var(--text-muted);
  margin-bottom: 16px;
}

footer a img {
  height: 26px;
  margin: 10px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

footer a img:hover {
  transform: scale(1.15);
  opacity: 0.85;
}

footer h3 {
  font-weight: normal;
  color: var(--text-muted);
  margin: 10px 0;
  font-size: 0.95rem;
}
YAC {
 color: white;
}
#timetable {
  max-width: 900px;
  margin: 80px auto;
  padding: 0 20px;
}

.week-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
  margin-bottom: 30px;
}

.week-grid button {
  background-color: var(--bg-secondary);
  color: var(--text-main);
  border: 1px solid var(--border-subtle);
  padding: 14px 0;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.week-grid button:hover {
  background-color: var(--accent);
}

.week-grid button.active {
  background-color: var(--accent);
}

#session-display {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  padding: 24px;
  border-radius: 8px;
}

#session-display h3 {
  margin-top: 0;
  font-family: 'Montserrat', sans-serif;
}


</style>
</head>
<script>
const sessions = {
  monday: {
    title: "Quality Session",
    text: "2.5km warmup then into strides and the session:  10mins threshold then 2x2mins 5km pace 1 min recovery in between 3 min jog and then 8 x 100m strides"
  },
  tuesday: {
    title: "Easy Run",
    text: "8km at an easy pace keeping my heart rate controlled and body relaxed"
  },
  wednesday: {
    title: "Easy Run",
    text: "6km at an easy pace keeping my heart rate controlled and body relaxed. Starting to Taper for a race on Saturday"
  },
  thursday: {
    title: "Easy run + strides",
    text: "4km easy with 6x100m strides to keep the legs fresh."
  },
  friday: {
    title: "Rest + Mobility",
    text: "No running. Foam rolling, stretching, light activation.Giving me the best chance at winning on Saturday"
  },
  saturday: {
    title: "Race Day",
    text: "Hampshire cross country champs AIMING TO WIN"
  },
  sunday: {
    title: "Long Run Day",
    text: "10km easy to run the nots out of my leg and shakeout before monday training"
  }
};

const buttons = document.querySelectorAll(".week-grid button");
const display = document.getElementById("session-display");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const day = button.dataset.day;
    display.innerHTML = `
      <h3>${sessions[day].title}</h3>
      <p>${sessions[day].text}</p>
    `;
  });
});
</script>

<body>

<header>
  <h1>THE STORY OF JONAH TILDESLEY YET TO BE FINISHED</h1>
</header>

<nav>
  <ul>
    <li><a href="#starting">Starting Out</a></li>
    <li><a href="#competition">The Competition</a></li>
    <li><a href="#training">Training & Development</a></li>
    <li><a href="#highlights">Highlights</a></li>
    <li><a href="#goals">Goals & Future Aspirations</a></li>
    <li><a href="#journal">Training Logs & Journal</a></li>
    <li><a href="Timetable">Timetable</a></li>
  </ul>
</nav>

<div class="starting-layout">
  <section id="starting">
    <h2>Starting Out</h2>

    <p>
      From an early age, sport was a constant in my life. I cannot remember a time when I was not competing in some form, always driven by a natural enjoyment of movement and competition.
    </p>

    <p>
      I met my first coach, <u>Phil Budd</u>, who identified my strengths early and helped establish a strong technical and physical foundation. In January 2019, after just one month of structured training, I placed third at the County Championships as a bottom-year athlete.
    </p>

    <p>
      At an age where physical maturity often dictates success, this performance challenged expectations and marked a turning point.
    </p>

    <p>
      By the age of ten, I moved into a specialised middle-distance training group under my second coach, <u>Alan Crook</u>.
    </p>
  </section>

  <aside class="starting-images">
    <img src="https://clubbuzz-assets.s3.amazonaws.com/pro/photos/108631/responsive_sports.jpg" alt="Phil Budd">
    <img src="https://clubbuzz-assets.s3.amazonaws.com/pro/photos/108643/responsive_sports.jpg" alt="Alan Crook">
  </aside>
</div>
<section id="competition">
  <h2>The Competition</h2>
 <p>
  Throughout my running career, I have encountered numerous challenges through 
  formidable teammates and rivals. My first significant rival was Eddie Clegg, 
  whose constant presence pushed my early development. He possessed an 
  intense and highly competitive running style that tested my physical 
  and mental limits. Adapting to his unorthodox approach taught me how to 
  navigate high-pressure scenarios and ultimately made me a more resilient athlete.
</p>

<p>
  Another significant influence on my career is Max Harrison, a runner for 
  Hercules Wimbledon. We first met at the 
  <a href="https://www.youngathletecamp.co.uk/" id="YAC">Young Athlete Camp</a>, 
  where we developed a close friendship. Despite our contrasting running 
  styles, we constantly challenge one another during training. Max has 
  instilled in me a deep sense of drive and a professional standard of 
  discipline; because of his influence, my commitment is unwavering, and 
  skipping sessions is no longer a consideration.
</p>

<p>
  Finally, I have a strong competitive relationship with Luca Di Giovanni. 
  Although he is a year older and trains in a different group within our club, 
  we maintain a healthy rivalry. This dynamic encourages us to consistently 
  better ourselves while remaining dedicated to the club's collective success. 
  I look forward to our continued competition in the years to come.
</p>
</section>
k<br> <section id="Timetable">
    <h2>Average Training Week</h2>
    <div class="week-grid">
        <button data-day="monday">Mon</button>
        <button data-day="tuesday">Tue</button>
        <button data-day="wednesday">Wed</button>   
        <button data-day="thursday">Thu</button>
        <button data-day="friday">Fri</button>
        <button data-day="saturday">Sat</button>
        <button data-day="sunday">Sun</button>
    </div>
    <div id="session-display">
    <h3>select a training day</h3>
    <p>your session details will appear here.</p>
    </div>
</section>

<footer>
  <p>&copy; 2024 The Running Legend. All rights reserved.</p>

  <a href="https://www.instagram.com/jonah_therunner/" target="_blank" rel="noopener">Insta</a>
  <a href="https://www.thepowerof10.info/athletes/profile.aspx?athleteid=1115938" target="_blank" rel="noopener"> Power of 10</a>
  </a>

  <h3>Club: City of Portsmouth</h3>
  <h3>Contact: +44 7774 864581</h3>
</footer>

</body>
</html>

