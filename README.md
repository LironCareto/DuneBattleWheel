# Dune Battle Wheel

A digital battle wheel and combat-plan calculator for Gale Force Nine's **Dune** board game.

## Website

[Open Dune Battle Wheel](https://lironcareto.github.io/DuneBattleWheel/).

The website is published with GitHub Pages from the `main` branch and the `/(root)` folder. Each push to `main` updates the website. The `.nojekyll` file serves the HTML, CSS, JavaScript, and images directly without Jekyll processing.

## What this project does

Dune Battle Wheel provides a mobile-friendly way to prepare and resolve a battle plan while applying faction-specific combat rules.

The current version includes:

- game setup for up to six participating factions and a persistent player faction;
- all twelve official factions from the base game and its expansions;
- ordinary and special-force strength calculations, including faction-specific spice support;
- faction leaders, Cheap Heroes, captured Harkonnen leaders, Zoal, and the Kwisatz Haderach;
- weapon and defense selection;
- a live strength preview with a complete calculation breakdown;
- a final Battle Wheel summary showing the dialed strength, leader, cards, casualties, and final total;
- a reset control for quickly returning to an empty test state.

## Using the application

1. Open **Setup**, select the factions taking part, and mark your faction.
2. Enter the forces committed to battle and any applicable spice support.
3. Choose a leader or Cheap Hero and the cards used in the battle plan.
4. Review the strength preview and confirm the plan.
5. Use the summary screen to resolve leader casualties and verify the final result.

Game setup is stored locally in the browser so that the player does not need to select their faction again after every refresh.

## Running locally

The project is a static website with no build step or package dependencies. Open `index.html` directly, or serve the repository root with any static HTTP server.

## Current status

This project is a work in progress. Calculations and faction interactions are being expanded and should be checked against the applicable official rules when used during play.

## License

The original software code contributed to this project is licensed under the [MIT License](LICENSE).

The MIT License applies only to original code, including the HTML structure, CSS, JavaScript, and project scripts. It does not cover game rules, game data, rulebook text, artwork, images, logos, fonts, trademarks, or any other third-party material included in the project.

All third-party material remains subject to its respective owners' rights and any applicable licenses. No rights to that material are granted by this project's MIT License.

## Disclaimer

This is an unofficial, non-commercial fan project created as a play aid for owners and players of the game. It is not affiliated with or endorsed by Gale Force Nine or any of the rights holders associated with Dune.

All third-party trademarks, artwork, logos, game data, rules, and other protected materials remain the property of their respective rights holders. Their inclusion does not imply ownership or endorsement.