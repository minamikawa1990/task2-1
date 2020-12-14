
{
    
        function judge() {

            const output = document.getElementById('output');
            output.innerHTML=" ";

            const input_FizzNum = parseFloat(document.getElementById("FizzNum").value);
            const input_BuzzNum = parseFloat(document.getElementById("BuzzNum").value);
            
            if(!Number.isInteger(input_FizzNum && input_BuzzNum)){
                const p = document.createElement('p');
                p.textContent = '整数値を入力してください';
                output.appendChild(p);
                return;
            }

            
            for(let i = 1; i < 99; i++){
                if(i % input_FizzNum === 0 && i % input_BuzzNum === 0) {
                    const p = document.createElement('p');
                    p.classList.add('output');
                    p.textContent = 'FizzBuzz' + i;
                    output.appendChild(p);    
                } else if(i % input_FizzNum === 0) {
                    const p = document.createElement('p');
                    p.classList.add('output');
                    p.textContent = 'Fizz' + i;
                    output.appendChild(p);
                } else if(i % input_BuzzNum === 0) {
                    const p = document.createElement('p');
                    p.classList.add('output');
                    p.textContent = 'Buzz' + i;
                    output.appendChild(p);
                } 
            }
            
        }
        
        document.querySelector('button').addEventListener('click', () => {
           
            judge();
            
        }); 
    
}
