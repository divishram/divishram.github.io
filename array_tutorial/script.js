"use strict";
window.onload = createGlobalArray();
// variables
// array that will  be used for poppping and pushing, to hold
// the last operation's values
var globalArray;
// arrays to hold custom input
var myArrayOriginal;
var customArray = false;

// functions

// function to create the array and assign it to the varible when the page loads
function createGlobalArray() {
  globalArray = recreateArray().slice();
  return 0;
}

// to print array elements - section accessing array
function printArrEle() {
  var index = document.getElementById("arrIndex0").value;
  console.log(index);
  var sampleArray = recreateArray();
  document.getElementById("accArr").style.display = "block";
  document.getElementById("accArr").innerHTML = sampleArray[index];
}

// to pop the array elements - section popping
function popArrEle() {
  globalArray.pop();
  console.log("GA:" + globalArray);
  document.getElementById("popArr").style.display = "block";
  document.getElementById("popArr").innerHTML = globalArray;
}

// to shift the array elements - section shifting
function shiftArrEle() {
  globalArray.shift();
  console.log("GA:" + globalArray);
  document.getElementById("shiftOut").style.display = "block";
  document.getElementById("shiftOut").innerHTML = globalArray;
}

// to reset the array elements to default/original custom array
// when the user clicks on reset button
function resetArrEle(id) {
  console.log("OG:" + myArrayOriginal);
  globalArray = recreateArray().slice();
  document.getElementById(id).style.display = "block";
  document.getElementById(id).innerHTML = globalArray;
}

// function to recreate the array
function recreateArray() {
  if (customArray == true) {
    sampleArray = myArrayOriginal.slice();
    globalArray = myRestoreArray.slice();
  } else {
    var sampleArray = [
      "batman",
      "superman",
      "spiderman",
      "wonderwoman",
      "ironman",
      34,
      56,
      "hawkeye",
      1.21,
    ];
  }
  return sampleArray;
}

// function to show the array in the boxes just before the
// execution fields
function showOriginalArray() {
  var elements = document.getElementsByClassName("printOrigArr");
  // this is to prettify the output
  var delimiter = '"';
  if (customArray == true) {
    delimiter = "";
  }
  for (i = 0; i < elements.length; i++) {
    elements[i].innerHTML =
      "Existing array elements are:<span class='new-line'></span>" +
      "[" +
      delimiter +
      "" +
      recreateArray().join("" + delimiter + ", " + delimiter + "") +
      "" +
      delimiter +
      "]";
  }
}

// function to push the array elements
// used in section pushing
function pushArrEle() {
  var value = document.getElementById("pushVal").value;
  globalArray.push(value);
  document.getElementById("pushArr").style.display = "block";
  document.getElementById("pushArr").innerHTML = globalArray;
}

// function to push the array elements
// used in section unshifting
function unshiftArrEle() {
  var value = document.getElementById("unshiftVal").value;
  globalArray.unshift(value);
  document.getElementById("unshiftArr").style.display = "block";
  document.getElementById("unshiftArr").innerHTML = globalArray;
}

// function to delete array elements
// used in section delete
function deleteArrEle() {
  var value = document.getElementById("deleteVal").value;
  document.getElementById("deleteArrEleBefore").style.display = "block";
  document.getElementById("deleteArrEleBefore").innerHTML =
    "Before: array[" + value + "] = " + globalArray[value];
  delete globalArray[value];
  document.getElementById("deleteArr").style.display = "block";
  console.log(globalArray);
  document.getElementById("deleteArr").innerHTML = globalArray;
  document.getElementById("deleteArrEleAfter").style.display = "block";
  document.getElementById("deleteArrEleAfter").innerHTML =
    "After: array[" + value + "] = " + globalArray[value];
}

// sandbox field to run any JS commands
function sandBox() {
  var value = document.getElementById("sandVal").value;
  var F = eval(value);
  console.log(F);
  document.getElementById("sandBoxArr").style.display = "block";
  document.getElementById("sandBoxArr").innerHTML = globalArray;
}

// function to update array elements
function changeArrEle() {
  var index = document.getElementById("arrIndex1").value;
  var value = document.getElementById("arrValue1").value;
  var sampleArray = recreateArray();
  sampleArray[index] = value;
  document.getElementById("chngArr").style.display = "block";
  document.getElementById("chngArr").innerHTML = sampleArray;
  console.log(sampleArray);
}

// function to store the custom array that is received from user input
function inputCustomArray() {
  var value = document.getElementById("customArrayVal").value;
  console.log(value);
  // receiving something like var arrName = [1,2,3,..,4];
  // extracting things under the [] brackets first
  var arrInputValue = value.split("[")[1].split("]")[0];
  console.log(arrInputValue);
  // received all the things under the [] in a string form
  // spliting all the elements to recreate an array from string
  var arrElements = arrInputValue.split(",");
  console.log(arrElements);
  var tempArray = [];
  // trimming whitespaces from elements of string array
  // to recreate the array user intended to add
  for (var ele of arrElements) {
    console.log(ele);
    tempArray.push(ele.trim());
  }

  // stored as backup in case the user clicks on reset
  myArrayOriginal = tempArray.slice();
  myRestoreArray = tempArray.slice();
  customArray = true;
  console.log("Custom Array Done");
}

// a toggle function to switch between custom array and prebuilt array
function toggleDefaultArray() {
  if (customArray == false) {
    document.getElementById("chkbxID").checked = false;
  } else if (customArray == true) {
    // check whether the slider is checked or not
    if (document.getElementById("chkbxID").checked == true) {
      console.log("setting custom array to display");
      recreateArray();
      showOriginalArray();
    } else {
      // slider is moved to prebuilt array
      // replace all the current array with pre-built one
      customArray = false;
      document.getElementById("customArrayVal").value = "";
      console.log("setting prebuilt array to display");
      recreateArray();
      showOriginalArray();
      hideOutputBox();
    }
  }
}

// when the custom/prebuilt slider is toggled
// we need to remove all the previous run results
// so display: none will be set
function hideOutputBox() {
  var elements = document.getElementsByClassName("printResult");
  for (ele of elements) {
    ele.style.display = "none";
  }
}
