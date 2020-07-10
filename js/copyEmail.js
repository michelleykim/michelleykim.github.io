function copyEmail() {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = "yeojin011016@gmail.com";
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Email copied!");
};