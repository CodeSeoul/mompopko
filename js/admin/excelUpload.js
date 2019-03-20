let excelConversion = (() => {
	/**
   * ---------------------------------------------------------------------------
   * uploadExcel : upload an opening business excel file
   * 1. add an change event to the input
   * 2. convert excel table into html table and json
   * ---------------------------------------------------------------------------
   */

	function uploadExcel() {
		var rABS = false;

		function handleFile(e) {
			var files = e.target.files;

			var f = files[0];
			var reader = new FileReader();

			reader.onload = function(e) {
				var data = e.target.result;
				if (!rABS) data = new Uint8Array(data);
				var workbook = XLSX.read(data, {
					type: rABS ? 'binary' : 'array'
				});
				const wsname = workbook.SheetNames[0];
				const ws = workbook.Sheets[wsname];

				/* Convert array of arrays  to JSON */
				const final = XLSX.utils.sheet_to_json(ws, {
					header: 1,
					// raw: false keeps dates and phone numbers as strings
					raw: false
				});

				const table = XLSX.utils.sheet_to_html(ws, {
					header: '',
					footer: ''
				});

				let objData = {};
				let i = 0;
				final.forEach(business => {
					objData[i] = {
						biz_name: business[12],
						biz_open_date: business[2],
						biz_address: business[14],
						biz_tel: business[6],
						biz_zipcode: business[7],
						biz_menuName: business[15],
						biz_province: 'seoul',
						biz_city: 'seoul',
						biz_district: business[17],
						biz_neighborhood: business[19],
						biz_imageList: business[20]
					};
					i++;
				});

				alert('file is ready to upload');

				sendJson(JSON.stringify(objData));

				// const htmlTable = document.createElement('div')
				// htmlTable.innerHTML = table
				// document.body.appendChild(htmlTable)
			};
			if (rABS) reader.readAsBinaryString(f);
			else reader.readAsArrayBuffer(f);
		}
		document.querySelector('#excel').addEventListener('change', handleFile, false);
	}

	function sendJson(json) {
		document.querySelector('form').addEventListener('submit', e => {
			e.preventDefault();
			let xhr = new XMLHttpRequest();
			xhr.open('POST', '../../php/excelUpload.php');
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onreadystatechange = function() {
				if (xhr.readyState != 4) return;

				if (xhr.status == 200) {
					console.log(xhr.response);
				}
			};
			xhr.send(json);
		});
	}

	return {
		uploadExcel
	};
})();
