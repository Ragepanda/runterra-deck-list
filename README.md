# Runeterra Nexus
Runeterra Nexus is a React/Node/Express/MySQL app made for the game Runeterra, a card game based off of the cast of League of Legends. This site allows someone to browse and search through the entire library of cards in the game, draft decks, save those decks under a profile, view other decks, upvote them and browse your created and liked decks under a profile page. This gives users a place to store deck ideas that they can't draft in the game yet, and to share and view decks in a community environment. There is also a developer podcast and set of articles about deck building advice. 

Prominent Technologies and Packages:
 * Passport for OAUTH Google login
 * Sequelize to manage multiple Many-to-Many MySQL relationships
 * react-helmet and react-snap for SEO and prerendering for search engine crawlers. 
 * lodash.debounce for infinite scrolling
 * react-spinners for load animations
 * chart.js for displaying "mana curves" for decks
