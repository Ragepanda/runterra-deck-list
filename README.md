# Runeterra Nexus
Runeterra Nexus is a React/Node/Express/MySQL app made for the game Runeterra, a card game based off of the cast of League of Legends. This site allows someone to browse and search through the entire library of cards in the game, draft decks, save those decks under a profile, view other decks, upvote them and browse your created and liked decks under a profile page. This gives users a place to store deck ideas that they can't draft in the game yet, and to share and view decks in a community environment. There is also a developer podcast and set of articles about deck building advice. 

**Prominent Technologies and Packages**
 * Passport for OAUTH Google login
 * Sequelize to manage multiple Many-to-Many MySQL relationships
 * react-helmet and react-snap for SEO and prerendering for search engine crawlers. 
 * lodash.debounce for infinite scrolling
 * react-spinners for load animations
 * chart.js for displaying "mana curves" for decks


**See It In Action**

 * Visit our production website at: http://runeterranexus.com

 * Check out this [video demonstration](https://www.youtube.com/watch?v=DVJZuoRDpSo)
 
 
 ***


**Deck Display Page**

<img src=example-1.gif></img>

Here you can see our deck lists page and individual deck page, which allow the user to view their own and other users' decks, as well as analyze the decks for in-game currency cost, mana curves and other important trends. 

***


**Deck Builder Example**

<img src=example-2.gif></img>

With the deck builder tool, the user can draft a deck with failsafes to prevent the creation of an illegal deck. This includes assuring that no more than two factions, no more than six champions and no more than forty total cards are selected. One can then name, write a description for and save a deck under their login. The deck builder has refined filter tools for helping to find exact cards in the set of nearly 500 cards. 


***


**Set Viewer Filter Tools**

<img src=example-3.gif></img>

This set viewer offers the same filter tools as the deck builder, but allows the user to navigate to individual card pages to learn more details about them, as well as their alternate forms and byproduct cards that don't appear in the set viewer/deck builder. 


***


**Deck Deletion, Likes and Profile**

<img src=example-4.gif></img>

Our OAUTH google login provides a secure gate through which one can create decks, but also like/bookmark decks, view those bookmarked decks through a profile page, and also view/delete your created decks from a profile page. 


