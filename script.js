// classes : Main topic
// methods
// properties

// const nums = [1,2,3]
// nums.push()


// this
class Car {
  constructor(name, color, topSpeed) {
    // properties
    this.name = name
    this.color = color
    this.topSpeed = topSpeed
    this.currentSpeed = 0
  }

  // getters & setters
  getCurrentSpeed() {
    return currentSpeed
  }

  zeroToSixty() {
    setTimeout(() => {
      console.log('that was fast!!!')
      this.currentSpeed = 60;
      console.log(this.currentSpeed)
    }, 3000)
  }


  drive() {
    this.currentSpeed += 10
    console.log(`driving at ${this.currentSpeed} miles per hour`)
  }

  brake() {
    console.log('braking')
    this.currentSpeed -= 10
  }

  stop() {
    console.log('coming to a screeching halt!')
    this.currentSpeed = 0
  }

}


const ferrari = new Car('ferrari', 'red', 250)
// console.log(ferrari.name)
// console.log(ferrari.color)
// console.log(ferrari.topSpeed)

ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.brake()
console.log(ferrari.currentSpeed)
// ferrari.zeroToSixty()
ferrari.stop()
console.log(ferrari.currentSpeed)


const porsche = new Car('porsche', 'yellow', 230)
console.log(porsche.name)
console.log(porsche.color)
console.log(porsche.topSpeed)
const nums = [1, 2, 3, 4, 5]
nums.forEach(_ => porsche.drive())

porsche.zeroToSixty()
porsche.stop()
console.log(porsche.currentSpeed)


// porsche.brake()
// console.log(porsche.currentSpeed)

// console.log(porsche)