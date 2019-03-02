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
  document.querySelector("#recent-button").addEventListener("click", () => {
    loadByRecent(3);
  });

  document.querySelector("#popular-button").addEventListener("click", () => {
    loadByPopular(3);
  });

  document.querySelector("#trends-button").addEventListener("click", () => {
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
  ajax_biz.open("POST", "php/biz_db_recent.php", true);
  ajax_biz.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  ajax_biz.send(`nb_posts=${nb_posts}`);
  ajax_biz.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(this.responseText);
      var offset = nb_posts;
      var main_div_recent = document.querySelector("#recent");
      main_div_recent.innerHTML = "";
      console.log(result);
      for (var i = 0; i < result.length && i < offset; i++) {
        var biz_name = result[i].biz_name;
        var biz_level = result[i].biz_level;
        var biz_id = result[i].biz_id;
        var menu_main = result[i].menu_name;
        var arry_menu_parents = result[i].menu_parents.split(" > ");
        var arry_topest_parent = arry_menu_parents[0];
        main_div_recent.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 business-post">
					<div class="thumb-box">
						<div class="thumb-img">
							<a href="php/mamalee_level_${biz_level}.php?biz_id=${biz_id}" id="${biz_name}">
								<img src=${result[i]["file_path"].replace(
                  "/var/www/html/",
                  "public/"
                )} width="100%" alt="" />
							</a>
						</div>
						<div class="thumb-content">
							<h5 class="thumb-category">
								<span class="main" class="menu_zero_span">${arry_topest_parent}</span>
								<span class="sub" class="menu_sub_cat">${menu_main}</span>
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

      var recent_button = document.querySelector("#recent_button");
      recent_button.innerHTML = `<button class="btn btn-more" data-toggle="collapse" data-target="#moreThumb">See More</button>`;
      loadMore("recent");
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
  ajax_pop.open("POST", "php/biz_db_popular.php", true);
  ajax_pop.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  ajax_pop.send(`nb_posts=${nb_posts}`);

  ajax_pop.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(this.responseText);
      var offset = nb_posts;
      var main_div_recent = document.querySelector("#recent");
      main_div_recent.innerHTML = "";

      for (var i = 0; i < result.length && i < offset; i++) {
        var biz_name = result[i].biz_name;
        var biz_level = result[i].biz_level;
        var biz_id = result[i].biz_id;

        main_div_recent.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 business-post">
					<div class="thumb-box">
						<div class="thumb-img">
							<a href="php/mamalee_level_${biz_level}.php?biz_id=${biz_id}" id="${biz_name}">
								<img src=${result[i]["file_path"].replace(
                  "/var/www/html/",
                  "public/"
                )} width="100%" alt="" />
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

      var recent_button = document.querySelector("#recent_button");
      recent_button.innerHTML = `<button class="btn btn-more" data-toggle="collapse" data-target="#moreThumb">See More</button>`;
      loadMore("popular");
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
  ajax_trend = new XMLHttpRequest();
  ajax_trend.open("POST", "php/trends_db.php", true);
  ajax_trend.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  ajax_trend.send(`nb_posts=${nb_trends}`);

  ajax_trend.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(this.responseText);
      var offset = nb_trends;
      var main_div_recent = document.querySelector("#recent");
      main_div_recent.innerHTML = "";

      for (var i = 0; i < result.length && i < offset; i++) {
        var headline = result[i].trend_headline;
        var article = result[i].trend_article;
        var id = result[i].trend_id;
        var filepath = result[i].file_path.replace("../public", "public");

        main_div_recent.innerHTML += `
				<div class="col-xs-12 col-sm-6 col-md-4 trend-post">
					<div class="thumb-box">
						<div class="thumb-img">
							<a href="php/datatrend.php?trend_id=${id}">
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

      var recent_button = document.querySelector("#recent_button");
      recent_button.innerHTML = `<button class="btn btn-more" data-toggle="collapse" data-target="#moreThumb">See More</button>`;
      loadMore("trends");
    }
  };
}

/**
 * ----------------------------------------------------------------------------------
 * public
 * loadMore: load 3 more posts
 * ----------------------------------------------------------------------------------
 */

function loadMore(currentState) {
  document.querySelector(".btn-more").addEventListener("click", () => {
    let nb_business_post = document.querySelectorAll(".business-post").length;
    let nb_trend_post = document.querySelectorAll(".trend-post").length;
    switch (currentState) {
      case "recent": {
        loadByRecent(nb_business_post + 3);
        break;
      }
      case "popular": {
        loadByPopular(nb_business_post + 3);
        break;
      }
      case "trends": {
        loadTrends(nb_trend_post + 3);
        break;
      }
    }
  });
}

/**
 * ----------------------------------------------------------------------------------
 * public
 * clickCounter: updates the view count by click
 * ----------------------------------------------------------------------------------
 */

// function clickCounter() {
//   ajax_view = new XMLHttpRequest();
//   ajax_view.open("POST", "./php/click_counter.php", true);
//   ajax_view.setRequestHeader(
//     "Content-Type",
//     "application/x-www-form-urlencoded"
//   );
//   ajax_view.send();
//   ajax_view.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var result = JSON.parse(this.responseText);
//       var biz_click = document.querySelector("#" + biz_id);
//       biz_click.onclick = function() {
//         viewCounter();
//       };
//       for (var i = 0; i < result.length && i < offset; i++) {
//         var biz_view_cnt = result[i].biz_view_cnt;
//         function viewCounter() {
//           biz_view_cnt += 1;
//         }
//       }
//     }
//   };
// }
// clickCounter();

// var biz_click = document.querySelector("#" + biz_id);
// biz_click.onclick = function() {clickCounter()};
// function clickCounter(){}
