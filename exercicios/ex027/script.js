document.getElementById("cv-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Pegar dados do formulário
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const summary = document.getElementById("summary").value;
  
    // Preencher o template
    document.getElementById("cv-name").textContent = name;
    document.getElementById("cv-title").textContent = title;
    document.getElementById("cv-summary").textContent = summary;
  
    // Mostrar o template (invisível por padrão)
    const template = document.getElementById("cv-template");
    template.style.display = "block";
  
    // Gerar o PDF
    html2pdf().from(template).save(`${name}_cv.pdf`);
  
    // Esconder de novo (opcional)
    setTimeout(() => {
      template.style.display = "none";
    }, 2000);
  });
  