function selectCampus(campus) {
  document.getElementById('campusSelect').value = campus;
  alert('Selected campus: ' + campus);
}

// 用於處理文件上傳的函數
function handleUpload() {
  const fileInput = document.getElementById('fileUpload');
  const campusSelect = document.getElementById('campusSelect').value;
  const announcementTime = document.getElementById('announcementTime').value;
  const statusMessage = document.getElementById('statusMessage');
  const uploadedDataTable = document.getElementById('uploadedDataTable');

  if (fileInput.files.length === 0) {
    statusMessage.innerText = 'No file selected';
    statusMessage.classList.add('error-message');
    return;
  }

  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('file', file);
 
  fetch('http://localhost:5000/api/upload', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    statusMessage.innerText = 'Upload Successful';
    statusMessage.classList.add('success-message');
    // 更新已上傳的數據
    const newRow = uploadedDataTable.insertRow();
    newRow.insertCell(0).innerText = data.fileName;
    newRow.insertCell(1).innerText = data.uploader;
    newRow.insertCell(2).innerText = new Date(data.uploadDate).toLocaleString();
    newRow.insertCell(3).innerText = data.campus;
  })
  .catch(error => {
    statusMessage.innerText = 'Upload Failed';
    statusMessage.classList.add('error-message');
    console.error('Error:', error);
  });
}

// 用於獲取已上傳數據的函數
function fetchUploads() {
  const uploadedDataTable = document.getElementById('uploadedDataTable');

  fetch('http://localhost:5000/api/upload')
    .then(response => response.json())
    .then(data => {
      data.forEach(upload => {
        const newRow = uploadedDataTable.insertRow();
        newRow.insertCell(0).innerText = upload.fileName;
        newRow.insertCell(1).innerText = upload.uploader;
        newRow.insertCell(2).innerText = new Date(upload.uploadDate).toLocaleString();
        newRow.insertCell(3).innerText = upload.campus;
      });
    })
    .catch(error => console.error('Error:', error));
}

// 當頁面加載時，獲取已上傳數據
window.onload = fetchUploads;
