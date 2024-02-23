console.log('Test');

function openModal(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

