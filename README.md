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
  font-color: white;
}

</style>
</head>

<body>

<header>
  <h1>THE STORY OF A RUNNING LEGEND YET TO BE FINISHED</h1>
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
    Throughout my running career, many challenges have come in the form of teammates and rivals. My first major rival was Eddie Clegg, a constant competitor who pushed my development. He had a very competitive and ruthless style of running even once ending up with me on the floor. Despite this, unorthodox style of running i was able to learn how to deal with those sort of runners and become a betteer runner because of it. Another strong rival is a runner for Hercules Wimbolden, Max Harrison. I first met him at <a href = "https://www.youngathletecamp.co.uk/"><u>Young Athlete Camp<u> <id="YAC"></a> we soon became close friends and were constantly pushing each other on at training and despite us having completely opposite running styles constantly competing. He taught and showed me drive and what it takes to become a winner. Because of him skipping sessions is no longer present in my mind as I'm constantly set on becoming better than the rest  
  </p>
</section>
<br> <section id="Timetable">
    <h2>Average Training Week</h2>
</section>

<footer>
  <p>&copy; 2024 The Running Legend. All rights reserved.</p>

  <a href="https://www.instagram.com/jonah_therunner/" target="_blank" rel="noopener">
    <img src="https://e7.pngegg.com/pngimages/432/1016/png-clipart-computer-icons-logo-instagram-logo-miscellaneous-logo-thumbnail.png" alt="Instagram">
  </a>

  <h3>Club: City of Portsmouth</h3>
  <h3>Contact: +44 7774 864581</h3>
</footer>

</body>
</html>
