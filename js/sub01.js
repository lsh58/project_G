//서브페이지 첫 진입시 첫번째 콘텐츠의 높이값 가져와서 적용
var contentBox = document.getElementsByClassName('contentBox');
contentBox[0].style.height = document.getElementsByClassName('con_on')[0].offsetHeight + "px";

//서브메뉴 버튼
function changeContent(objs){
    event.preventDefault();
    // subConOnClass -> sub_con_on 클래스를 갖고있는 객체를 담은 변수
    var subConOnClass = document.getElementsByClassName('con_on');
    //subCons -> onclick으로 함수호출시 클릭한 객체의 정보를 담은 변수
    var subCons = document.getElementsByClassName(objs.id);
    //main_on 클래스를 갖고있는 객체를 담은 변수
    var subMainOn = document.getElementsByClassName('main_on'); 

    if(subConOnClass[0].classList[1] != objs.id){
        //remove
        subMainOn[0].classList.remove('main_on');
        subConOnClass[0].classList.remove('con_on');

        //add
        subCons[0].classList.add('con_on');
        subCons[0].children[0].classList.add('main_on');
    }else{
        console.log("sub_con_on 을 갖고있는 객체와 클릭한 객체가 동일");
    }
    //선택된 콘텐츠의 높이값 재적용
    contentBox[0].style.height = subCons[0].offsetHeight + "px";
}


//정보공개창구 - 콘텐츠메뉴 버튼
function infoClaimant(){
    event.preventDefault();
}