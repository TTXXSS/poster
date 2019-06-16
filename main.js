function reverseString(message) {  //返回逆序的字符串
    var str = "";
    for (let i = message.length - 1; i >= 0; i--)
        str += message.charAt(i);
    return str;
}
console.log(reverseString('hello'));

function palindrome(message) {  //判断一个字符串是否是回文
    var str = "";
    for (let i = message.length - 1; i >= 0; i--)
        str += message.charAt(i);
    if (str == message)
        return true;
    else
        return false;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true

function alphabetSort(message) {
    var arr = [];
    var str = ""
    arr = message.split("");
    arr.sort();
    for (let i = 0; i < arr.length; i++)
        str += arr[i];
    console.log(str);
}

alphabetSort('hello'); // should return 'ehllo'

function countWords(message) {
    var arr = [];
    arr = message.split(" ");
    var sum = arr.length;
    var count = sum;
    var temp = [];
    for (let i = 0; i < sum; i++) {
        if (arr[i].indexOf(",") != -1) {
            temp = arr[i].split(",");
            if (!temp.includes(""))
                count++;
        } else if (arr[i].indexOf(".") != -1) {
            temp = arr[i].split(".");
            if (!temp.includes(""))
                count++;
        }
    }
    return count;

}
console.log(countWords('Good morning, I love JavaScript.')); // should return 5

