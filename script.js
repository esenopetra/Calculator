function buttonClick(val){
    document.getElementById("screen").value+=val
}
function answer()
{
    var input=document.getElementById("screen").value
    var ans= eval(input)
    document.getElementById("screen").value=ans

}
function clean(){
    document.getElementById("screen").value=""
}