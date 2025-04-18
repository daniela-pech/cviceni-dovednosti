const updateSkill = (id, uroven) => {
  const osa = document.querySelector(`#${id} .skill__progress`);
  const hodnota = document.querySelector(`#${id} .skill__value`);
  hodnota.textContent = `${uroven} / 100`;
  osa.style.width = `${uroven}%`;
};

const html = Number(prompt('Jaká je vaše znalost HTML na škále 0-100?'));
const css = Number(prompt('Jaká je vaše znalost CSS na škále 0-100?'));
const js = Number(prompt('Jaká je vaše znalost JavaScript na škále 0-100?'));

updateSkill('skill1', html);
updateSkill('skill2', css);
updateSkill('skill3', js);
