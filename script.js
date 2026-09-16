const SELECTED_FACTION_STORAGE_KEY = 'duneBattleWheel.selectedFaction';
const FACTIONS_IN_PLAY_STORAGE_KEY = 'duneBattleWheel.factionsInPlay';
const FACTION_ORDER = ['atreides', 'bene', 'choam', 'ecaz', 'emperor', 'fremen', 'harkonnen', 'ixians', 'moritani', 'richese', 'guild', 'tleilaxu'];

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
      ['Frankos Aru', 4, 'CH-leader-frankos.png'],
      ['Lady Jalma', 4, 'CH-leader-jalma.png'],
      ['Rajiv Londine', 3, 'CH-leader-londine.png'],
      ['Duke Verdun', 3, 'CH-leader-verdun.png'],
      ['Auditor', 2, 'CH-leader-auditor.png'],
      ['Viscount Tull', 2, 'CH-leader-tull.png']
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
      ["C'tair Pilru", 5, 'IX-leader-pilru.png'],
      ['Tessia Vernius', 5, 'IX-leader-tesia.png'],
      ['Dominic Vernius', 4, 'IX-leader-dominic.png'],
      ['Kailea Vernius', 2, 'IX-leader-kailea.png'],
      ['Cammar Pilru', 1, 'IX-leader-cammar.png']
    ]
  },
  richese: {
    name: 'Richese',
    code: 'RI',
    logo: 'RI-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Ein Calimar', 5, 'RI-leader-ein.png'],
      ['Lady Helena', 4, 'RI-leader-helena.png'],
      ['Flinto Kinnis', 3, 'RI-leader-flinto.png'],
      ['Talis Balt', 2, 'RI-leader-talis.png'],
      ['Haloa Rund', 2, 'RI-leader-haloa.png']
    ]
  },
  guild: {
    name: 'Spacing Guild',
    code: 'SG',
    logo: 'SG-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Staban Tuek', 5, 'SG-leader-staban.png'],
      ['Esmar Tuek', 3, 'SG-leader-esmar.png'],
      ['Master Bewt', 3, 'SG-leader-bewt.png'],
      ['Soo-Soo Sook', 2, 'SG-leader-sook.png'],
      ['Guild Representative', 1, 'SG-leader-guildrep.png']
    ]
  },
  tleilaxu: {
    name: 'Tleilaxu',
    code: 'TX',
    logo: 'TX-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Zoal', 'X', 'TX-leader-zoal.png', true],
      ['Hidar Fen Ajidica', 4, 'TX-leader-ajidica.png'],
      ['Master Zaaf', 3, 'TX-leader-zaaf.png'],
      ['Wykk', 2, 'TX-leader-wykk.png'],
      ['Master Blin', 1, 'TX-leader-blin.png']
    ]
  },
  moritani: {
    name: 'Moritani',
    code: 'MO',
    logo: 'MO-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Duke Prad Vidal', 6, 'MO-leader-vidal.png'],
      ['Lupino Ord', 5, 'MO-leader-lupino.png'],
      ['Hiih Resser', 4, 'MO-leader-hiih.png'],
      ['Grieu Kronos', 4, 'MO-leader-grieu.png'],
      ['Trin Kronos', 2, 'MO-leader-trin.png'],
      ['Vando Terboli', 1, 'MO-leader-vando.png']
    ]
  },
  ecaz: {
    name: 'Ecaz',
    code: 'EZ',
    logo: 'EZ-logo.png',
    rule: 'Each force has a base strength of ½. Spend 1 spice per force to raise it to full strength.',
    leaders: [
      ['Duke Prad Vidal', 6, 'EZ-leader-vidal.png'],
      ['Sanya Ecaz', 4, 'EZ-leader-sanya.png'],
      ['Whitmore Bludd', 4, 'EZ-leader-bludd.png'],
      ['Ilesa Ecaz', 3, 'EZ-leader-ilesa.png'],
      ["R'Rilly Dinari", 3, 'EZ-leader-dinari.png'],
      ['Bindikk Narvi', 2, 'EZ-leader-narvi.png']
    ]
  }
};

const elements = {
  faction: document.getElementById('faction'),
  factionLogo: document.getElementById('factionLogo'),
  factionRule: document.getElementById('factionRule'),
  currentFactionName: document.getElementById('currentFactionName'),
  appLayout: document.getElementById('appLayout'),
  battlePlanResult: document.getElementById('battlePlanResult'),
  resultWheel: document.getElementById('resultWheel'),
  resultFactionName: document.getElementById('resultFactionName'),
  resultForceStrength: document.getElementById('resultForceStrength'),
  resultLeaderSlot: document.getElementById('resultLeaderSlot'),
  resultLeaderImage: document.getElementById('resultLeaderImage'),
  resultLeaderFallback: document.getElementById('resultLeaderFallback'),
  resultKwisatzImage: document.getElementById('resultKwisatzImage'),
  resultLeaderName: document.getElementById('resultLeaderName'),
  resultWeaponCard: document.getElementById('resultWeaponCard'),
  resultWeaponImage: document.getElementById('resultWeaponImage'),
  resultWeaponName: document.getElementById('resultWeaponName'),
  resultDefenseCard: document.getElementById('resultDefenseCard'),
  resultDefenseImage: document.getElementById('resultDefenseImage'),
  resultDefenseName: document.getElementById('resultDefenseName'),
  leaderKilledField: document.getElementById('leaderKilledField'),
  resultLeaderKilled: document.getElementById('resultLeaderKilled'),
  resultForces: document.getElementById('resultForces'),
  resultLeader: document.getElementById('resultLeader'),
  resultTotal: document.getElementById('resultTotal'),
  resultOutcome: document.getElementById('resultOutcome'),
  resultBreakdown: document.getElementById('resultBreakdown'),
  backToPlan: document.getElementById('backToPlan'),
  previewForces: document.getElementById('previewForces'),
  previewLeader: document.getElementById('previewLeader'),
  previewTotal: document.getElementById('previewTotal'),
  resetApplication: document.getElementById('resetApplication'),
  setupTrigger: document.getElementById('openGameSetup'),
  gameSetup: document.getElementById('gameSetup'),
  gameSetupGrid: document.getElementById('gameSetupGrid'),
  gameSetupInstructions: document.getElementById('gameSetupInstructions'),
  gameSetupNotice: document.getElementById('gameSetupNotice'),
  gameSetupSummary: document.getElementById('gameSetupSummary'),
  changeYourFaction: document.getElementById('changeYourFaction'),
  cancelGameSetup: document.getElementById('cancelGameSetup'),
  saveGameSetup: document.getElementById('saveGameSetup'),
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
  kwisatzField: document.getElementById('kwisatzField'),
  kwisatzHaderach: document.getElementById('kwisatzHaderach'),
  variableLeaderField: document.getElementById('variableLeaderField'),
  variableLeaderStrength: document.getElementById('variableLeaderStrength'),
  weapon: document.getElementById('weapon'),
  defense: document.getElementById('defense'),
  status: document.getElementById('battleStatus'),
  log: document.getElementById('battleLog'),
  confirmBtn: document.getElementById('confirmBtn')
};

let selectedLeader = null;
let leaderView = 'leaders';
let capturedFactionKey = null;
let factionsInPlay = new Set();
let setupDraftFactions = new Set();
let setupDraftYourFaction = 'atreides';
let changingYourFaction = false;
let gameSetupWarning = '';

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

function renderList(items) {
  elements.log.replaceChildren();

  items.forEach((text) => {
    const item = document.createElement('li');
    item.textContent = text;
    elements.log.appendChild(item);
  });
}

function setFactionSelectionMode(hasFaction) {
  elements.factionLogo.hidden = !hasFaction;
  elements.currentFactionName.hidden = !hasFaction;
  elements.faction.hidden = hasFaction;
  elements.faction.setAttribute('aria-hidden', String(hasFaction));

  if (hasFaction) {
    elements.faction.tabIndex = -1;
  } else {
    elements.faction.removeAttribute('tabindex');
  }

  // Game setup is also the entry point for choosing the first faction.
  elements.setupTrigger.disabled = false;
  elements.confirmBtn.disabled = !hasFaction;
  elements.forces.disabled = !hasFaction;
  elements.specialForces.disabled = !hasFaction;
  elements.spice.disabled = !hasFaction;
  elements.fremenOpponent.disabled = !hasFaction;
  elements.kwisatzHaderach.disabled = !hasFaction;
  elements.variableLeaderStrength.disabled = !hasFaction;
  document.querySelectorAll('.stepper-btn').forEach((button) => {
    button.disabled = !hasFaction;
  });
}

function resetApplication({ clearStorage = true } = {}) {
  factionsInPlay = new Set();
  setupDraftFactions = new Set();
  setupDraftYourFaction = '';
  changingYourFaction = false;
  gameSetupWarning = '';
  selectedLeader = null;
  leaderView = 'leaders';
  capturedFactionKey = null;

  elements.gameSetup.hidden = true;
  elements.battlePlanResult.hidden = true;
  elements.appLayout.hidden = false;
  elements.setupTrigger.hidden = false;
  elements.faction.value = '';
  elements.factionLogo.alt = '';
  elements.currentFactionName.textContent = '';
  elements.factionRule.textContent = 'Choose your faction to begin.';
  elements.forcesLabel.textContent = 'Forces';
  elements.forces.max = 20;
  elements.forces.value = 0;
  elements.specialForces.value = 0;
  elements.spice.value = 0;
  elements.fremenOpponent.checked = false;
  elements.specialField.hidden = true;
  elements.spiceField.hidden = true;
  elements.fremenOpponentField.hidden = true;
  elements.leaderMenu.replaceChildren();
  elements.variableLeaderField.hidden = true;
  elements.variableLeaderStrength.value = 0;
  elements.kwisatzField.hidden = true;
  elements.kwisatzHaderach.checked = false;
  elements.resultLeaderKilled.checked = false;
  elements.weapon.value = 'none';
  elements.defense.value = 'none';
  updateEquipmentAvailability();
  setFactionSelectionMode(false);

  elements.status.className = 'battle-status battle-status--neutral';
  const statusTitle = document.createElement('strong');
  statusTitle.textContent = 'Choose a faction';
  const statusDetail = document.createElement('span');
  statusDetail.textContent = 'Select your faction before preparing a battle plan.';
  elements.status.replaceChildren(statusTitle, statusDetail);
  renderList(['No factions selected.']);

  if (clearStorage) {
    try {
      localStorage.removeItem(SELECTED_FACTION_STORAGE_KEY);
      localStorage.setItem(FACTIONS_IN_PLAY_STORAGE_KEY, '[]');
    } catch {
      // The calculator still works when browser storage is unavailable.
    }
  }
}
function updateEquipmentAvailability() {
  const canSelectEquipment = Boolean(selectedLeader && selectedLeader.name !== 'No leader');

  elements.weapon.disabled = !canSelectEquipment;
  elements.defense.disabled = !canSelectEquipment;

  if (!canSelectEquipment) {
    elements.weapon.value = 'none';
    elements.defense.value = 'none';
  }
}

function updateVariableLeaderField() {
  const usesVariableStrength = Boolean(selectedLeader?.variableStrength);
  elements.variableLeaderField.hidden = !usesVariableStrength;

  if (!usesVariableStrength) {
    elements.variableLeaderStrength.value = 0;
  }
}

function updateKwisatzAvailability() {
  const eligible = Boolean(
    elements.faction.value === 'atreides' &&
    selectedLeader &&
    selectedLeader.name !== 'No leader'
  );

  elements.kwisatzField.hidden = !eligible;
  if (!eligible) {
    elements.kwisatzHaderach.checked = false;
  }
}

function selectLeader(leader) {
  selectedLeader = leader;
  elements.resultLeaderKilled.checked = false;
  updateEquipmentAvailability();
  updateVariableLeaderField();
  updateKwisatzAvailability();
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
    const displayedStrength = leader.variableStrength ? 'X' : leader.strength;
    option.setAttribute('aria-label', leader.name + ', strength ' + displayedStrength);
    option.title = leader.name + ' · Strength ' + displayedStrength;
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
    const leaders = sourceFaction.leaders.map(([name, strength, image, variableStrength = false]) => ({
      name,
      strength,
      image,
      variableStrength,
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
      .filter(([key]) => key !== 'harkonnen' && factionsInPlay.has(key))
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
  const cheapHero = { name: 'Cheap Hero', strength: 0, image: 'cheap-hero.png', capturedFrom: null };

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

function renderGameSetup() {
  elements.gameSetupGrid.replaceChildren();

  FACTION_ORDER.forEach((key) => {
    const faction = factionConfig[key];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'game-setup-faction';
    button.dataset.active = String(setupDraftFactions.has(key));
    button.dataset.you = String(setupDraftYourFaction === key);
    button.setAttribute('aria-pressed', String(setupDraftFactions.has(key)));
    button.setAttribute('aria-label', faction.name + (setupDraftYourFaction === key ? ', your faction' : setupDraftFactions.has(key) ? ', in play' : ', not in play'));

    const image = document.createElement('img');
    image.className = 'game-setup-logo';
    image.src = 'img/' + faction.logo;
    image.alt = '';

    const name = document.createElement('span');
    name.className = 'game-setup-name';
    name.textContent = faction.name;

    button.append(image, name);
    button.addEventListener('click', () => {
      if (changingYourFaction) {
        setupDraftYourFaction = key;
        setupDraftFactions.add(key);
        changingYourFaction = false;
      } else if (key === setupDraftYourFaction) {
        changingYourFaction = true;
      } else if (setupDraftFactions.has(key)) {
        setupDraftFactions.delete(key);
      } else {
        setupDraftFactions.add(key);
      }

      gameSetupWarning = '';
      renderGameSetup();
    });

    elements.gameSetupGrid.appendChild(button);
  });

  const hasYourFaction = Boolean(factionConfig[setupDraftYourFaction]);

  elements.gameSetupInstructions.textContent = changingYourFaction
    ? 'Choose your faction. Selecting it also adds it to the current game.'
    : 'Select the factions taking part in this game.';
  elements.changeYourFaction.textContent = changingYourFaction ? 'Cancel' : 'Change your faction';
  elements.changeYourFaction.hidden = !hasYourFaction;
  elements.gameSetupSummary.textContent = hasYourFaction
    ? 'You are playing ' + factionConfig[setupDraftYourFaction].name + ' · ' + setupDraftFactions.size + ' factions selected'
    : 'Choose your faction · ' + setupDraftFactions.size + ' factions selected';
  elements.gameSetupNotice.textContent = gameSetupWarning || (setupDraftFactions.size <= 6 ? 6 - setupDraftFactions.size + ' places remaining' : setupDraftFactions.size + ' factions selected');
  elements.gameSetupNotice.dataset.warning = String(Boolean(gameSetupWarning));
}

function showGameSetup() {
  setupDraftFactions = new Set(factionsInPlay);
  setupDraftYourFaction = elements.faction.value;
  changingYourFaction = !factionConfig[setupDraftYourFaction];
  gameSetupWarning = '';
  elements.appLayout.hidden = true;
  elements.gameSetup.hidden = false;
  elements.setupTrigger.hidden = true;
  renderGameSetup();
}

function hideGameSetup() {
  elements.gameSetup.hidden = true;
  elements.appLayout.hidden = false;
  elements.setupTrigger.hidden = false;
}

function commitGameSetup() {
  if (!factionConfig[setupDraftYourFaction]) {
    gameSetupWarning = 'Choose your faction before continuing.';
    changingYourFaction = true;
    renderGameSetup();
    return;
  }

  if (setupDraftFactions.size > 6) {
    gameSetupWarning = 'Choose no more than six factions before continuing.';
    renderGameSetup();
    return;
  }

  factionsInPlay = new Set(setupDraftFactions);
  elements.faction.value = setupDraftYourFaction;

  try {
    localStorage.setItem(SELECTED_FACTION_STORAGE_KEY, setupDraftYourFaction);
    localStorage.setItem(FACTIONS_IN_PLAY_STORAGE_KEY, JSON.stringify([...factionsInPlay]));
  } catch {
    // The calculator still works when browser storage is unavailable.
  }

  hideGameSetup();
  updateFactionFields();
}
function updateFactionFields() {
  const faction = factionConfig[elements.faction.value];
  if (!faction) return;

  setFactionSelectionMode(true);
  const hasSpecialForces = Boolean(faction.special);
  const usesSpice = !faction.fullStrength && !faction.fixedHalfStrength;

  elements.factionLogo.src = 'img/' + faction.logo;
  elements.factionLogo.alt = faction.name + ' emblem';
  elements.currentFactionName.textContent = faction.name;
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
  updateEquipmentAvailability();
  updateVariableLeaderField();
  updateKwisatzAvailability();
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

function getBattlePlanValues() {
  const faction = factionConfig[elements.faction.value];
  if (!faction) return null;

  const forces = numericValue(elements.forces);
  const specialForces = numericValue(elements.specialForces);
  const baseLeaderStrength = selectedLeader?.variableStrength
    ? numericValue(elements.variableLeaderStrength)
    : selectedLeader?.strength || 0;
  const usesKwisatz = Boolean(
    elements.faction.value === 'atreides' &&
    selectedLeader &&
    selectedLeader.name !== 'No leader' &&
    elements.kwisatzHaderach.checked
  );
  const kwisatzBonus = usesKwisatz ? 2 : 0;
  const leaderStrength = baseLeaderStrength + kwisatzBonus;
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

  return {
    faction,
    forces,
    specialForces,
    spice,
    leaderStrength,
    baseLeaderStrength,
    usesKwisatz,
    kwisatzBonus,
    baseForceStrength: faction.fullStrength ? forces : forces / 2,
    spiceStrength: !faction.fullStrength && !faction.fixedHalfStrength ? spice / 2 : 0,
    specialMultiplier,
    specialStrength,
    forceStrength,
    total: forceStrength + leaderStrength
  };
}

function calculatePlan() {
  const plan = getBattlePlanValues();
  if (!plan) return;

  const { faction, forces, specialForces, spice, leaderStrength, forceStrength, total } = plan;
  const status = equipmentStatus();
  const variableLeader = Boolean(selectedLeader?.variableStrength);
  elements.previewForces.textContent = formatScore(forceStrength);
  elements.previewLeader.textContent = variableLeader ? 'X' : formatScore(leaderStrength);
  elements.previewTotal.textContent = variableLeader
    ? formatScore(forceStrength) + ' + X'
    : formatScore(total);

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

  if (!elements.battlePlanResult.hidden) {
    renderBattlePlanResult(plan);
  }
}

function renderResultCard(card, image, name, value, labels) {
  const isEmpty = value === 'none';
  card.dataset.empty = String(isEmpty);
  name.textContent = labels[value];
  image.hidden = isEmpty;

  if (!isEmpty) {
    image.src = value === 'worthless'
      ? 'img/card-worthless.png'
      : 'img/card-treachery-back.png';
    image.alt = labels[value];
  }
}

function renderStrengthBreakdown(plan, effectiveLeaderStrength, leaderKilled) {
  elements.resultBreakdown.replaceChildren();

  function addRow(label, value, emphasis = false) {
    const row = document.createElement('li');
    if (emphasis) row.classList.add('result-breakdown__total');
    const term = document.createElement('span');
    term.textContent = label;
    const calculation = document.createElement('strong');
    calculation.textContent = value;
    row.append(term, calculation);
    elements.resultBreakdown.appendChild(row);
  }

  const regularLabel = plan.faction.regularLabel || (plan.faction.special ? 'Ordinary forces' : 'Forces');
  const regularMultiplier = plan.faction.fullStrength ? '1' : '½';
  addRow(regularLabel, plan.forces + ' × ' + regularMultiplier + ' = ' + formatScore(plan.baseForceStrength));

  if (plan.faction.fullStrength) {
    addRow('Spice support', 'Not required');
  } else if (plan.faction.fixedHalfStrength) {
    addRow('Spice support', 'Not available');
  } else {
    addRow('Spice support', plan.spice + ' × ½ = +' + formatScore(plan.spiceStrength));
  }

  if (plan.faction.special) {
    addRow(
      plan.faction.special,
      plan.specialForces + ' × ' + plan.specialMultiplier + ' = +' + formatScore(plan.specialStrength)
    );
  }

  addRow('Dialed strength', formatScore(plan.forceStrength), true);

  const leaderName = selectedLeader?.name || 'No leader';
  const leaderValue = leaderKilled
    ? formatScore(plan.baseLeaderStrength) + ' → 0 (killed)'
    : '+' + formatScore(plan.baseLeaderStrength);
  addRow(leaderName, leaderValue);

  if (plan.usesKwisatz) {
    addRow(
      'Kwisatz Haderach',
      leaderKilled ? '+2 → 0 (leader killed)' : '+2'
    );
  }
  addRow(
    'Final total',
    formatScore(plan.forceStrength) + ' + ' + formatScore(effectiveLeaderStrength) + ' = ' + formatScore(plan.forceStrength + effectiveLeaderStrength),
    true
  );
}

function renderBattlePlanResult(plan = getBattlePlanValues()) {
  if (!plan) return;

  const hasLeaderToken = Boolean(selectedLeader?.image);
  const hasPlayedHero = Boolean(selectedLeader && selectedLeader.name !== 'No leader');
  const leaderKilled = hasPlayedHero && elements.resultLeaderKilled.checked;
  const effectiveLeaderStrength = leaderKilled ? 0 : plan.leaderStrength;
  const finalTotal = plan.forceStrength + effectiveLeaderStrength;

  elements.resultFactionName.textContent = plan.faction.name.toUpperCase();
  elements.resultForceStrength.textContent = formatScore(plan.forceStrength);
  elements.resultForces.textContent = formatScore(plan.forceStrength);
  elements.resultLeader.textContent = formatScore(effectiveLeaderStrength);
  elements.resultTotal.textContent = formatScore(finalTotal);
  renderStrengthBreakdown(plan, effectiveLeaderStrength, leaderKilled);
  elements.resultLeaderName.textContent = selectedLeader?.name || 'No leader';
  elements.resultLeaderSlot.dataset.killed = String(leaderKilled);
  elements.resultKwisatzImage.hidden = !plan.usesKwisatz;
  elements.resultKwisatzImage.dataset.killed = String(leaderKilled);
  elements.leaderKilledField.hidden = !hasPlayedHero;

  if (!hasPlayedHero) {
    elements.resultLeaderKilled.checked = false;
  }

  if (selectedLeader?.image) {
    elements.resultLeaderImage.src = 'img/' + selectedLeader.image;
    elements.resultLeaderImage.alt = selectedLeader.name;
    elements.resultLeaderImage.hidden = false;
    elements.resultLeaderFallback.hidden = true;
  } else {
    elements.resultLeaderImage.hidden = true;
    elements.resultLeaderFallback.hidden = false;
    elements.resultLeaderFallback.textContent = selectedLeader?.name === 'Cheap Hero' ? 'H' : '—';
  }

  renderResultCard(elements.resultWeaponCard, elements.resultWeaponImage, elements.resultWeaponName, elements.weapon.value, {
    none: 'No weapon', projectile: 'Projectile weapon', poison: 'Poison weapon', lasgun: 'Lasgun', worthless: 'Worthless card'
  });
  renderResultCard(elements.resultDefenseCard, elements.resultDefenseImage, elements.resultDefenseName, elements.defense.value, {
    none: 'No defense', shield: 'Shield', snooper: 'Snooper', worthless: 'Worthless card'
  });

  updateVariableLeaderField();
  elements.resultOutcome.className = leaderKilled
    ? 'battle-status battle-status--danger'
    : 'battle-status battle-status--safe';
  elements.resultOutcome.textContent = leaderKilled
    ? 'The leader was killed and contributes no strength. Final total: ' + formatScore(finalTotal) + '.'
    : 'The leader contributes ' + formatScore(effectiveLeaderStrength) + '. Final total: ' + formatScore(finalTotal) + '.';
  elements.resultWheel.setAttribute('aria-label', 'Battle wheel showing force strength ' + formatScore(plan.forceStrength));
}

function showBattlePlanResult() {
  const plan = getBattlePlanValues();
  if (!plan) return;

  elements.appLayout.hidden = true;
  elements.gameSetup.hidden = true;
  elements.battlePlanResult.hidden = false;
  elements.setupTrigger.hidden = true;
  renderBattlePlanResult(plan);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideBattlePlanResult() {
  elements.battlePlanResult.hidden = true;
  elements.appLayout.hidden = false;
  elements.setupTrigger.hidden = false;
  calculatePlan();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
  elements.fremenOpponent,
  elements.kwisatzHaderach,
  elements.variableLeaderStrength
].forEach((control) => {
  control.addEventListener('input', calculatePlan);
  control.addEventListener('change', calculatePlan);
});

elements.faction.addEventListener('change', () => {
  const factionKey = elements.faction.value;
  if (!factionConfig[factionKey]) return;

  factionsInPlay.add(factionKey);

  try {
    localStorage.setItem(SELECTED_FACTION_STORAGE_KEY, factionKey);
    localStorage.setItem(FACTIONS_IN_PLAY_STORAGE_KEY, JSON.stringify([...factionsInPlay]));
  } catch {
    // The calculator still works when browser storage is unavailable.
  }

  updateFactionFields();
});

elements.resetApplication.addEventListener('click', () => resetApplication());
elements.resetApplication.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    resetApplication();
  }
});
elements.setupTrigger.addEventListener('click', showGameSetup);
elements.cancelGameSetup.addEventListener('click', hideGameSetup);
elements.saveGameSetup.addEventListener('click', commitGameSetup);
elements.changeYourFaction.addEventListener('click', () => {
  changingYourFaction = !changingYourFaction;
  gameSetupWarning = '';
  renderGameSetup();
});
elements.confirmBtn.addEventListener('click', showBattlePlanResult);
elements.backToPlan.addEventListener('click', hideBattlePlanResult);
elements.resultLeaderKilled.addEventListener('change', () => renderBattlePlanResult());

try {
  const savedFaction = localStorage.getItem(SELECTED_FACTION_STORAGE_KEY);
  if (savedFaction && factionConfig[savedFaction]) {
    elements.faction.value = savedFaction;
  }

  const savedFactionsInPlay = JSON.parse(localStorage.getItem(FACTIONS_IN_PLAY_STORAGE_KEY) || '[]');
  if (Array.isArray(savedFactionsInPlay)) {
    factionsInPlay = new Set(savedFactionsInPlay.filter((key) => Boolean(factionConfig[key])));
  }
} catch {
  // Use the default setup when browser storage is unavailable.
}

if (factionConfig[elements.faction.value]) {
  factionsInPlay.add(elements.faction.value);
  updateFactionFields();
} else {
  resetApplication({ clearStorage: false });
}