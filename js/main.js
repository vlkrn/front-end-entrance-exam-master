document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('download-pdf').addEventListener('click', () => {
    const element = document.getElementById('container');

    const options = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(options).save();
  });

  function saveContentToLocalStorage() {
    const contentData = {};
    const editableElements = document.querySelectorAll(
      '[contenteditable="true"]'
    );

    editableElements.forEach((element) => {
      const dataValue = element.getAttribute('data-value');
      const textContent = element.textContent.trim();
      if (dataValue) {
        contentData[dataValue] = textContent;
      }
    });

    localStorage.setItem('resumeEditableContent', JSON.stringify(contentData));
  }

  function loadContentFromLocalStorage() {
    const contentData = localStorage.getItem('resumeEditableContent');
    if (!contentData) return;

    const parsedData = JSON.parse(contentData);
    Object.keys(parsedData).forEach((dataValue) => {
      const element = document.querySelector(`[data-value="${dataValue}"]`);
      if (element) {
        element.textContent = parsedData[dataValue];
      }
    });
  }

  document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
    element.addEventListener('input', saveContentToLocalStorage);
  });

  loadContentFromLocalStorage();
});
