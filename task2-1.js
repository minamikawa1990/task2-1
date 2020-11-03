// 'use strict';

{
    
    function judge() {

        var input_FizzNum = document.getElementById("FizzNum").value;//数値を取得
        var input_BuzzNum = document.getElementById("BuzzNum").value;//数値を取得
        

        // console.log(input_FizzNum);
        // if(Number.isInteger(input_FizzNum)){
            result = [];
            for(let i = 1; i < 100; i ++){
                
                if(i % input_FizzNum === 0 && i % input_BuzzNum === 0){
                    // console.log(input_FizzNum * i);
                    result.push("FizzBuzz" + i * input_FizzNum);
                    // document.write(result);
                    
                }
                else if(i % input_FizzNum === 0){
                    // console.log(input_FizzNum * i);
                    result.push("Fizz" + i * input_FizzNum);
                    // document.write(result);
                }
                else if(i % input_BuzzNum === 0){
                    // console.log(input_FizzNum * i);
                    result.push("Buzz\t" + i * input_BuzzNum);
                    // document.write(result);
                }
            }

            return result;
            document.write.dir(result);
            
            


        // }else{
        //     console.log("整数を入力してください")
        // }
    }

   

        // document.querySelector('.button').addEventListener('click', judge);
    // document.write(judge());
    document.querySelector('.button').addEventListener('click', () => {
        document.getElementById("output").textContent = judge();
    });       
    

   
 
}
