export default function task5() {
  const timeSince = (date1, date2) => {
    date1 = new Date(date1);
    date2 = new Date(date2);

    const days = Math.floor((date2.getTime() - date1.getTime()) / 86400000);
    const weeks = Math.floor((date2.getTime() - date1.getTime()) / 604800000);
    const seconds = Math.floor((date2.getTime() - date1.getTime()) / 1000);

    return `${days}/${weeks}/${seconds}`;
  };

  console.log(timeSince("01.07.2001", "01.07.2004"));
}
