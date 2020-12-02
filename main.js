
{
    
        function judge() {

            // const ul = document.querySelectorAll('ul');

            // while(ul.firstChild){
            //     ul.removeChild(ul.firstChild);
            // }
            const output = document.getElementById('output');
            output.innerHTML=" ";

            const input_FizzNum = parseFloat(document.getElementById("FizzNum").value);
            const input_BuzzNum = parseFloat(document.getElementById("BuzzNum").value);
            
            if(!Number.isInteger(input_FizzNum || input_BuzzNum)){
                const p = document.createElement('p');
                p.classList.add ='output';
                p.textContent = '整数値を入力してください';
                const body = document.querySelector('body');
                body.appendChild(p);
                return;
            }
            // for(let i = 1; i < 99; i++){
            //     if(i % input_FizzNum === 0 && i % input_BuzzNum === 0) {
            //         const p = document.createElement('p');
            //         p.classList.add('output');
            //         p.textContent = 'FizzBuzz' + i;
            //         const body = document.querySelector('body');
            //         body.appendChild(p);    
            //     } else if(i % input_FizzNum === 0) {
            //         const p = document.createElement('p');
            //         p.classList.add('output');
            //         p.textContent = 'Fizz' + i;
            //         const body = document.querySelector('body');
            //         body.appendChild(p);
            //     } else if(i % input_BuzzNum === 0) {
            //         const p = document.createElement('p');
            //         p.classList.add('output');
            //         p.textContent = 'Buzz' + i;
            //         const body = document.querySelector('body');
            //         body.appendChild(p);
            //     } 
            // }
            for(let i = 1; i < 99; i++){
                if(i % input_FizzNum === 0 && i % input_BuzzNum === 0) {
                    const p = document.createElement('p');
                    p.classList.add('output');
                    p.textContent = 'FizzBuzz' + i;
                    const output = document.getElementById('output');
                    output.appendChild(p);    
                } else if(i % input_FizzNum === 0) {
                    const p = document.createElement('p');
                    p.classList.add('output');
                    p.textContent = 'Fizz' + i;
                    const output = document.getElementById('output');
                    output.appendChild(p);
                } else if(i % input_BuzzNum === 0) {
                    const p = document.createElement('p');
                    p.classList.add('output');
                    p.textContent = 'Buzz' + i;
                    const output = document.getElementById('output');
                    output.appendChild(p);
                } 
            }
            
            
        }
        
        document.querySelector('button').addEventListener('click', () => {
            // const p = document.getElementsByClassName('output');
            // const p = document.querySelectorAll.classList.contains('output');
           
            // while(p){
            //     p.remove();
            // }
            // if(p){
            //     p.innerHTML = '';
            // }
            // console.log(p)
            
            judge();
            
        }); 
    

}
