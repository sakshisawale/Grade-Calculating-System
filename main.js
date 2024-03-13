function calculate() {
    var b1 = document.getElementById('subone').value;
    var b2 = document.getElementById('subtwo').value;
    var b3 = document.getElementById('subthree').value;
    var b4 = document.getElementById('subfour').value;
    var b5 = document.getElementById('subfive').value;
    var letters = /^[A-Za-z@#$%\^&\(\)]+$/;

    if (b1 == "" || b2 == "" || b3 == "" || b4 == "" || b5 == "") {
        alert("Please enter marks");
    }
    else if ((b1 == letters) || (b2 == letters) || (b3 == letters) || (b4 == letters) || (b5 == letters)) {
        alert("Please enter marks");
    }
    else {
        var a = parseInt(document.getElementById('subone').value);
        var b = parseInt(document.getElementById('subtwo').value);
        var c = parseInt(document.getElementById('subthree').value);
        var d = parseInt(document.getElementById('subfour').value);
        var e = parseInt(document.getElementById('subfive').value);
        var my_name = (new String(" ")).concat(document.getElementById('myname').value);

        if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
            alert("Please enter correct value");
        }
       else if (a < 0 || b < 0 || c < 0 || d < 0 || e < 0) {
            alert("Please enter correct value");
        }
        else {
            var obtain = a + b + c + d + e;
            document.getElementById("obtain").innerHTML = obtain;
            var per = obtain / 500 * 100;
            document.getElementById("per").innerHTML = per;

            if (a > 30 && b > 30 && c > 30 && d > 30 && e > 30) {
                document.getElementById("remarks").innerHTML = "<span style='color:#292'>Hey! " + my_name + "  you are Pass.</span>";
            }
            /*if (per>=35) {
                document.getElementById("remarks").innerHTML = "<span style='color:#292'>Hey! " + my_name + " you are Pass.</span>";
                //span is a inline container used to markup part of text or document
                 i.e. it easily styled by css and manipulated with js using class or id attribute.
            }*/
            else {
                document.getElementById("remarks").innerHTML = "<span style='color:red'>Sorry! " + my_name + " but you are Fail.</span>";// " + my_name + " 
            }
            if (per >= 80) {
                document.getElementById("grade").textContent = "A";
                //textcontent sets single text node containing specified string.
            }
            else if (per >= 70) {
                document.getElementById("grade").textContent = "B";
            }
            else if (per >= 60) {
                document.getElementById("grade").textContent = "C";
            }
            else if (per >= 50) {
                document.getElementById("grade").textContent = "D";
            }
            else if (per >= 40) {
                document.getElementById("grade").textContent = "E";
            }
            else {
                document.getElementById("grade").textContent = "F";
            }
        }
    }
    return false;
}
var subjectCount = 5; // Initialize subject count

function Add() {
    var subjectContainer = document.getElementById('subject-container');
    var newInput = document.createElement('div');
    newInput.classList.add('form-group');
    newInput.innerHTML = `
        <label>Subject ${subjectCount}:</label>
        <input class="form-control subject-input" type="number" placeholder="Enter marks" required>`;
    subjectContainer.appendChild(newInput);
    subjectCount++; // Increment subject count
}

function ResetPage() {
    window.location.reload();
}

