const score = JSON.parse(localStorage.getItem('score')) || {wins : 0 , loss : 0};

//score is a object {wins : ,loses: }. so initially set wins:0 and loses:0 or if any previous data present then save that to score variable from local storage

        //function to comapre user choice with computer choice
        function game(userMove)
        {
            let computerMove = computerChoice();
            let result = '';
            if(userMove === computerMove)
            {
                result = `<pre class="text-sm font-light">You : ${userMove}      Computer : ${computerMove}</pre> <br> 
                <p>Congratulations you win!</p>`;
                score.wins +=1;
            }
            else{
                result = `<pre class="text-sm font-light">You : ${userMove}      Computer : ${computerMove}</pre> <br> 
                <p>Sorry you lose!</p>`;
                score.loss +=1;
            }

            localStorage.setItem('score' , JSON.stringify(score));  //set the latest data to local storage
            document.querySelector('.js-result').innerHTML = result;
            updateScore();
        }

        function updateScore()
            {
                document.querySelector('.js-score').innerHTML=

                `<table>
                <tr>
                <th>Wins</th> 
                <td>
                <button class="border-2  rounded-2xl px-6 py-1  m-2 bg-yellow-500  text-xl font-semibold text-zinc-50 shadow-xl cursor-default"> 
                ${score.wins}
                </button>
                </td>
                </tr> 
                <th>Loses</th> 
                <td>
                <button class="border-2  rounded-2xl px-6 py-1  m-2 bg-yellow-500  text-xl font-semibold text-zinc-50 shadow-xl cursor-default">
                ${score.loss}
                </button>
                </td>
                </tr> `;
            }

        //function for actual toss 
        function computerChoice()
        {
            let computerMove = '';
            let random = Math.random();

            if(random >=0 && random <= 0.5)
            {
                computerMove = 'Heads';
            }
            else if(random >0.5 && random <=1)
            {
                computerMove = 'Tails'
            }
            console.log(computerMove); //to crosscheck 
            return computerMove;

         
        }

        function decision()
        {
            let move = '';
            let random = Math.random();

            if(random >=0 && random <= 0.5)
            {
                move = 'Heads';
            }
            else if(random >0.5 && random <=1)
            {
                move = 'Tails'
            }
            console.log(move); //to crosscheck 
            return move;
        }

        function updateMove()
        {


            let text = decision()
            document.querySelector('.js-text').innerHTML = text;
            document.querySelector('.js-decision-result').innerHTML = `Its ${text}!`
            document.querySelector('.js-text').disabled = true;



        }