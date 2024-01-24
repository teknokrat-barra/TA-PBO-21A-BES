// tombol function ke kewirausahaahn.html
document.getElementById("btn_daftar").onclick = function (){
    location.href = "kewirausahaan.html";
}

// tombol function ke mengunjungi website resmi sekolah 
// SMK Negeri 1 Bandar Lampung

// Get the button element
const button = document.getElementById("web_sekolah");

// Set the URL of the website you want to visit
const url = "https://smkn1bdl.sch.id/";

// Add an event listener to the button
button.addEventListener("click", () => {
  // Redirect the user to the URL when the button is clicked
  window.location.href = url;
});
