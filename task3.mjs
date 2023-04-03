export default function task3() {
  const fibonacci = (num) => {
    let fibNum = 0;
    let prevNum = 1;
    let temp;

    for (let i = 1; i <= num; i++) {
      console.log(fibNum);
      temp = fibNum + prevNum;
      fibNum = prevNum;
      prevNum = temp;
    }
  };

  fibonacci(5);
}
