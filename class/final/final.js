

function changePhone1(){
    const phone1 = document.getElementById("phone1").value

    if (phone1.length === 3){
        document.getElementById("phone2").focus()
    }
}

function changePhone2(){
    const phone2 = document.getElementById("phone2").value

    if (phone2.length === 4){
        document.getElementById("phone3").focus()
    }
}

function changePhone3(){
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value

    if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4){
        document.getElementById("mybutton").setAttribute("style", "background-color: yellow")
        document.getElementById("mybutton").disabled = false;
    }
}


function getToken(){
    let isStarted = false;

    if (isStarted === false){
        isStarted === true;
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("btn").innerText = token

        let time = 10
    
        setInterval(function(){
            if (time >= 0){
                const min = String(Math.floor(time/60)).padStart(2, "0")
                const sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            }
            else{
                btn = document.getElementById('timer_btn')
                btn.disabled = true;
            }
        }, 1000
    )
    } else {
        alert('너 이미 실행했어')
    }
}


function getTimer(){
    alert("인증이 완료되었습니다.")
}


function getResult(){
    const emaill = document.getElementById("email").value
    const name = document.getElementById("name").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value

    if (emaill ===""){
        alert("이메일을 입력하세요.")
    }
    else if (name ===""){
        alert("이름을 입력하세요.")
    }
    else if (password1 ===""){
        alert("비밀번호를 입력하세요.")
    }
    else if (password2 ===""){
        alert("확인 비밀번호를 입력하세요.")
    }
    else if (password1 != password2){
        alert("비밀번호가 다릅니다.")
    }

    else{
        alert("회원가입이 완료되었습니다.")
    }
}