function StringToInt(str)
{
var str_len=str.length;
var arr_str = str.split(""); // split string to array of character
var arr_res = [];
var res = 0;
     
/////// For loop for separate number from string to array of int arr_res[]
for(let i = 0; i <str_len ; i++)
{
     if(arr_str[i] === '0')
     {
      arr_res.push(0);
     } 
     else if(arr_str[i] === '1')
     {
      arr_res.push(1);
     }
     else if(arr_str[i] === '2')
     {
      arr_res.push(2);
     }
     else if(arr_str[i] === '3')
     {
      arr_res.push(3);
     }
     else if(arr_str[i] === '4')
     {
      arr_res.push(4);
     }
     else if(arr_str[i] === '5')
     {
      arr_res.push(5);
     }
     else if(arr_str[i] === '6')
     {
      arr_res.push(6);
     }
     else if(arr_str[i] === '7')
     {
      arr_res.push(7);
     }
     else if(arr_str[i] === '8')
     {
      arr_res.push(8);
     }
     else if(arr_str[i] === '9')
     {
      arr_res.push(9);
     }
}
//console.log(arr_res);

/////// For loop for arrage array of int to be int by calcuation
var res_len = arr_res.length;
for(let i = 0 ; i<res_len;i++)
{
  let int_digit = Math.pow(10,res_len-i-1);
  //console.log(int_digit);
  res = res+(arr_res[i]*int_digit);
}

 return res;
}

var str = "abc5t7u3y5iiiii8855";
console.log(StringToInt(str));
