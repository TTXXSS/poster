function getMultiplyTable() {  //输出99乘法表
    var str = "";
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            if (i == j) {
                str += (j + " * " + i + " = " + (i * j) + "\n");
                break;
            } else {
                str += (j + " * " + i + " = " + (i * j) + "  ");
            }

        }

    }
    console.log(str);
}

function outputOddAndEven() {  //输出0-20之间的奇数和偶数
    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 1) {
            console.log(i + "是奇数。");
        } else {
            console.log(i + "是偶数。");
        }
    }
}