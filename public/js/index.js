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
	document.querySelector('button.btn-more').addEventListener('click', () => {
		let nb_business_post = document.querySelectorAll('.business-post').length;
		let nb_trend_post = document.querySelectorAll('.trend-post').length;

		switch (document.querySelector('li.active').textContent) {
			case '[RECENT]':
				loadPosts(nb_business_post + 3, 'recent');
				break;
			case '[POPULAR]':
				loadPosts(nb_business_post + 3, 'popular');
				break;
			case '[TRENDS]':
				loadPosts(nb_trend_post + 3, 'trend');
				break;
			default:
				break;
		}
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

function loadPosts(nb_posts, state) {
	var ajax = new XMLHttpRequest();
	ajax.open('GET', `index.php?action=${state}&nb_posts=${nb_posts}`, true);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(null);
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
}

function renderPosts(posts) {
	var main_div_recent = document.querySelector('#recent');
	main_div_recent.innerHTML = '';

	for (post of posts) {
		main_div_recent.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 business-post">
				<div class="thumb-box">
					<div class="thumb-img">
						<a href="php/mamalee_level_${post['biz_level']}.php?biz_id=${post['biz_id']}">
							<img src=${post['file_path'].replace('/var/www/html/', 'public/')} width="100%" alt="" />
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
									<span>${post['biz_name']}</span>
									<div style="color: #999;">(level${post['biz_level']})</div>
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
}
