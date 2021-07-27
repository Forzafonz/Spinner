
const spinner = function (){
  let animations = ['\r|','\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\' , '\r\|']
  animations.forEach((element, index) => {
    setTimeout(() => process.stdout.write(element + "     "), 100 + 200*index);
  });
}
spinner()