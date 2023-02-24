function handleToggle(e) {
    let pass = document.getElementById("password");
  
    let toggleBtn = document.getElementById("toggle");
  
    let currentType = pass.getAttribute("type");
  
    if (currentType === "password") {
      pass.setAttribute("type", "text");
      toggleBtn.setAttribute("class", "fa-solid fa-eye-slash");
  
    } else {
      pass.setAttribute("type", "password");
      toggleBtn.setAttribute("class", "fa-sharp fa-solid fa-eye toggle");
    }
  }