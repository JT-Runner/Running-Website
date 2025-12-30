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
