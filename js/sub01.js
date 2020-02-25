//서브페이지 첫 진입시 첫번째 콘텐츠의 높이값 가져와서 적용
var contentBox = document.querySelector('.contentBox');
contentBox.style.height = document.querySelector('.con_on').offsetHeight + "px";

var con01 = document.getElementById('con_01');
var con02 = document.getElementById('con_02');
var con03 = document.getElementById('con_03');

con01.addEventListener('click', event=>changeContent(event.target));
con02.addEventListener('click', event=>changeContent(event.target));
con03.addEventListener('click', event=>changeContent(event.target));

//서브메뉴 버튼
function changeContent(obj){
    event.preventDefault();
    // subConOnClass -> sub_con_on 클래스를 갖고있는 객체를 담은 변수
    var subConOnClass = document.querySelector('.con_on');
    //subCons -> onclick으로 함수호출시 클릭한 객체의 정보를 담은 변수
    var subCons = document.querySelector('.' + obj.id);
    //main_on 클래스를 갖고있는 객체를 담은 변수
    var subMainOn = document.querySelector('.main_on'); 

    if(subConOnClass.classList[1] != obj.id){
        //remove
        subMainOn.classList.remove('main_on');
        subConOnClass.classList.remove('con_on');

        //add
        subCons.classList.add('con_on');
        subCons.children[0].classList.add('main_on');
    }else{
        console.log("sub_con_on 을 갖고있는 객체와 클릭한 객체가 동일");
    }
    //선택된 콘텐츠의 높이값 재적용
    contentBox.style.height = subCons.offsetHeight + "px";
}




//정보공개창구 - 콘텐츠메뉴 버튼
function infoClaimant(){
    event.preventDefault();
    console.log(this.document.getElementsByClassName('text')[2].style.background = "red");
}