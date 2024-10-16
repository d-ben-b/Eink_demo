/** @format */

// 用於處理選擇校區的函數
function selectCampus(campus) {
  const campusSelectMessage = document.getElementById("campusSelectMessage");
  document.getElementById("campusSelect").value = campus;

  // 更新顯示選中的校區名稱
  campusSelectMessage.innerText = "Selected campus: " + campus;
  campusSelectMessage.classList.add("selected-message");
}

// 用於處理文件上傳的函數
function handleUpload() {
  const fileInput = document.getElementById("fileUpload");
  const campusSelect = document.getElementById("campusSelect").value;
  const announcementTime = document.getElementById("announcementTime").value;
  const statusMessage = document.getElementById("statusMessage");
  const uploadedDataTable = document.getElementById("uploadedDataTable");

  // 檢查是否有選擇文件
  if (fileInput.files.length === 0) {
    statusMessage.innerText = "No file selected";
    statusMessage.classList.add("error-message");
    return;
  }

  const file = fileInput.files[0];

  // 檢查文件大小是否小於5MB
  if (file.size > 5 * 1024 * 1024) {
    statusMessage.innerText = "File size exceeds 5MB";
    statusMessage.classList.add("error-message");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("campus", campusSelect);
  formData.append("announcementTime", announcementTime);

  // 將數據發送到後端
  fetch("https://eink-demo.onrender.com/api/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      statusMessage.innerText = "Upload Successful";
      statusMessage.classList.remove("error-message");
      statusMessage.classList.add("success-message");

      // 更新已上傳的數據顯示
      const newRow = uploadedDataTable.insertRow();
      newRow.insertCell(0).innerText = data.fileName; // 顯示正確的文件名，包括中文
      newRow.insertCell(1).innerText = data.uploader;
      newRow.insertCell(2).innerText = new Date(
        data.uploadDate
      ).toLocaleString();
      newRow.insertCell(3).innerText = data.campus;
    })
    .catch((error) => {
      statusMessage.innerText = "Upload Failed";
      statusMessage.classList.add("error-message");
      console.error("Error:", error);
    });
}

// 用於獲取已上傳數據的函數
function fetchUploads() {
  const uploadedDataTable = document.getElementById("uploadedDataTable");

  // 向後端請求已上傳的數據
  fetch("https://eink-demo.onrender.com/api/uploads")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((upload) => {
        const newRow = uploadedDataTable.insertRow();
        newRow.insertCell(0).innerText = upload.fileName; // 顯示正確的文件名
        newRow.insertCell(1).innerText = upload.uploader;
        newRow.insertCell(2).innerText = new Date(
          upload.uploadDate
        ).toLocaleString();
        newRow.insertCell(3).innerText = upload.campus;
      });
    })
    .catch((error) => console.error("Error:", error));
}

// 當頁面加載時，獲取已上傳數據
window.onload = fetchUploads;
