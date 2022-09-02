// console.log('Hello!');

let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

//array untuk menampung data absen
let absensiData = [];

absensi_form.addEventListener('submit', (event) => {
  //get value from input
  let inputName = event.target.fullname.value;
  event.preventDefault();

  //validasi data kosong
  if (inputName == '') {
    alert('Masukkan Nama Lengkap');
    return;
  }

  //push data ke dalam array absensiData
  absensiData.push({
    id: Date.now(),
    fullname: inputName,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  });

  //reset input value
  event.target.fullname.value = '';

  //panggil fungsi create card
  renderToHTML();
  // console.info(absensiData);
});

//function untuk create html
function renderToHTML() {
  //reset element root
  root.innerHTML = '';

  //perulangan foreach dari array note_storage_data
  absensiData.forEach((element, index) => {
    // console.info(element);

    root.innerHTML += `
    <div class="card" draggable ="true" ondragend="handleDelete(${index})">
       ${index + 1}. &nbsp; ${element.fullname}
        <span>
          ${element.time} 
          ${element.date}
        </span>
    </div>
    `;
  });
}

// function delete objek
function handleDelete(index) {
  // console.info(index);

  //confirm
  let conDelete = confirm('yakin delete ?');

  if (!conDelete) {
    return;
  } else {
    //delete data array sesuai index
    absensiData.splice(index, 1);
  }

  renderToHTML();
}
