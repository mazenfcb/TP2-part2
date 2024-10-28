document.addEventListener("DOMContentLoaded", function () {
    let s = document.getElementById('start');
    let e = document.getElementById('end');
    let boundary = document.querySelectorAll('.boundary');
    let status = document.getElementById('status');

    let maze = document.getElementById('maze')
    let gameState = 'active';

    if (s && e) {
        s.addEventListener("click", startgame);
        function startgame() {
            gameState = 'active';
            console.log('started');
            boundary.forEach(bound => {
                bound.style.backgroundColor = "#eeeeee";
            });
            game();
        }
    }



    function game() {

        boundary.forEach(bound => bound.addEventListener("mouseover", ()=> losegame("loser")));
        e.addEventListener("mouseover", wingame);
        maze.addEventListener("mouseleave", ()=>losegame("cheater"))

    }

    function losegame(a) {
        if (gameState === 'active') {
            gameState = 'inactive'

            //     boundary[i].onmouseover = function() {
            //         this.style.backgroundColor = "#ff8888";
            //     };
            // }

            boundary.forEach(bound => {
                bound.style.backgroundColor = "#ff8888";
            });
            if (a === "loser") {
                status.textContent = 'You lose!';
            }
            if (a === 'cheater') {
                status.textContent = 'You cheater';

            }


        }

    }

    function wingame() {
        if (gameState === 'active') {
            gameState = 'inactive'
            boundary.forEach(bound => {
                bound.style.backgroundColor = "lightgreen";
                // alert('we have a winner')

                status.textContent = 'You win';

            });

        }

    }

});





