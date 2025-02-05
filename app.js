// masala 1
function firstLast6(numss){
    let nums =  numss.split('')
    if(nums[0] == 6 || nums[nums.length - 1] == 6) {
      return  true
    } else {
      return false
    }
}
document.getElementById('btn1').addEventListener('click', () => {
  document.getElementById('result1').innerHTML = firstLast6(document.getElementById('input1').value)
})



// masala 2
function sameFirstLast(numss){
    let nums = numss.split('')
    if(nums.length >= 1 && nums[nums.length - 1] == nums[0]){
      return true
    } else {
      return false
    }
}

document.getElementById('btn2').addEventListener('click', () => {
  document.getElementById('result2').innerHTML = sameFirstLast(document.getElementById('input2').value)
})

// masala 3
function makePi(){
    return [3, 1, 4]
}
document.getElementById('btn3').addEventListener('click', () => {
  document.getElementById('result3').innerHTML = makePi(document.getElementById('input3').value)
})

// masala 4
function commonEnd(a1, b1){
    let a = a1.split('')
    let b = b1.split('')
    if(a.length >= 1 && b.length >= 1 && (a[0] == b[0] || a[a.length - 1] == b[b.length - 1])) {
      return true
    } else {
      return false
    }
}
document.getElementById('btn4').addEventListener('click', () => {
  document.getElementById('result4').innerHTML = commonEnd(document.getElementById('input4a').value, document.getElementById('input4b').value)
})

// masala 5
function sum3(numss){
    let nums = numss.split('')
    let result = 0;
    nums.forEach((num) => {
      if(num != ',') {
        result += (+num)
      }
    })
    console.log(nums)
    return result
}
document.getElementById('btn5').addEventListener('click', () => {
  document.getElementById('result5').innerHTML = sum3(document.getElementById('input5').value)
})

// masala 6
function rotateLeft3(numss){
    let nums = numss.split(',')
    nums.push(nums.shift())
    return nums
}
document.getElementById('btn6').addEventListener('click', () => {
  document.getElementById('result6').innerHTML = rotateLeft3(document.getElementById('input6').value)
})

// masala 7
function reverse3(numss){
    let nums = numss.split(',')
    nums.reverse()
    return nums
}
document.getElementById('btn7').addEventListener('click', () => {
  document.getElementById('result7').innerHTML = reverse3(document.getElementById('input7').value)
})

// masala 8
function maxEnd3(numss){
    let nums = numss.split('')
    let larger = nums[0] > nums[nums.length - 1] ? nums[0] : nums[nums.length - 1]
    return [larger, larger, larger]
}
document.getElementById('btn8').addEventListener('click', () => {
  document.getElementById('result8').innerHTML = maxEnd3(document.getElementById('input8').value)
})


// masala 9
function sum2(numss){
  let nums = numss.split(',')
  if(nums.length >= 2) {
     return +nums[0] + +nums[1]
  } else if (nums.length == 0){
    return 0
  } else {
    return +nums[0]
  }
}
document.getElementById('btn9').addEventListener('click', () => {
  document.getElementById('result9').innerHTML = sum2(document.getElementById('input9').value)
})

// masala 10
function middleWay(a1, b1){
  let a = a1.split('')
  let b = b1.split('')
  return [a[Math.floor(a.length / 2)] ,  b[Math.floor(b.length / 2)]]
}
document.getElementById('btn10').addEventListener('click', () => {
  document.getElementById('result10').innerHTML = middleWay(document.getElementById('input10a').value, document.getElementById('input10b').value)
})

// masala 11
function makeEnds(numss){
  let nums = numss.split('');
  return [ nums[0], nums[nums.length - 1] ]
}
document.getElementById('btn11').addEventListener('click', () => {
  document.getElementById('result11').innerHTML = makeEnds(document.getElementById('input11').value)
})

// masala 12
function has23(numss){
  let nums = numss.split(',')
  if(nums.includes('2') || nums.includes('3')) {
    return true
  } else return false
}
document.getElementById('btn12').addEventListener('click', () => {
  document.getElementById('result12').innerHTML = has23(document.getElementById('input12').value)
})

// masala 13
function no23(numss){
  let nums = numss.split('')
  if(!nums.includes(2)) {
    if(nums.includes(3)) {
      return false
    }
    return true
  } else return false
}
document.getElementById('btn13').addEventListener('click', () => {
  document.getElementById('result13').innerHTML = no23(document.getElementById('input13').value)
})

// masala 14
function makeLast(numss){
  let nums = numss.split(',');
  let lastEl = nums[nums.length - 1];
  let newArr = nums.concat(nums);
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = 0;
  }
  newArr[newArr.length - 1] = lastEl;
  return newArr
}
document.getElementById('btn14').addEventListener('click', () => {
  document.getElementById('result14').innerHTML = makeLast(document.getElementById('input14').value)
})


// masala 15
function double23(numss){
  let nums = numss.split('')
  let num = [0, 0];
  for (let i = 0; i <= nums.length; i++) {
    if(nums[i] == 2) {
      num[0]++
    } else if (nums[i] == 3) {
      num[1]++
    }
  }
  if(num.includes(2)) {
    return true
  } else {
    return false
  }
}
document.getElementById('btn15').addEventListener('click', () => {
  document.getElementById('result15').innerHTML = double23(document.getElementById('input15').value)
})


// masala 16
function fix23(numss){
  let nums = numss.split(',')
  let num;
  for(let i = 0; i <= nums.length; i++) {
    if(nums[i] == '2' && nums[i + 1] == '3') {
      num = nums
    }
  }
  if(num) {
    num[num.indexOf('3')] = 0
    return num
  } else {
    return nums
  }
}
document.getElementById('btn16').addEventListener('click', () => {
  document.getElementById('result16').innerHTML = fix23(document.getElementById('input16').value)
})

// masala 17
function start1(a1, b1){
  let a = a1.split('')
  let b = b1.split('')
  if(a[0] == 1 && b[0] == 1) {
    return 2
  } else if(a[0] == 1 || b[0] == 1) {
    return 1
  } else {
    return 0
  }
}
document.getElementById('btn17').addEventListener('click', () => {
  document.getElementById('result17').innerHTML = start1(document.getElementById('input17a').value, document.getElementById('input17b').value)
})

// masala 18
function biggerTwo(a1, b1){
  let a = a1.split(',')
  let b = b1.split(',')
  if(a[0] + a[1] > b[0] + b[1]) {
    return a
  } else if (a[0] + a[1] == b[0] + b[1]) {
    return a
  } else {
    return b
  }
}
document.getElementById('btn18').addEventListener('click', () => {
  document.getElementById('result18').innerHTML = biggerTwo(document.getElementById('input18a').value, document.getElementById('input18b').value)
})
