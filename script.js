let player = document.getElementById("player");
let enemy = document.getElementById("enemy");
var a = 0;
var m = 0;
var speed = 0.1;
let moveup = document.getElementById("up")
let movedown = document.getElementById("down")
let moveright = document.getElementById("right")
let moveleft = document.getElementById("left")
var postionx;
var attack;
var points = document.getElementById("points")
var score = 0;
var char = "🐍"
let set = document.getElementById("set1")
set.addEventListener("click", () => {
  let check = document.getElementById("speed").value
  if (check == "slow") {
    this.speed = 0.1;
    console.log("speed is" + speed)
  }
  if (check == "medium") {
    this.speed = 1;
    console.log("speed is" + speed)
  }
  if (check == "hard") {
    this.speed = 2;
    console.log("speed is" + speed)
  }
})

let enemy1 = () => {
  let names = ["left", "right", "top", "bottom", "left", "right", "top", "bottom", "left", "right", "top", "bottom", "left", "right", "top", "bottom", "left", "right", "top", "bottom"];
  let random = parseInt(Math.random() * 15);
  let hold = names[random];
  console.log(hold)
  switch (hold) {
    case "top":
      postionx = parseInt(Math.random() * -3);
      attack = postionx
      enemy.style.top = postionx + "%"
      console.log(attack)
      enemy.innerText = attack + "❤️"
      break;
    case "right":
      postionx = parseInt(Math.random() * -90);
      attack = postionx
      console.log(postionx)
      enemy.style.right = postionx + "%"
      enemy.innerText = attack + "❤️"
      break;
    case "left":
      postionx = parseInt(Math.random() * -8);
      attack = postionx
      console.log(postionx)
      enemy.style.left = postionx + "%"
      enemy.innerText = attack + "❤️"
      break;
    case "bottom":
      postionx = parseInt(Math.random() * 95);
      attack = postionx
      console.log(postionx)
      enemy.style.top = postionx + "%"
      enemy.innerText = attack + "❤️"
      break;
  }
}

enemy1()

moveup.addEventListener("pointerenter", () => {
  console.log("up")
  player.innerText = this.char
  up = setInterval(() => {
    let locate = parseInt(player.style.top = a + "%");
    console.log(locate)
    a = a - speed;
    player.innerText = locate + this.char
    record.innerText = locate + "vs" + attack
    if (locate == attack) {
      console.log("attack done")
      enemy1()
      score = score + 1;
      points.innerText = score
      this.char += "🐍"
      player.innerText = locate + this.char
      this.speed = this.speed + 0.50;
    }
    else if (locate <= -130) {
      alert("You are out")
      clearInterval(up)
    }
  }, 10)
})

moveup.addEventListener("pointerout", () => {
  clearInterval(up)
  console.log("exit up")
})

moveright.addEventListener("pointerenter", () => {
  console.log("right")
  player.innerText = this.char
  right = setInterval(() => {
    let locate = parseInt(player.style.right = m + "%");
    record.innerText = locate + "vs" + attack
    player.innerText = locate + this.char
    console.log(locate)
    m = m - speed;
    if (locate == attack) {
      console.log("attack done")
      enemy1()
      score = score + 1;
      points.innerText = score
      this.char += "🐍"
      player.innerText = locate + this.char
      this.speed = this.speed + 0.50;
    }
    else if (locate <= -150) {
      alert("You are out")
      clearInterval(right)
    }
  }, 10)
})

moveright.addEventListener("pointerout", () => {
  clearInterval(right)
  console.log("exit right")
})



moveleft.addEventListener("pointerenter", () => {
  console.log("left")
  player.innerText = this.char
  left = setInterval(() => {
    let locate = parseInt(player.style.right = m + "%");
    m = m + speed;
    record.innerText = locate + "vs" + attack
    player.innerText = locate + this.char
    if (locate == attack) {
      console.log("attack done")
      enemy1()
      this.speed = this.speed + 0.50;
      this.char += "🐍"
      player.innerText = locate + this.char
      score = score + 1;
      points.innerText = score
    }
    else if (locate <= -200) {
      alert("You are out")
      clearInterval(left)
    }
  }, 10)
})

moveleft.addEventListener("pointerout", () => {
  clearInterval(left)
  console.log("exit left")
})

movedown.addEventListener("pointerenter", () => {
  console.log("down")
  player.innerText = this.char
  down = setInterval(() => {
    let locate = parseInt(player.style.top = a + "%");
    a = a + speed;
    console.log(locate, attack)
    record.innerText = locate + "vs" + attack
    player.innerText = locate + this.char
    if (locate == attack) {
      console.log("attack done")
      enemy1()
      this.speed = this.speed + 0.50;
      this.char += "🐍"
      player.innerText = locate + this.char
      score = score + 1;
      points.innerText = score
    }
    else if (locate >= 150) {
      alert("You are out")
      clearInterval(down)
    }
  }, 10)
})

movedown.addEventListener("pointerout", () => {
  clearInterval(down)
  console.log("exit down")
})

