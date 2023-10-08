const solution = (order) => {
  let a = 0;

  const cheap = ["iceamericano", "americanoice", "hotamericano", "americanohot", "americano", "anything"];
  const expensive = ["icecafelatte", "cafelatteice", "hotcafelatte", "cafelattehot", "cafelatte"];

  order.map((item)=>{
    if(cheap.includes(item)){
      a+=4500;
    } else {
      a+=5000;
    }
  })

  return a;
}