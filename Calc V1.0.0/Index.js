// tombol dari segala tombol
const btn = document.getElementById("hitung");

btn.addEventListener("click", function () {
  logika();
});

// logika
function logika() {
  const op = document.getElementById("operator").value;
  if (op == "+") {
    plus();
  } else if (op == "-") {
    minus();
  } else if (op == "*") {
    kali();
  } else if (op == "/") {
    bagi();
  } else {
    error();
  }
}

// logika penjumlahan
function plus() {
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const jumlah = angka1 + angka2;
  const terus = (document.getElementById("hasil").value = jumlah);
}

// logika pengurangan
function minus() {
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const minus = angka1 - angka2;
  const lalu = (document.getElementById("hasil").value = minus);
}

// logika perkalian
function kali() {
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const kali = angka1 * angka2;
  const lantas = (document.getElementById("hasil").value = kali);
}

// logika pembagian
function bagi() {
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const bagi = angka1 / angka2;
  const selanjutnya = (document.getElementById("hasil").value = bagi);
}

// logika error confirmation
function error() {
  const errText = (document.getElementById("hasil").value =
    "error anjing! yg bener ae lu!");
}
