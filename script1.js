var arr = []

window.onload = function(){
  var form = document.querySelector('form');
  form.addEventListener('submit',handleSubmit)
  
  var filter = document.querySelector("#filter")
  filter.addEventListener('change', handleFilter)
  var filter1 = document.querySelector("#filter1")
  filter1.addEventListener('change', handleFilter1)
}


function handleSubmit(){
  event.preventDefault();
  var elems = event.target.querySelectorAll(".input");
  var data = getFormData(elems)
  
  arr.push(data)
  //console.log(arr)
  renderDOM(arr)
}

function getFormData(elems){
  var formData = {}
  var len = elems.length
    for( var i=0; i<len; i++ ){
      var key = elems[i].name
      formData[ key ] = elems[i].value
      if(elems[i].tagName==="INPUT"){
        elems[i].value=""
      }
    } 
  return formData
}


function renderDOM(arr){
  var div = document.querySelector('#res')
  div.innerHTML = ""
  
  var cont = document.createElement('div')
  var firstrow=createRow({name:"Name",grade:"Grade",section:"Section",exam:"ExamType",
sub1:"SUBJECT1",sub2:"SUBJECT2",sub3:"SUBJECT3",sub4:"SUBJECT4",sub5:"SUBJECT5",sub6:"SUBJECT6"
})
  cont.append(firstrow)
  var len = arr.length
  for( var i=0; i<len; i++ ){
    var row = createRow( arr[i] )
    
    cont.append(row)
  }
  
  div.append(cont)
    
}


function createRow(data){
   var name = data.name
   var grade = data.grade
   var section = data.section
   var exam=data.exam
   var sub1=data.sub1
   var sub2=data.sub2
   var sub3=data.sub3
   var sub4=data.sub4
   var sub5=data.sub5
   var sub6=data.sub6
  
   var div = document.createElement('div')
   div.setAttribute('class','row-item')
  
   var stuname = document.createElement('p')
   stuname.textContent = name
  
  var grad = document.createElement('p')
   grad.textContent = grade
  
  var sctin = document.createElement('p')
   sctin.textContent = section

   var examtp = document.createElement('p')
   examtp.textContent = exam

   var subj1 = document.createElement('p')
   subj1.textContent = sub1

   var subj2 = document.createElement('p')
   subj2.textContent = sub2

   var subj3 = document.createElement('p')
   subj3.textContent = sub3

   var subj4 = document.createElement('p')
   subj4.textContent = sub4

   var subj5 = document.createElement('p')
   subj5.textContent = sub5

   var subj6 = document.createElement('p')
   subj6.textContent = sub6
  
  

  div.append( stuname,grad,sctin,examtp,subj1,subj2,subj3,subj4,subj5,subj6)
  
  return div
}

function handleFilter(){
  var section = event.target.value
  
  console.log(section)
  var newArr = arr.filter( function(item){
    return item.section===section
  } )
  
  renderDOM(newArr)
}
function handleFilter1(){
    var exam = event.target.value
    
    console.log(exam)
    var newArr = arr.filter( function(item){
      return item.exam===exam
    } )
    
    renderDOM(newArr)
  }