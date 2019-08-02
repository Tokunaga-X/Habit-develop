//Fetch variables
let checkBox1 = document.getElementById('checkBox1');
let checkBox2 = document.getElementById('checkBox2');
let checkBox3 = document.getElementById('checkBox3');
let submitBtn = document.getElementById('submitBtn');
let formBody = document.getElementById('formBody');
let nochill = document.getElementById('nochill');
let ceb = document.getElementById('ceb');



let data = JSON.parse(localStorage.getItem('datas'));

// new website/computer, new Array
if(data){
    let data = [
            {
                time : '2019/7/10',
                check1 : '√',
                check2 : '×',
            },
        ]
    localStorage.setItem('datas',JSON.stringify(data));
}

// Show data from localstorage on the page.
for(let i=0;i<data.length;i++){
    let checkNumber = 0;
    let tr = document.createElement('tr');
    // add th
    let th = document.createElement('th');
    let h3 = document.createElement('h3');    
    h3.innerHTML = data[i].time;
    th.appendChild(h3);
    tr.appendChild(th);
    // add td
    let td1 = document.createElement('td');
    let h41 = document.createElement('h4');
    h41.innerHTML = data[i].check1;
    if(data[i].check1 == '×'){
        checkNumber+=1;
    }
    td1.appendChild(h41);
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    let h42 = document.createElement('h4');
    h42.innerHTML = data[i].check2;
    if(data[i].check2 == '×'){
        checkNumber+=1;
    }
    td2.appendChild(h42);
    tr.appendChild(td2);
    
    let td3 = document.createElement('td');
    let h43 = document.createElement('h4');
    h43.innerHTML = data[i].check3;
    if(data[i].check3 == '×'){
        checkNumber+=1;
    }
    td3.appendChild(h43);
    tr.appendChild(td3);
    
    // check checkNumber to write the color
    if(checkNumber==0){
        tr.classList.add('table-success');
    }
    else if(checkNumber==2){
        tr.classList.add('table-warning');
    }
    else if(checkNumber==3){
        tr.classList.add('table-danger');
    }
    else {
        tr.classList.add('table-info');
    }
    formBody.appendChild(tr);
};

function showAlert(message,className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const list = document.querySelector('#listItems');
    container.insertBefore(div,list);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(),3000);
};

// Button pushed, add data to localstorage and re-show it

submitBtn.onclick = () => {
    let data = JSON.parse(localStorage.getItem('datas'));
    let newdata = {
        time: '',
        check1: '',
        check2: '',
        check3: ''
    }

    let date = new Date();
    // we need yesterday's date
    let newdate = new Date(date.getTime()-24*60*60*1000);
    // avoid over upload
    if(data[data.length-1].time==newdate.toLocaleDateString()){
        nochill.play();
        submitBtn.classList.add('wrong');
        showAlert('You have log your behaviors today!','danger')
        setTimeout(() => {
            submitBtn.classList.remove('wrong');
        },600)
        return;
    }
    
    let tr = document.createElement('tr');
    // add th node
    
    let th = document.createElement('th');
    let h3 = document.createElement('h3');
    newdata.time = newdate.toLocaleDateString();
    h3.innerHTML = newdate.toLocaleDateString();
    th.appendChild(h3);
    tr.appendChild(th)
    
    // add td node
    if(checkBox1.checked == true) {
        let td = document.createElement('td');
        let h4 = document.createElement('h4');
        newdata.check1 = '√';
        h4.innerHTML = "√";
        td.appendChild(h4);
        tr.appendChild(td);
        
    }else {
        let td = document.createElement('td');
        let h4 = document.createElement('h4');
        newdata.check1 = '×';
        h4.innerHTML = "×";
        td.appendChild(h4);
        tr.appendChild(td);
        
    }
    if(checkBox2.checked == true) {
        let td = document.createElement('td');
        let h4 = document.createElement('h4');
        newdata.check2 = '√';
        h4.innerHTML = "√";
        td.appendChild(h4);
        tr.appendChild(td);
    }else {
        let td = document.createElement('td');
        let h4 = document.createElement('h4');
        newdata.check2 = '×';
        h4.innerHTML = "×";
        td.appendChild(h4);
        tr.appendChild(td);
    }
    if(checkBox3.checked == true) {
        let td = document.createElement('td');
        let h4 = document.createElement('h4');
        newdata.check3 = '√';
        h4.innerHTML = "√";
        td.appendChild(h4);
        tr.appendChild(td);
    }else {
        let td = document.createElement('td');
        let h4 = document.createElement('h4');
        newdata.check3 = '×';
        h4.innerHTML = "×";
        td.appendChild(h4);
        tr.appendChild(td);
    }
    
    formBody.appendChild(tr);
    data.push(newdata);
    localStorage.setItem('datas',JSON.stringify(data));
    showAlert('Log successfully! Keep it up, pal.','success');
    ceb.play();
    setTimeout(() => {location.reload()},3000)
}
