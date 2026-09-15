const SELECTED_FACTION_STORAGE_KEY = 'duneBattleWheel.selectedFaction';

const factionConfig = {
  atreides: {
    name: 'Atreides',
    code: 'AT',
    logo: 'AT-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Thufir Hawat', 5, 'AT-leader-thufir.png'],
      ['Lady Jessica', 5, 'AT-leader-jessica.png'],
      ['Gurney Halleck', 4, 'AT-leader-gurney.png'],
      ['Duncan Idaho', 2, 'AT-leader-duncan.png'],
      ['Dr. Yueh', 1, 'AT-leader-yueh.png']
    ]
  },
  bene: {
    name: 'Bene Gesserit',
    code: 'BG',
    logo: 'BG-logo.png',
    rule: 'Each fighting force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Alia', 5, 'BG-leader-alia.png'],
      ['Margot Fenring', 5, 'BG-leader-fenning.png'],
      ['Princess Irulan', 5, 'BG-leader-irulan.png'],
      ['Wanna Marcus', 5, 'BG-leader-marcus.png'],
      ['Mother Ramallo', 5, 'BG-leader-ramallo.png']
    ]
  },
  choam: {
    name: 'CHOAM',
    code: 'CH',
    logo: 'CH-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Auditor', 4, 'CH-leader-auditor.png'],
      ['Frankos Aru', 4, 'CH-leader-frankos.png'],
      ['Jalma', 3, 'CH-leader-jalma.png'],
      ['Londine', 3, 'CH-leader-londine.png'],
      ['Tull', 2, 'CH-leader-tull.png'],
      ['Duke Verdun', 2, 'CH-leader-verdun.png']
    ]
  },
  emperor: {
    name: 'Emperor',
    code: 'EM',
    logo: 'EM-logo.png',
    special: 'Sardaukar',
    specialMax: 5,
    forceMax: 15,
    specialMultiplier: 2,
    rule: 'Sardaukar have a strength of 2. They count as ordinary forces when fighting Fremen.',
    leaders: [
      ['Count Fenring', 6, 'EM-leader-fenning.png'],
      ['Captain Aramsham', 5, 'EM-leader-aramsham.png'],
      ['Caid', 3, 'EM-leader-caid.png'],
      ['Burseg', 3, 'EM-leader-burseg.png'],
      ['Bashar', 2, 'EM-leader-bashar.png']
    ]
  },
  fremen: {
    name: 'Fremen',
    code: 'FR',
    logo: 'FR-logo.png',
    fullStrength: true,
    special: 'Fedaykin',
    specialMax: 3,
    forceMax: 17,
    specialMultiplier: 2,
    rule: 'Fremen forces do not require spice support. Each Fedaykin has a strength of 2.',
    leaders: [
      ['Stilgar', 7, 'FR-leader-stilgar.png'],
      ['Chani', 6, 'FR-leader-chani.png'],
      ['Otheym', 5, 'FR-leader-otheym.png'],
      ['Shadout Mapes', 3, 'FR-leader-mapes.png'],
      ['Jamis', 2, 'FR-leader-jamis.png']
    ]
  },
  harkonnen: {
    name: 'Harkonnen',
    code: 'HK',
    logo: 'HK-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Feyd-Rautha', 6, 'HK-leader-feyd.png'],
      ['Beast Rabban', 4, 'HK-leader-beast.png'],
      ['Piter De Vries', 3, 'HK-leader-vries.png'],
      ['Captain Iakin Nefud', 2, 'HK-leader-nefud.png'],
      ['Umman Kudu', 1, 'HK-leader-kudu.png']
    ]
  },
  ixians: {
    name: 'Ixians',
    code: 'IX',
    logo: 'IX-logo.png',
    special: 'Cyborgs',
    specialMax: 7,
    forceMax: 13,
    specialMultiplier: 2,
    fixedHalfStrength: true,
    regularLabel: 'Suboids',
    rule: 'Each Cyborg has a strength of 2. Suboids are always worth ½ and Ixians cannot use spice support.',
    leaders: [
      ['Cammar Pilru', 5, 'IX-leader-cammar.png'],
      ['Dominic Vernius', 5, 'IX-leader-dominic.png'],
      ['Kailea Vernius', 4, 'IX-leader-kailea.png'],
      ['Prince Rhombur', 2, 'IX-leader-pilru.png'],
      ['Tessia Vernius', 1, 'IX-leader-tesia.png']
    ]
  },
  richese: {
    name: 'Richese',
    code: 'RI',
    logo: 'RI-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Talis', 5, 'RI-leader-talis.png'],
      ['Helena', 3, 'RI-leader-helena.png'],
      ['Haloa', 3, 'RI-leader-haloa.png'],
      ['Flinto', 2, 'RI-leader-flinto.png'],
      ['Ein', 1, 'RI-leader-ein.png']
    ]
  },
  guild: {
    name: 'Spacing Guild',
    code: 'SG',
    logo: 'SG-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Staban Tuek', 5, 'SG-leader-staban.png'],
      ['Guild Representative', 4, 'SG-leader-guildrep.png'],
      ['Esmar Tuek', 3, 'SG-leader-esmar.png'],
      ['Master Bewt', 2, 'SG-leader-bewt.png'],
      ['Soo-Soo Sook', 2, 'SG-leader-sook.png']
    ]
  },
  tleilaxu: {
    name: 'Tleilaxu',
    code: 'TX',
    logo: 'TX-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Hidar Fen Ajidica', 0, 'TX-leader-ajidica.png'],
      ['Master Blin', 4, 'TX-leader-blin.png'],
      ['Wykk', 3, 'TX-leader-wykk.png'],
      ['Zoal', 2, 'TX-leader-zoal.png'],
      ['Zaaf', 1, 'TX-leader-zaaf.png']
    ]
  },
  moritani: {
    name: 'Moritani',
    code: 'MO',
    logo: 'MO-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Hiih Resser', 6, 'MO-leader-hiih.png'],
      ['Vando Terboli', 5, 'MO-leader-vando.png'],
      ['Trin Kronos', 4, 'MO-leader-trin.png'],
      ['Lupino Ord', 4, 'MO-leader-lupino.png'],
      ['Grieu Kronos', 2, 'MO-leader-grieu.png'],
      ['Duke Vidal', 1, 'MO-leader-vidal.png']
    ]
  },
  ecaz: {
    name: 'Ecaz',
    code: 'EZ',
    logo: 'EZ-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Duke Vidal', 6, 'EZ-leader-vidal.png'],
      ['Sanya Ecaz', 4, 'EZ-leader-sanya.png'],
      ['Ilesa Ecaz', 4, 'EZ-leader-ilesa.png'],
      ['Whitmore Bludd', 3, 'EZ-leader-bludd.png'],
      ['Narvi', 3, 'EZ-leader-narvi.png'],
      ['Dinari', 2, 'EZ-leader-dinari.png']
    ]
  }
};

const elements = {
  faction: document.getElementById('faction'),
  factionLogo: document.getElementById('factionLogo'),
  factionRule: document.getElementById('factionRule'),
  factionName: document.getElementById('factionName'),
  forces: document.getElementById('forces'),
  forcesLabel: document.getElementById('forcesLabel'),
  specialField: document.getElementById('specialField'),
  specialForces: document.getElementById('specialForces'),
  specialLabel: document.getElementById('specialLabel'),
  spiceField: document.getElementById('spiceField'),
  spice: document.getElementById('spice'),
  fremenOpponentField: document.getElementById('fremenOpponentField'),
  fremenOpponent: document.getElementById('fremenOpponent'),
  leaderMenu: document.getElementById('leaderMenu'),
  weapon: document.getElementById('weapon'),
  defense: document.getElementById('defense'),
  wheel: document.getElementById('battleWheel'),
  dialMarks: document.getElementById('dialMarks'),
  score: document.getElementById('scoreValue'),
  forceScore: document.getElementById('forceScore'),
  leaderScore: document.getElementById('leaderScore'),
  totalScore: document.getElementById('totalScore'),
  status: document.getElementById('battleStatus'),
  log: document.getElementById('battleLog'),
  confirmBtn: document.getElementById('confirmBtn')
};

let selectedLeader = null;
let leaderView = 'leaders';
let capturedFactionKey = null;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function numericValue(input) {
  const min = Number(input.min || 0);
  const max = Number(input.max || Number.MAX_SAFE_INTEGER);
  const value = clamp(Number(input.value) || 0, min, max);
  input.value = value;
  return value;
}

function formatScore(value) {
  if (Number.isInteger(value)) {
    return String(value);
  }

  const whole = Math.floor(value);
  return whole === 0 ? '½' : whole + '½';
}

function renderForceWindow(value) {
  const lowerValue = Math.floor(value);
  const isHalfStep = !Number.isInteger(value);

  elements.score.replaceChildren();
  elements.score.classList.toggle('force-window__value--half', isHalfStep);
  elements.score.setAttribute('aria-label', 'Dialed strength ' + formatScore(value));

  const lower = document.createElement('span');
  lower.textContent = String(lowerValue);
  elements.score.appendChild(lower);

  if (isHalfStep) {
    const upper = document.createElement('span');
    upper.textContent = String(lowerValue + 1);
    elements.score.appendChild(upper);
  }
}

function buildDialMarks() {
  const fragment = document.createDocumentFragment();

  for (let value = 0; value <= 20; value += 2) {
    const mark = document.createElement('span');
    mark.textContent = value;
    mark.style.setProperty('--mark-angle', value * 13 - 130 + 'deg');
    fragment.appendChild(mark);
  }

  elements.dialMarks.appendChild(fragment);
}

function renderList(items) {
  elements.log.replaceChildren();

  items.forEach((text) => {
    const item = document.createElement('li');
    item.textContent = text;
    elements.log.appendChild(item);
  });
}

function selectLeader(leader) {
  selectedLeader = leader;
  buildLeaderMenu();
  calculatePlan();
}

function buildLeaderMenu() {
  const factionKey = elements.faction.value;
  const faction = factionConfig[factionKey];

  elements.leaderMenu.replaceChildren();

  const actions = document.createElement('div');
  actions.className = 'leader-actions';

  function isSelected(leader) {
    return Boolean(
      selectedLeader &&
      selectedLeader.name === leader.name &&
      selectedLeader.image === leader.image &&
      selectedLeader.capturedFrom === leader.capturedFrom
    );
  }

  function createUtilityButton(label, marker, onClick, selected = false) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'leader-utility';
    button.setAttribute('aria-selected', String(selected));

    const icon = document.createElement('span');
    icon.textContent = marker;
    const text = document.createElement('span');
    text.textContent = label;

    button.append(icon, text);
    button.addEventListener('click', onClick);
    return button;
  }

  function createPortraitButton(leader) {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'leader-option leader-option--portrait circularize';
    option.setAttribute('role', 'option');
    option.setAttribute('aria-label', leader.name + ', strength ' + leader.strength);
    option.title = leader.name + ' · Strength ' + leader.strength;
    option.setAttribute('aria-selected', String(isSelected(leader)));

    const image = document.createElement('img');
    image.className = 'circularize';
    image.alt = '';
    image.src = 'img/' + leader.image;

    option.appendChild(image);
    option.addEventListener('click', () => selectLeader(leader));
    return option;
  }

  function showLeaderPortraits(sourceKey, captured = false) {
    const sourceFaction = factionConfig[sourceKey];
    const leaders = sourceFaction.leaders.map(([name, strength, image]) => ({
      name,
      strength,
      image,
      capturedFrom: captured ? sourceKey : null
    }));

    const portraits = document.createElement('div');
    portraits.className = 'leader-portraits';
    if (leaders.length === 5) portraits.classList.add('leader-portraits--five');

    leaders.forEach((leader) => portraits.appendChild(createPortraitButton(leader)));
    elements.leaderMenu.append(actions, portraits);
  }

  if (factionKey === 'harkonnen' && leaderView === 'captured-factions') {
    actions.appendChild(createUtilityButton('Harkonnen leaders', '‹', () => {
      leaderView = 'leaders';
      capturedFactionKey = null;
      buildLeaderMenu();
    }));

    const prompt = document.createElement('p');
    prompt.className = 'captured-prompt';
    prompt.textContent = 'Choose the captured leader’s faction';

    const factionGrid = document.createElement('div');
    factionGrid.className = 'captured-factions';

    Object.entries(factionConfig)
      .filter(([key]) => key !== 'harkonnen')
      .forEach(([key, candidate]) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'captured-faction-option circularize';
        button.title = candidate.name;
        button.setAttribute('aria-label', candidate.name);

        const image = document.createElement('img');
        image.className = 'circularize';
        image.src = 'img/' + candidate.logo;
        image.alt = '';

        button.appendChild(image);
        button.addEventListener('click', () => {
          capturedFactionKey = key;
          leaderView = 'captured-leaders';
          buildLeaderMenu();
        });
        factionGrid.appendChild(button);
      });

    elements.leaderMenu.append(actions, prompt, factionGrid);
    return;
  }

  if (
    factionKey === 'harkonnen' &&
    leaderView === 'captured-leaders' &&
    capturedFactionKey
  ) {
    const capturedFaction = factionConfig[capturedFactionKey];

    actions.append(
      createUtilityButton('Change faction', '‹', () => {
        leaderView = 'captured-factions';
        buildLeaderMenu();
      }),
      createUtilityButton('Harkonnen leaders', 'H', () => {
        leaderView = 'leaders';
        capturedFactionKey = null;
        buildLeaderMenu();
      })
    );

    const prompt = document.createElement('p');
    prompt.className = 'captured-prompt captured-prompt--faction';

    const logo = document.createElement('img');
    logo.className = 'circularize';
    logo.src = 'img/' + capturedFaction.logo;
    logo.alt = '';

    const text = document.createElement('span');
    text.textContent = capturedFaction.name + ' captured leaders';

    prompt.append(logo, text);
    elements.leaderMenu.appendChild(prompt);
    showLeaderPortraits(capturedFactionKey, true);
    return;
  }

  const noLeader = { name: 'No leader', strength: 0, image: null, capturedFrom: null };
  const cheapHero = { name: 'Cheap Hero', strength: 0, image: null, capturedFrom: null };

  actions.append(
    createUtilityButton('No leader', '—', () => selectLeader(noLeader), isSelected(noLeader)),
    createUtilityButton('Cheap Hero', 'H', () => selectLeader(cheapHero), isSelected(cheapHero))
  );

  if (factionKey === 'harkonnen') {
    actions.appendChild(createUtilityButton(
      'Captured Leader',
      'C',
      () => {
        leaderView = 'captured-factions';
        capturedFactionKey = null;
        buildLeaderMenu();
      },
      Boolean(selectedLeader?.capturedFrom)
    ));
  }

  showLeaderPortraits(factionKey);
}

function updateFactionFields() {
  const faction = factionConfig[elements.faction.value];
  const hasSpecialForces = Boolean(faction.special);
  const usesSpice = !faction.fullStrength && !faction.fixedHalfStrength;

  elements.factionLogo.src = 'img/' + faction.logo;
  elements.factionLogo.alt = faction.name + ' emblem';
  elements.factionName.textContent = faction.name.toUpperCase();
  elements.factionRule.textContent = faction.rule;
  elements.forcesLabel.textContent = faction.regularLabel || (hasSpecialForces ? 'Ordinary forces' : 'Forces');
  elements.forces.max = faction.forceMax || 20;
  elements.specialField.hidden = !hasSpecialForces;
  elements.spiceField.hidden = !usesSpice;
  elements.fremenOpponentField.hidden = elements.faction.value !== 'emperor';

  if (hasSpecialForces) {
    elements.specialLabel.textContent = faction.special;
    elements.specialForces.max = faction.specialMax;
    numericValue(elements.specialForces);
  } else {
    elements.specialForces.value = 0;
  }

  if (!usesSpice) {
    elements.spice.value = 0;
  }

  elements.fremenOpponent.checked = false;
  selectedLeader = null;
  leaderView = 'leaders';
  capturedFactionKey = null;
  buildLeaderMenu();
  numericValue(elements.forces);
  calculatePlan();
}

function equipmentStatus() {
  const weapon = elements.weapon.value;
  const defense = elements.defense.value;

  if (weapon === 'lasgun' && defense === 'shield') {
    return {
      type: 'danger',
      title: 'Lasgun–shield explosion!',
      detail: 'Both leaders and all forces on both sides are destroyed.'
    };
  }

  if (
    (weapon === 'projectile' && defense === 'shield') ||
    (weapon === 'poison' && defense === 'snooper')
  ) {
    return {
      type: 'safe',
      title: 'Leader protected',
      detail: 'The selected defense stops this weapon type.'
    };
  }

  if (weapon === 'none' || weapon === 'worthless') {
    return {
      type: 'neutral',
      title: 'No lethal threat',
      detail: 'The selected weapon does not kill the opposing leader.'
    };
  }

  return {
    type: 'warning',
    title: 'Leader exposed',
    detail: 'The selected defense does not stop this weapon type.'
  };
}

function calculatePlan() {
  const faction = factionConfig[elements.faction.value];
  const forces = numericValue(elements.forces);
  const specialForces = numericValue(elements.specialForces);
  const leaderStrength = selectedLeader?.strength || 0;
  let spice = numericValue(elements.spice);
  let ordinaryStrength;

  if (faction.fullStrength) {
    ordinaryStrength = forces;
    spice = 0;
  } else if (faction.fixedHalfStrength) {
    ordinaryStrength = forces / 2;
    spice = 0;
  } else {
    spice = Math.min(spice, forces);
    elements.spice.value = spice;
    ordinaryStrength = (forces + spice) / 2;
  }

  let specialMultiplier = faction.specialMultiplier || 0;
  if (elements.faction.value === 'emperor' && elements.fremenOpponent.checked) {
    specialMultiplier = 1;
  }

  const specialStrength = specialForces * specialMultiplier;
  const forceStrength = ordinaryStrength + specialStrength;
  const total = forceStrength + leaderStrength;
  const rotation = clamp(forceStrength, 0, 20) * 13 - 130;
  const status = equipmentStatus();

  elements.wheel.style.setProperty('--wheel-angle', rotation + 'deg');
  renderForceWindow(forceStrength);
  elements.forceScore.textContent = formatScore(forceStrength);
  elements.leaderScore.textContent = formatScore(leaderStrength);
  elements.totalScore.textContent = formatScore(total);
  elements.status.className = 'battle-status battle-status--' + status.type;
  elements.status.replaceChildren();

  const statusTitle = document.createElement('strong');
  statusTitle.textContent = status.title;
  const statusDetail = document.createElement('span');
  statusDetail.textContent = status.detail;
  elements.status.append(statusTitle, statusDetail);

  const forceParts = [forces + ' ' + elements.forcesLabel.textContent.toLowerCase()];
  if (specialForces > 0 && faction.special) {
    forceParts.push(specialForces + ' ' + faction.special);
  }

  const supportText = faction.fullStrength
    ? 'No spice support required.'
    : faction.fixedHalfStrength
      ? 'Suboids remain at ½ strength; Ixians cannot use spice support.'
      : spice + ' spice committed as support.';

  renderList([
    forceParts.join(' + ') + '.',
    supportText,
    'Dialed strength: ' + formatScore(forceStrength) + ' + leader ' + formatScore(leaderStrength) + ' = ' + formatScore(total) + '.'
  ]);
}

document.querySelectorAll('.stepper-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const input = document.getElementById(button.dataset.target);
    input.value = numericValue(input) + Number(button.dataset.step);
    numericValue(input);
    calculatePlan();
  });
});

[
  elements.forces,
  elements.specialForces,
  elements.spice,
  elements.weapon,
  elements.defense,
  elements.fremenOpponent
].forEach((control) => {
  control.addEventListener('input', calculatePlan);
  control.addEventListener('change', calculatePlan);
});

elements.faction.addEventListener('change', () => {
  try {
    localStorage.setItem(SELECTED_FACTION_STORAGE_KEY, elements.faction.value);
  } catch {
    // The calculator still works when browser storage is unavailable.
  }

  updateFactionFields();
});

elements.confirmBtn.addEventListener('click', () => {
  elements.wheel.classList.remove('is-confirmed');
  void elements.wheel.offsetWidth;
  elements.wheel.classList.add('is-confirmed');
  elements.confirmBtn.textContent = 'Battle plan confirmed';
  setTimeout(() => {
    elements.confirmBtn.textContent = 'Confirm battle plan';
  }, 1400);
});

buildDialMarks();

try {
  const savedFaction = localStorage.getItem(SELECTED_FACTION_STORAGE_KEY);
  if (savedFaction && factionConfig[savedFaction]) {
    elements.faction.value = savedFaction;
  }
} catch {
  // Use the default faction when browser storage is unavailable.
}

updateFactionFields();