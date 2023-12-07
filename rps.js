const score = JSON.parse(localStorage.getItem('score'));

    updateScore();
        function playgame(playerMove)
        {
            const cmove = pickmove();

            let result = '';
            if(playerMove==='scissors')
            {
                if(cmove === 'rock')
                {
                    result = 'Lose';
                }
                else if(cmove === 'paper')
                {
                    result = 'Win'; 
                }
                else if(cmove === 'scissor')
                {
                    result = 'Tie';
                }
            }
            else if(playerMove === 'rock')
            {
                if(cmove === 'rock')
                {
                    result = 'Tie';
                }
                else if(cmove === 'paper')
                {
                    result = 'Loss'; 
                }
                else if(cmove === 'scissor')
                {
                    result = 'Win';
                }
            }
            else if(playerMove === 'paper')
            {
                if(cmove === 'paper')
                {
                    result = 'Tie'; 
                }
                else if(cmove === 'rock')
                {
                    result = 'Win';
                }
                else if(cmove === 'scissor')
                {
                    result = 'Loss';
                }
            }

            if(result === 'Win')
            {
                score.win+=1;
            }
            else if(result === 'Loss')
            {
                score.loss+=1;
            }
            else if(result === 'Tie')
            {
                score.tie+=1;
            }

            localStorage.setItem('score' , JSON.stringify(score));

            document.querySelector('.result').innerHTML = result;

            document.querySelector('.selection').innerHTML = `You
            <img src="img/${playerMove}-emoji.png" class="move-icon">
            <img src="img/${cmove}-emoji.png" class="move-icon">
            Computer`;

            updateScore();
        }

        function updateScore(){
            document.querySelector('.score').innerHTML = `Wins : ${score.win} , Loss : ${score.loss} , Tie : ${score.tie}`;
        }

        function pickmove()
        {
            const random1 = Math.random();
            let cmove = '';
            if(random1 > 0 && random1 < 1/3)
            {
                cmove = 'rock';
            }
            else if(random1 > 1/3 && random1 < 2/3)
            {
                cmove = 'paper'
            }
            else{
                cmove = 'scissor';
            }
            return cmove;
        }