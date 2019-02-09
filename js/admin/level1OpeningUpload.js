let excelConversion = (() => {
  /**
   * ---------------------------------------------------------------------------
   * uploadExcel : upload an opening business excel file
   * 1. add an change event to the input
   * 2. convert excel table into html table and json
   * ---------------------------------------------------------------------------
   */

  function uploadExcel() {
    var rABS = false

    function handleFile(e) {
      var files = e.target.files

      var f = files[0]
      var reader = new FileReader()

      reader.onload = function (e) {
        var data = e.target.result
        if (!rABS) data = new Uint8Array(data)
        var workbook = XLSX.read(data, {
          type: rABS ? 'binary' : 'array'
        })
        const wsname = workbook.SheetNames[0]
        const ws = workbook.Sheets[wsname]

        /* Convert array of arrays  to JSON */
        const final = XLSX.utils.sheet_to_json(ws, {
          header: 1,
          // raw: false keeps dates and phone numbers as strings
          raw: false
        })

        const table = XLSX.utils.sheet_to_html(ws, {
          header: '',
          footer: ''
        })
        const htmlTable = document.createElement('div')
        htmlTable.innerHTML = table
        document.body.appendChild(htmlTable)
      }
      if (rABS) reader.readAsBinaryString(f)
      else reader.readAsArrayBuffer(f)
    }
    document
      .querySelector('#excel')
      .addEventListener('change', handleFile, false)
  }
  return {
    uploadExcel
  }
})()