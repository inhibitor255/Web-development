let ball = document.querySelector("#ball");
let left = 0;
let direction = "right";

setInterval(() => {
  if (direction === "right") {
    left += 1;
    if (left > 790) direction = "left";
  } else {
    left -= 1;
    if (left < 1) direction = "right";
  }
  ball.style.left = `${left}px`;
}, 10);

add1000 = () => {
  let result = 0;
  for (let i = 0; i <= 1000; i++) {
    result += i;
  }
  return result;
};

add1000later = () => {
  return new Promise((done) => {
    done(add1000());
  });
};
console.log("some processes");
add1000later().then((result) => console.log(result));
console.log("more processes");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject("Error");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((reject) => {
    console.log(reject);
  });

// Promise ဘယ်လိုဆောက်လဲဆိုရင် promise constructor အရင်ဆောက်ပြီးလျင်
// ထိုconstructor၏ parameter အတွင်းတွင် parameter နှစ်ခုပါရှိသော callback function ရေးကာ
// ထိုfunction၏ code block အတွင်းတွင် asynchronous opreation ရေးပြီး
// callback၏ parameter နှစ်ခုဖြင့် ပြန်ဖမ်းခြင်းဖြစ်သည်၊၊
