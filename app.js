    //Create UI variables    
    const gameContainer = document.querySelector(".game-container");
    const scoreDisplay = document.querySelector("#score-display");
    const lifeContainer = document.querySelector(".life-container");
    const lifeDisplay = document.querySelectorAll(".life");
    const statusDisplay = document.querySelector(".game-status-display");
    //Gameboard variables
    const width = 28;
    const grid = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1,
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1,
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1,
        1, 9, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 9, 1,
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
        1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
        1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
        1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 3, 3, 3, 3, 3, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 5, 6, 7, 8, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
        0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
        1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1,
        1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1,
        1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1,
        1, 9, 2, 2, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 9, 1,
        1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1,
        1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 
        1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1,
        1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1,
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];
    
    const squares = [];

    //Game play variables
    const directions = ["up", "down", "left", "right"];
    let score = 0;
    let pacdots = 292;
    let liveCount = 3;
    let gameover = false;

    //Function to display lives
    function lives() {
        //Clear lives each time function is called
        lifeContainer.innerHTML = "";
        //Loop however many lives are currently in the livecount
        for(let i = 0; i < liveCount; i++) {
            //for each live create a div and append to the life container
            let div = document.createElement("div");
            div.innerHTML = `<div class="life"></div>`;
            lifeContainer.appendChild(div);
        };
    };

    //Display lives on page load
    lives();

    //Create board
    function createBoard() {
        //Loop through grid and for every item append a div to the game container
        for(let i = 0; i < grid.length; i++) {
            const square = document.createElement("div");
            gameContainer.appendChild(square);
            //Push each new square to the squares array
            squares.push(square);
        }

        //Loop through the grid and for each item apply the correct class to the corresponding square
        grid.forEach((square, index) => {
            if(square === 1) {
                squares[index].classList.add("wall");
            } else if(square === 2) {
                squares[index].classList.add("pac-dot");
                squares[index].classList.add("tunnel");
            } else if(square === 3) {
                squares[index].classList.add("ghost-lair");
            } else if(square === 9) {
                squares[index].classList.add("power-pellet");
            }

        });

    };

    //Display board upon page load
    createBoard();

    //Set pacman starting index
    let pacmanCurrentIndex = 629;
    //Initiate variable to track pacmans previous index
    let pacmanLastIndex;
    //Display pacman in UI
    squares[pacmanCurrentIndex].classList.add("pac-man");

    //Function to move pacman
    function movePacMan(e) {
        //Only run following code if not gameover
        if(!gameover) {
            //Remove class
        squares[pacmanCurrentIndex].classList.remove("pac-man");

        //Check which key is pressed and move pacman accordingly
        if(e.keyCode === 37 && pacmanCurrentIndex % width !== 0) {
            pacmanLastIndex = pacmanCurrentIndex;
            //Check if user is wanting to teleport to other side
            if(pacmanCurrentIndex -1 === 392) {
                pacmanCurrentIndex = 418;
            } else {
                pacmanCurrentIndex -= 1;
            }
        } else if(e.keyCode === 38 && pacmanCurrentIndex - width >= 0) {
            pacmanLastIndex = pacmanCurrentIndex;
            pacmanCurrentIndex -= width;
        } else if(e.keyCode === 39 && pacmanCurrentIndex % width < width -1) {
            pacmanLastIndex = pacmanCurrentIndex;
             //Check if user is wanting to teleport to other side
            if(pacmanCurrentIndex +1 === 419) {
                pacmanCurrentIndex = 393;
            } else {
                pacmanCurrentIndex += 1;
            }
        } else if(e.keyCode === 40 && pacmanCurrentIndex + width < width * width) {
            pacmanLastIndex = pacmanCurrentIndex;
            pacmanCurrentIndex += width;
        };

        //If square contains a pac-dot, remove dot
        if(squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
            squares[pacmanCurrentIndex].classList.remove("pac-dot");
            squares[pacmanCurrentIndex].classList.add("pac-man");
            //Increment score by 100 and decrease pacdots by one
            score += 100;
            pacdots -= 1;
        } 
        
        //If square contains a power pellet, remove the pellet
        if(squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
            squares[pacmanCurrentIndex].classList.remove("power-pellet");
            squares[pacmanCurrentIndex].classList.add("pac-man");
            //Increment score by 500 and decrease pacdots by one
            score += 500;
            pacdots -= 1;
        } 
        
        //Check if next square is a wall
        if(squares[pacmanCurrentIndex].classList.contains("wall") || squares[pacmanCurrentIndex].classList.contains("ghost-lair")) {
            //If pacman tries to move into a wall set pacmans index to the previous value and display in that sqaure
            pacmanCurrentIndex = pacmanLastIndex;
            squares[pacmanCurrentIndex].classList.add("pac-man");
        }

        //Check if pacman runs into a ghost
        if(squares[pacmanCurrentIndex].classList.contains("blinky") || squares[pacmanCurrentIndex].classList.contains("pinky") || squares[pacmanCurrentIndex].classList.contains("inky") || squares[pacmanCurrentIndex].classList.contains("clyde")) {
            squares[pacmanCurrentIndex].classList.remove("pac-man");
            //Reset current index
            pacmanCurrentIndex = 629;
            //Decrease score
            score -= 1000;
            //Decrease life count
            liveCount -= 1;
            //Display new life amount
            lives();
            squares[pacmanCurrentIndex].classList.add("pac-man");
        }

        //Check if livecount or pacdots hit 0
        if(liveCount === 0) {
            //If liveCount hits zero set to gameover and display gameover
            statusDisplay.innerHTML = "GAME OVER";
            gameover = true;
        } else if(pacdots === 0) {
            //If pacdots hit zero set to gameover and display you win
            statusDisplay.innerHTML = "YOU WIN!!!";
            gameover = true;
        }
        
        //Display pacman in the next square
        squares[pacmanCurrentIndex].classList.add("pac-man");
        //Display score
        scoreDisplay.textContent = score;

        }

    };

    //Set ghost current index's
    let blinkyCurrentIndex = 376;
    let blinkyLastIndex;
    squares[blinkyCurrentIndex].classList.add("blinky");

    let pinkyCurrentIndex = 377;
    let pinkyLastIndex;
    squares[pinkyCurrentIndex].classList.add("pinky");

    let inkyCurrentIndex = 378;
    let inkyLastIndex;
    squares[inkyCurrentIndex].classList.add("inky");

    let clydeCurrentIndex = 379;
    let clydeLastIndex;
    squares[clydeCurrentIndex].classList.add("clyde");

    //Function to move ghosts
    function moveGhost(current, last, apply) {

        //Capture ghost details
        let ghost = current;
        let ghostLast = last;
        let className = apply;
        setInterval(() => {
            //Only run following code if not gameover
            if(!gameover) {
                squares[ghost].classList.remove(className);

        //Select random direction
        let random = Math.floor(Math.random() * directions.length)
        let nextMove = directions[random];

        //Move ghosts in random direction
        if(nextMove === "left" && ghost % width !== 0) {
            ghostLast = ghost;
            ghost -= 1;
        } else if(nextMove === "up" && ghost - width >= 0) {
            ghostLast = ghost;
            ghost -= width;
        } else if(nextMove === "right" && ghost % width < width -1) {
            ghostLast = ghost;
            ghost += 1;
        } else if(nextMove === "down" && ghost + width < width * width) {
            ghostLast = ghost;
            ghost += width;
        }
    
        //Check if ghost tries to go into a wall
        if(squares[ghost].classList.contains("wall")) {
            ghost = ghostLast;
            squares[ghost].classList.add(className);
        }

        //Check if ghost runs into pacman
        if(squares[ghost].classList.contains("pac-man")) {
            squares[pacmanCurrentIndex].classList.remove("pac-man");
            //Reset pacmans current index
            pacmanCurrentIndex = 629;
            //Reduce score by 1000
            score -= 1000;
            //reduce lives by 1
            liveCount -= 1;
            //Display lives
            lives();
            squares[pacmanCurrentIndex].classList.add("pac-man");
        }

        squares[ghostLast].classList.remove(className);
        squares[ghost].classList.add(className);

            }

        }, 300);


    }

    //Place event listener on document
    document.addEventListener("keyup", movePacMan);

    //Move each ghost
    moveGhost(blinkyCurrentIndex, blinkyLastIndex, "blinky");
    moveGhost(pinkyCurrentIndex, pinkyLastIndex, "pinky");
    moveGhost(inkyCurrentIndex, inkyLastIndex, "inky");
    moveGhost(clydeCurrentIndex, clydeLastIndex, "clyde");