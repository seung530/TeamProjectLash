// 회원가입
const joinInputs = document.querySelectorAll(".join-input");
const joinButtons = document.querySelector(".join-button");

// for(let i = 0; i < joinInputs.length; i++) {
//     joinInputs[i].onkeyup = () => {
//         if(window.event.keyCode == 13){
//             if(i != 3) {
//                 joinInputs[i + 1].focus();
//             }else {
//                 joinButtons.click();
//             }
//         }
//     }
// }

joinButtons.onclick =() => {
    

    let joinInfo = {
        username: joinInputs[0].value,
        password: joinInputs[1].value,
        name: joinInputs[2].value,
        firstPhone: joinInputs[3].value,
        lastPhone: joinInputs[4].value,
        email: joinInputs[5].value
    }

    $.ajax({
        async: false,
        type:"post",
        url:"/api/account/join",
        contentType:"application/json",
        data: JSON.stringify(joinInfo),
        dataType: "json",
        success: (response) => {
            console.log(response)
            location.replace("/account/login");
            alert("회원가입이 완료 되었습니다.");
        },
        error: (error) => {
            console.log("에러 : " + error);
            validationError(error.responseJSON.data)
            validationCheck();
        }
    });
}

/* 상세 약관 */

const terms1 = document.getElementById("terms1");
const terms2 = document.getElementById("terms2");
const terms3 = document.getElementById("terms3");

const joinTerms = document.querySelectorAll(".join-terms-content");


terms1.addEventListener('click', () => {
    joinTerms[0].classList.toggle('invisible');
});

terms2.addEventListener('click', () => {
    joinTerms[1].classList.toggle('invisible');
});

terms3.addEventListener('click', () => {
    joinTerms[2].classList.toggle('invisible');
});




/* checkbox 모두 동의하기 -> 모두 체크 되도록 */

const checkBox1 = document.querySelector(".agree_service_check0");
const checkBox2 = document.querySelector(".agree_service_check1");
const checkBox3 = document.querySelector(".agree_service_check2");
const checkBox4 = document.querySelector(".agree_service_check3");

const checkAll = document.querySelector(".agree-service-all");


checkAll.addEventListener('click', (e) => {
    const checked = e.target.checked;

    if (checked) {
        checkBox1.checked = true;
        checkBox2.checked = true;
        checkBox3.checked = true;
        checkBox4.checked = true;
    }else {
        checkBox1.checked = false;
        checkBox2.checked = false;
        checkBox3.checked = false;
        checkBox4.checked = false;
    }

}); 

function validationError(error) {
    const accountErrors = document.querySelector(".account-errors");
    const accountErrorList = accountErrors.querySelector("ul");

    const errorValues = Object.values(error);
    console.log("에러무엇? : ", errorValues);

    accountErrorList.innerHTML = "";

    errorValues.forEach((value) => {
        accountErrorList.innerHTML += `
            <li>${value}</li>
        `;
    });

    accountErrors.classList.remove("errors-invisible");
}





function validationCheck () {

    let checkId = document.getElementById("check-id");
    let checkPw = document.getElementById("check-pw");
    let recheckPw = document.getElementById("re-check-pw");
    let checkName = document.getElementById("check-name");
    let checkMiddleNum = document.getElementById("check-middle-num");
    let checkMiddleLast = document.getElementById("check-last-num");
    let checkEmail = document.getElementById("check-email");
    let checkAgree1 = document.getElementById("check-agree1");
    let checkAgree2 = document.getElementById("check-agree2");

    if(checkId.value == "") {
        alert("아이디를 입력하세요");
        checkId.focus();
        return false;
    }

}