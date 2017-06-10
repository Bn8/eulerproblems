function sumTo(n) {
    n = Math.floor(n)
    return n * (1 + n) / 2;
}

function solve(n) {
    n = n-1
    var sum3, sum5, sum15;
    sum3 = 3*sumTo(n/3);
    sum5 = 5*sumTo(n/5);
    sum15 = 15*sumTo(n/15);
    return sum3+sum5-sum15;
}

function showSolution1() {
    var textObj = document.getElementById('text_sol1');
    textObj.value = solve(document.getElementById('text_prob1_n').value);
}