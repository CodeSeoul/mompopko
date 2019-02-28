/**
 * @param
 * @return
 * @date
 * @author
 */

/**
 * ----------------------------------------------------------------------------------
 * add event listener
 * - recent button
 * - popular button
 * - trends button
 * ----------------------------------------------------------------------------------
 */

(function() {
	document.querySelector('#recent-button').addEventListener('click', () => {
		loadByRecent(3);
	});

	document.querySelector('#popular-button').addEventListener('click', () => {
		loadByPopular(3);
	});

	document.querySelector('#trends-button').addEventListener('click', () => {
		loadTrends(3);
	});
})();

/**
 * ----------------------------------------------------------------------------------
 * public
 * loadByRecent : load posts ordered by upload date(recent first)
 * @param : (int) number of posts to load
 *  - nb_posts : number of posts to load
 * ----------------------------------------------------------------------------------
 */

function loadByRecent(nb_posts) {
	var ajax_biz = new XMLHttpRequest();
	ajax_biz.open('POST', 'php/biz_db_recent.php', true);
	ajax_biz.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax_biz.send(`nb_posts=${nb_posts}`);
	ajax_biz.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var result = JSON.parse(this.responseText);
			var offset = nb_posts;
			var main_div_recent = document.querySelector('#recent');
			main_div_recent.innerHTML = '';

			for (var i = 0; i < result.length && i < offset; i++) {
				var biz_name = result[i].biz_name;
				var biz_level = result[i].biz_level;
				var biz_id = result[i].biz_id;

				main_div_recent.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 business-post">
					<div class="thumb-box">
						<div class="thumb-img">
							<a href="php/mamalee_level_${biz_level}.php?biz_id=${biz_id}">
								<img src=${result[i]['file_path'].replace('/var/www/html/', 'public/')} width="100%" alt="" />
							</a>
						</div>
						<div class="thumb-content">
							<h5 class="thumb-category">
								<span class="main" class="menu_zero_span"></span>
								<span class="sub" class="menu_sub_cat">Korean</span>
							</h5>
							<span class="img_two"><span/>
								<div class="row">
									<div class="col-xs-7 thumb-name">
										<span>${biz_name}</span>
										<div style="color: #999;">(level${biz_level})</div>
									</div>
									<div class="col-xs-5 thumb-product">
											<span class="img_two"><span/>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>`;
			}

			var recent_button = document.querySelector('#recent_button');
			recent_button.innerHTML = `<button class="btn btn-more" data-toggle="collapse" data-target="#moreThumb">See More</button>`;
			loadMore('recent');
		}
	};
}

/**
 * ----------------------------------------------------------------------------------
 * public
 * loadByPopular : load posts ordered by view counts(most view counts first)
 * @param : (int) number of posts to load
 *  - nb_posts : number of posts to load
 * ----------------------------------------------------------------------------------
 */

function loadByPopular(nb_posts) {
	ajax_pop = new XMLHttpRequest();
	ajax_pop.open('POST', 'php/biz_db_popular.php', true);
	ajax_pop.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax_pop.send(`nb_posts=${nb_posts}`);

	ajax_pop.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var result = JSON.parse(this.responseText);
			var offset = nb_posts;
			var main_div_recent = document.querySelector('#recent');
			main_div_recent.innerHTML = '';

			for (var i = 0; i < result.length && i < offset; i++) {
				var biz_name = result[i].biz_name;
				var biz_level = result[i].biz_level;
				var biz_id = result[i].biz_id;

				main_div_recent.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 business-post">
					<div class="thumb-box">
						<div class="thumb-img">
							<a href="php/mamalee_level_${biz_level}.php?biz_id=${biz_id}">
								<img src=${result[i]['file_path'].replace('/var/www/html/', 'public/')} width="100%" alt="" />
							</a>
						</div>
						<div class="thumb-content">
							<h5 class="thumb-category">
								<span class="main" class="menu_zero_span"></span>
								<span class="sub" class="menu_sub_cat">Korean</span>
							</h5>
							<span class="img_two"><span/>
								<div class="row">
									<div class="col-xs-7 thumb-name">
										<span>${biz_name}</span>
										<div style="color: #999;">(level${biz_level})</div>
									</div>
									<div class="col-xs-5 thumb-product">
											<span class="img_two"><span/>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>`;
			}

			var recent_button = document.querySelector('#recent_button');
			recent_button.innerHTML = `<button class="btn btn-more" data-toggle="collapse" data-target="#moreThumb">See More</button>`;
			loadMore('popular');
		}
	};
}

/**
 * ----------------------------------------------------------------------------------
 * public
 * loadTrends : load trends
 * @param : (int) number of trendss to load
 *  - nb_trends : number of trends to load
 * ----------------------------------------------------------------------------------
 */

function loadTrends(nb_trends) {
	alert('trends');
}

/**
 * ----------------------------------------------------------------------------------
 * public
 * loadMore: load 3 more posts
 * ----------------------------------------------------------------------------------
 */

function loadMore(currentState) {
	document.querySelector('.btn-more').addEventListener('click', () => {
		let nb_current_post = document.querySelectorAll('.business-post').length;
		switch (currentState) {
			case 'recent': {
				loadByRecent(nb_current_post + 3);
				break;
			}
			case 'popular': {
				loadByPopular(nb_current_post + 3);
				break;
			}
			case 'trends': {
				loadTrends();
				break;
			}
		}
	});
}
