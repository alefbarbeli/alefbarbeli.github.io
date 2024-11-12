<template>
  <div class="portfolio">
    <!-- Started -->
    <div class="section started">
      <div class="centrize full-width">
        <div class="vertical-center">
          <div class="started-content">
            <div class="h-title glitch-effect" data-text="Portfolio">Portfolio</div>
            <div class="h-subtitle typing-bread">
              <p><NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="portfolio">Portfolio</NuxtLink></p>
            </div>
            <span class="typed-bread"></span>
          </div>
        </div>
      </div>
      <a class="mouse_btn" href="#"><span class="ion ion-mouse"></span></a>
    </div>

    <!-- Works -->
    <div class="section works">
      <div class="content">
        <div class="title">
          <div class="title_inner">Cases de Destaque</div>
        </div>
        <div class="filter-menu">
          <div class="filters">
            <div class="btn-group">
              <label data-text="Webstore"><input type="checkbox" value="f-webstore">Webstore</label>
              <label data-text="Code"><input type="checkbox" value="f-code">Code</label>
              <label data-text="Loja Integrada"><input type="checkbox" value="f-integrada">Loja Integrada</label>
              <label data-text="Mockups"><input type="checkbox" value="f-woo">WooCommerce</label>
            </div>
          </div>
        </div>
        <div class="box-items">

          <BoxItem />

          <div class="box-item f-code">
            <div class="image">
              <a class="has-popup" href="#popup-2">
                <img alt="" src="@/assets/images/works/work2.jpg"/>
                <span class="info">
								<span class="centrize full-width">
									<span class="vertical-center">
										<span class="ion ion-ios-plus-empty"></span>
									</span>
								</span>
							</span>
              </a>
            </div>
            <div class="desc">
              <div class="category">Code</div>
              <a class="name has-popup" href="#popup-2">CoreUi + Vue.js + Firebase</a>
            </div>
            <div id="popup-2" class="popup-box mfp-fade mfp-hide">
              <div class="content">
                <div class="image">
                  <img alt="" src="@/assets/images/works/work2.jpg">
                </div>
                <div class="desc">
                  <div class="category">Photography</div>
                  <h4>Coffee Cup In Hand</h4>
                  <p>
                    Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel
                    mutat vituperata
                    suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                  </p>
                  <a class="btn" data-text="View Project" href="#">View Project</a>
                </div>
              </div>
            </div>
          </div>

          <div class="box-item f-webstore">
            <div class="image">
              <a class="has-popup" href="#popup-3">
                <img alt="" src="@/assets/images/works/work8.jpg"/>
                <span class="info">
								<span class="centrize full-width">
									<span class="vertical-center">
										<span class="ion ion-ios-plus-empty"></span>
									</span>
								</span>
							</span>
              </a>
            </div>
            <div class="desc">
              <div class="category">Webstore</div>
              <a class="name has-popup" href="#popup-3">Bbauer - Layout Personalizado</a>
            </div>
            <div id="popup-3" class="popup-box mfp-fade mfp-hide">
              <div class="content">
                <div class="image">
                  <img alt="" src="@/assets/images/works/work8.jpg">
                </div>
                <div class="desc">
                  <div class="category">Illustration</div>
                  <h4>Love & Care Ceramic Bottles</h4>
                  <p>
                    Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel
                    mutat vituperata
                    suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                  </p>
                  <a class="btn" data-text="View Project" href="#">View Project</a>
                </div>
              </div>
            </div>
          </div>

          <div class="box-item f-integrada">
            <div class="image">
              <a class="has-popup" href="#popup-4">
                <img alt="" src="@/assets/images/works/work4.jpg"/>
                <span class="info">
								<span class="centrize full-width">
									<span class="vertical-center">
										<span class="ion ion-ios-plus-empty"></span>
									</span>
								</span>
							</span>
              </a>
            </div>
            <div class="desc">
              <div class="category">Loja Integrada</div>
              <a class="name has-popup" href="#popup-4">Fox Bravo Loja Virtual</a>
            </div>
            <div id="popup-4" class="popup-box mfp-fade mfp-hide">
              <div class="content">
                <div class="image">
                  <img alt="" src="@/assets/images/works/work4.jpg">
                </div>
                <div class="desc">
                  <div class="category">Photography</div>
                  <h4>Shopping gift bag</h4>
                  <p>
                    Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel
                    mutat vituperata
                    suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                  </p>
                  <a class="btn" data-text="View Project" href="#">View Project</a>
                </div>
              </div>
            </div>
          </div>

          <div class="box-item f-webstore">
            <div class="image">
              <a class="has-popup" href="#popup-5">
                <img alt="" src="@/assets/images/works/work5.jpg"/>
                <span class="info">
								<span class="centrize full-width">
									<span class="vertical-center">
										<span class="ion ion-ios-plus-empty"></span>
									</span>
								</span>
							</span>
              </a>
            </div>
            <div class="desc">
              <div class="category">Webstore</div>
              <a class="name has-popup" href="#popup-5">Big Hair - Loja Virtual</a>
            </div>
            <div id="popup-5" class="popup-box mfp-fade mfp-hide">
              <div class="content">
                <div class="image">
                  <img alt="" src="@/assets/images/works/work5.jpg">
                </div>
                <div class="desc">
                  <div class="category">Mockups</div>
                  <h4>Amore Mio Three Cups</h4>
                  <p>
                    Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel
                    mutat vituperata
                    suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                  </p>
                  <a class="btn" data-text="View Project" href="#">View Project</a>
                </div>
              </div>
            </div>
          </div>

          <div class="box-item f-webstore">
            <div class="image">
              <a class="has-popup" href="#popup-6">
                <img alt="" src="@/assets/images/works/work6.jpg"/>
                <span class="info">
								<span class="centrize full-width">
									<span class="vertical-center">
										<span class="ion ion-ios-plus-empty"></span>
									</span>
								</span>
							</span>
              </a>
            </div>
            <div class="desc">
              <div class="category">Webstore</div>
              <a class="name has-popup" href="#popup-6">Frizzon Loja Virtual</a>
            </div>
            <div id="popup-6" class="popup-box mfp-fade mfp-hide">
              <div class="content">
                <div class="image">
                  <img alt="" src="@/assets/images/works/work6.jpg">
                </div>
                <div class="desc">
                  <div class="category">Illustration</div>
                  <h4>Marta Veludo Beautiful Poster</h4>
                  <p>
                    Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel
                    mutat vituperata
                    suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                  </p>
                  <a class="btn" data-text="View Project" href="#">View Project</a>
                </div>
              </div>
            </div>
          </div>

          <div class="box-item f-woo">
            <div class="image">
              <a class="has-popup" href="#popup-7">
                <img alt="" src="@/assets/images/works/work7.jpg"/>
                <span class="info">
								<span class="centrize full-width">
									<span class="vertical-center">
										<span class="ion ion-ios-plus-empty"></span>
									</span>
								</span>
							</span>
              </a>
            </div>
            <div class="desc">
              <div class="category">WooCommerce</div>
              <a class="name has-popup" href="#popup-7">Lion Of Judah - Loja Virtual</a>
            </div>
            <div id="popup-7" class="popup-box mfp-fade mfp-hide">
              <div class="content">
                <div class="image">
                  <img alt="" src="@/assets/images/works/work7.jpg">
                </div>
                <div class="desc">
                  <div class="category">Mockups</div>
                  <h4>Minimal Poster Frame</h4>
                  <p>
                    Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel
                    mutat vituperata
                    suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                  </p>
                  <a class="btn" data-text="View Project" href="#">View Project</a>
                </div>
              </div>
            </div>
          </div>

          <div class="box-item f-code">
            <div class="image">
              <a class="has-popup" href="#popup-8">
                <img alt="" src="@/assets/images/works/work3.jpg"/>
                <span class="info">
								<span class="centrize full-width">
									<span class="vertical-center">
										<span class="ion ion-ios-plus-empty"></span>
									</span>
								</span>
							</span>
              </a>
            </div>
            <div class="desc">
              <div class="category">Code</div>
              <a class="name has-popup" href="#popup-8">Framework Webstore</a>
            </div>
            <div id="popup-8" class="popup-box mfp-fade mfp-hide">
              <div class="content">
                <div class="image">
                  <img alt="" src="@/assets/images/works/work3.jpg">
                </div>
                <div class="desc">
                  <div class="category">Graphics</div>
                  <h4>Cardboard Box</h4>
                  <p>
                    Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel
                    mutat vituperata
                    suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                  </p>
                  <a class="btn" data-text="View Project" href="#">View Project</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
