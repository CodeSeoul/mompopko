(function loadOtherTrends(nb_trends) {
	nb_trends = 3;
	ajax_trend = new XMLHttpRequest();
	ajax_trend.open('POST', 'trends_db.php', true);
	ajax_trend.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax_trend.send(`nb_posts=${nb_trends}`);

	ajax_trend.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var result = JSON.parse(this.responseText);
			var offset = nb_trends;
			var main_div_recent = document.querySelector('#related_post .container .row');
			main_div_recent.innerHTML = '';

			for (var i = 0; i < result.length && i < offset; i++) {
				var headline = result[i].trend_headline;
				var id = result[i].trend_id;
				console.log(result[i].file_path);
				var filepath = result[i].file_path;
				console.log(filepath);

				main_div_recent.innerHTML += `
				<div class="col-xs-12 col-sm-6 col-md-4 trend-post">
					<div class="thumb-box">
						<div class="thumb-img">
							<a href="../php/datatrend.php?trend_id=${id}">
								<img src=${filepath} width="100%" alt="" />
							</a>
						</div>
						<div class="thumb-content-2">
							<a href="trends_1.html">
								<div class="row">
									<div class="col-xs-12 thumb-name">
										<span>${headline}</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>`;
			}
		}
	};
})();
