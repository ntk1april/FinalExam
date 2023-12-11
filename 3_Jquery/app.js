// ดึงค่าจาก input fields ในฟอร์ม
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const errorMessages = []; // เก็บ error

    // ตรวจสอบ error และเพิ่มเข้าใน errorMessages ถ้ามี
    if (username.trim() === '') {
      errorMessages.push('Username is empty!');
    }

    if (password.trim() === '') {
      errorMessages.push('Password is empty!');
    }

    if (password !== confirmPassword) {
      errorMessages.push('Password mismatch!');
    }

    if (email.trim() === '') {
      errorMessages.push('Email is empty!');
    }

    if (email !== confirmEmail) {
      errorMessages.push('Email mismatch!');
    }

    // เลือก div ที่ใช้แสดง error messages
    const errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = '';

    // แสดง error messages ถ้ามีข้อผิดพลาด
    if (errorMessages.length > 0) {
      errorMessages.forEach(message => {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error');
        errorMessage.textContent = message;
        errorDiv.appendChild(errorMessage);
      });
    } else {
      displayUserData(username, email, password); // ถ้าไม่มี error จะแสดงข้อมูลที่ Register
    }
  }

  // ฟังก์ชันสำหรับแสดงข้อมูลที่ Register ในตาราง
  function displayUserData(username, email, password) {
    const table = document.getElementById('userData');
    table.innerHTML = `
    <table>
      <tr>
        <td>Username:</td>
        <td>${username}</td>
      </tr>
        <tr>
        <td>Password:</td>
      <td>${password}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>${email}</td>
      </tr>
    </table>
    `;
  table.style.display = 'block'; // แสดงตาราง
  }