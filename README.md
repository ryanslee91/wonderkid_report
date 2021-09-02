

## Project Name

WonderKid Report


## Overview

 WonderKid Report is a full-stack website that provides scouting reports regarding top prospects of soccer(or football) industry. It allows users to browse over all the reports on the website. If authorized by registering and signing in, users may create, edit and delete posts, which are associated to their own accounts. This app was built with Ruby on Rails for back-end and React.js for the front-end.
 
### MVP

#### Goals

- Create full CRUD functionality for creating, reading, updating and deleting post.
- Create a non-authorized routes for landing page and player report browsing.
- Create an authorized routes for creating, editing and deleting player reports.
- Build a NoSQL database with PostegreSQL to host all user information.
- Build an user authentication and association to restrict user interaction with app's contents.
- Set media queries for two different devices other than computer screen. 

#### Libraries and Dependencies  

```
| Library | Description |  |  |

| React | Front-end user interaction and state control through manipulation of a virtual DOM. 
| React Router | Site navigation and routing for single page applications 
| Rails | Backend model-view-controller framework for Ruby 
| Axios | Promise-based HTTP client for the browser and node.js 
```

### Client Wireframe
![Wireframe](./assets/pr4diagram.png)


### React Component Tree
![Wireframe](./assets/p4compotree.png)

### React Component Hierarchy

```
src
|__ App.jsx
|__ index.js
|__ assets/
|__ components/
      |__ Layout/
          |__ Layout.jsx
          |__ Layout.css
      |__ Nav/
          |__ Nav.jsx
          |__ Nav.css
      |__ Footer/
          |__ Footer.jsx
          |__ Footer.css
      |__ Search/
          |__ Search.jsx
          |__ Search.css
      |__ Sort/
          |__ Sort.jsx
          |__ Sort.css
|__ screens/
      |__ Home/
          |__ Home.jsx
          |__ Home.css
      |__ Players/
          |__ Players.jsx
          |__ Players.css
      |__ PlayerDetail/
          |__ PlayerDetail.jsx
          |__ PlayerDetail.css
      |__ PlayerEdit/
          |__ PlayerEdit.jsx
          |__ PlayerEdit.css
      |__ PlayerCreate/
          |__ PlayerCreate.jsx
          |__ PlayerCreate.css
      |__ SignIn/
          |__ SignIn.jsx
          |__ SignIn.css
      |__ Register/
          |__ Register.jsx
          |__ Register.css
|__ services/
      |__ apiConfig.js
      |__ users.js
      |__ players.js
      |__ positions.js
```


## Time Estimates

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| CORE BACKEND STRUCTURE | H | 3hrs| 4hrs | 4hrs |
| BACKEND CRUD | H | 2hrs| 4hrs | 4hrs |
| BACKEND AUTH | H | 2hrs| 3hrs | 3hrs |
| SEED DATA | H | 2hrs| 1hr | 1hr |
| FRONTEND COMPONENTS HIERARCHY | H | 2hrs| 2hrs | 2hrs |
| FRONTEND CRUD | H | 3hrs| 3hrs | 3hrs |
| FRONTEND AUTH | H | 3hrs| 3hrs | 3hrs |
| FRONTEND ROUTING | H | 2hrs| 2hrs |2hrs  |
| FRONTEND STATE MANAGEMENT | H | 2hrs| 2hrs | 2hrs |
| LANDING PAGE LAYOUT | H | 1hrs| 2hrs | 2hrs |
| DETAIL PAGE LAYOUT | H | 1hrs| 2hrs | 2hrs |
| EDIT PAGE LAYOUT | H | 1hrs| 1hrs | 1hrs |
| CREATE PAGE LAYOUT | H | 1hrs| 1hrs | 1hrs |
| SIGN IN / REGISTER LAYOUT | H | 1hrs| 1hrs | 1hrs |
| BASIC CSS | H | 3hrs| 3hrs | 3hrs |
| DETAILED CSS | H | 3hrs| 2hrs | 2hrs |
| MEDIA QUERIES SETTING | H | 3hrs| 1hrs | 1hrs |
| DEBUGGING | H | 3hrs| 3hrs | 3hrs |
| REVIEW | H | 2hrs| 2hrs | 2hrs |
| Total | H | 40hrs| 42hrs | 42hrs |

## Server (Back-End)

### ERD Model
![Wireframe](./assets/p4erd.png)

## Post MVP

- Functionality for restricting each user to only be able to update or delete their own posts only.
- Functionality for restricting non-user to be able to read only first few lines of reports.
- Some experimental challenges on CSS for player report cards.
- Create a rank table that lists the most potential players based on ratings.
- Make a like button that may indicate the popularity of each player. 

## Code Showcase
 
  <!-- <div className="tab-container">
      <div className="bloc-tabs">
        <div className={toggleState === 1 ? "tab active-tab" : "tab"} onClick={() => toggleTab(1)}>Featured</div>
        <div className={toggleState === 2 ? "tab active-tab" : "tab"} onClick={() => toggleTab(2)}>All Players</div>
     
      </div>
      <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"}>
        <FeaturedCard />
        </div>
        <div className={toggleState === 2 ? "content active-content" : "content"}>
        <Link id="sortLeague" to="/leagues/"><span id="sortSpan">Sort By Leagues</span></Link>
        {leagues?.map((league) => (
        <p key={league.id}>{league.name}</p>
      ))}
         {leagues?.map((league) => (
        <p key={league.id}>{league.name.players}</p>
      ))} -->

## Code Issues & Resolutions

I have been having a problem to access the league data which I made a join table to associate with each player.