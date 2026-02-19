document.addEventListener('DOMContentLoaded', () => {
  const sessions = {
    monday: {
      title: 'Quality Session',
      text: '2.5 km warm-up, strides, then 10 minutes threshold + 2×2 minutes at 5 km pace (1 minute recovery), 3 minute jog, then 8×100 m strides.'
    },
    tuesday: {
      title: 'Easy Run',
      text: '8 km at an easy pace, keeping heart rate controlled and body relaxed.'
    },
    wednesday: {
      title: 'Easy Run',
      text: '6 km easy, focusing on recovery and freshness ahead of Saturday racing.'
    },
    thursday: {
      title: 'Easy Run + Strides',
      text: '4 km easy with 6×100 m strides to keep the legs fresh.'
    },
    friday: {
      title: 'Rest + Mobility',
      text: 'No running. Foam rolling, stretching, and light activation for race readiness.'
    },
    saturday: {
      title: 'Race Day',
      text: 'Competition day: Hampshire Cross Country Championships, aiming to win.'
    },
    sunday: {
      title: 'Long Run Day',
      text: '10 km easy to loosen up after race day and prepare for Monday training.'
    }
  };

  const buttons = document.querySelectorAll('.week-grid button');
  const display = document.getElementById('session-display');

  if (!buttons.length || !display) {
    return;
  }

  const renderSession = (day) => {
    const session = sessions[day];

    if (!session) {
      return;
    }

    display.replaceChildren();

    const title = document.createElement('h3');
    title.textContent = session.title;

    const description = document.createElement('p');
    description.textContent = session.text;

    display.append(title, description);
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      renderSession(button.dataset.day);
    });
  });

  buttons[0].click();
});
