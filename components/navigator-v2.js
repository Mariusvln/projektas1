var condition = false

function toggleDropDownMenu(){
    const wrapperElement = document.getElementsByClassName("wrapper");
    if (condition == false){
        condition = true;
        document.getElementById('wrapper').style.height = "667px";
        document.getElementById('m-menu').style.left = "32px";
      }
     else if (condition == true){
        document.getElementById('wrapper').style.height = "50px";
        document.getElementById('m-menu').style.left = "0";
        condition = false;
    }
}