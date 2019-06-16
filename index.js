function getMultiplyTable() {
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