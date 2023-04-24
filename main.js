const encrypt = (text) => {
  const encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encryptedText;
};

const decrypt = (text) => {
  const decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return decryptedText;
};

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Copied");
      })
      .catch((error) => {
        console.error("Error copying", error);
      });
  };
  

const handleEncrypt = () => {
  const originalText = document.getElementById("original-text").value;
  const encryptedText = encrypt(originalText);
  document.getElementById("result-text").value = encryptedText;
  document.getElementById("aside-empty").style.display = "none";
  document.getElementById("aside-result").style.display = "block";
};

const handleDecrypt = () => {
  const encryptedText = document.getElementById("original-text").value;
  const decryptedText = decrypt(encryptedText);
  document.getElementById("result-text").value = decryptedText;
  document.getElementById("aside-empty").style.display = "none";
  document.getElementById("aside-result").style.display = "block";
};

const handleCopy = () => {
  const resultText = document.getElementById("result-text").value;
  copyToClipboard(resultText);
};

document.getElementById("encrypt-btn").addEventListener("click", handleEncrypt);
document.getElementById("decrypt-btn").addEventListener("click", handleDecrypt);
document.getElementById("copy-btn").addEventListener("click", handleCopy);
