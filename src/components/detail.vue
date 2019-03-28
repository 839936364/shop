<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <el-carousel>
                  <el-carousel-item v-for="(item,index) in imgList" :key="index">
                    <img :src="item.original_path" alt>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="goods-spec">
                <h1>{{detailList.title}}</h1>
                <p class="subtitle">{{detailList.zhaiyao}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">
                      {{detailList.goods_no
                      }}
                    </dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{detailList.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥{{detailList.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <div class="el-input-number el-input-number--small">
                          <span role="button" class="el-input-number__decrease is-disabled">
                            <i class="el-icon-minus"></i>
                          </span>
                          <span role="button" class="el-input-number__increase">
                            <i class="el-icon-plus"></i>
                          </span>
                          <div class="el-input el-input--small">
                            <!---->
                            <input
                              autocomplete="off"
                              size="small"
                              type="text"
                              rows="2"
                              max="60"
                              min="1"
                              validateevent="true"
                              class="el-input__inner"
                              role="spinbutton"
                              aria-valuemax="60"
                              aria-valuemin="1"
                              aria-valuenow="1"
                              aria-disabled="false"
                            >
                            <!---->
                            <!---->
                            <!---->
                          </div>
                        </div>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{detailList.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <li>
                    <a href="javascript:;" @click="index=1" :class="{selected:index==1}">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" @click="index=2" :class="{selected:index==2}">商品评论</a>
                  </li>
                </ul>
              </div>
              <div
                class="tab-content entry"
                style="display: block;"
                v-show="index==1"
                v-html="detailList.content"
              >内容</div>
              <div class="tab-content" style="display: block;" v-show="index==2">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                          v-model.trim="comment"
                          @keyup.enter="postComment"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="postComment"
                        >
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="(it, index) in replylist" :key="index">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{it.user_name}}</span>
                          <span>{{it.add_time|FormatDate}}</span>
                        </div>
                        <p>{{it.content}}</p>
                      </div>
                    </li>
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <div id="pagination" class="digg">
                      <!-- <span class="disabled">« 上一页</span>
                      <span class="current">1</span>
                      <span class="disabled">下一页 »</span>-->
                      <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-sizes="[10, 20, 30, 40,50]"
                        :current-page="currentPage"
                        :page-size="PageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalCount"
                      ></el-pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list" v-for="(item, index) in hotgoodslist" :key="index">
                  <li>
                    <div class="img-box">
                      <router-link :to="'/detail/'+item.id">
                        <img :src="item.img_url">
                      </router-link>
                    </div>
                    <div class="txt-box">
                      <router-link :to="'/detail/'+item.id">{{item.title}}</router-link>
                      <span>{{item.add_time|FormatDate}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailList: [],
      hotgoodslist: [],
      index: 1,
      replylist: {},
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 0,
      // 个数选择器（可修改）
      pageIndex: 1,
      // 默认每页显示的条数（可修改）
      PageSize: 10,
      imgList: [],
      comment: ""
    };
  },
  created() {
    this.getDetail();
    this.getreplylist();
  },
  methods: {
    getDetail() {
      this.$http
        .get(
          `http://111.230.232.110:8899/site/goods/getgoodsinfo/${
            this.$route.params.id
          }`
        )
        .then(res => {
          this.detailList = res.data.message.goodsinfo;
          this.hotgoodslist = res.data.message.hotgoodslist;
          this.imgList = res.data.message.imglist;
        });
    },
    // 获取评论的
    getreplylist() {
      this.$http
        .get(
          "http://111.230.232.110:8899/site/comment/getbypage/goods/" +
            `${this.$route.params.id}` +
            "?pageIndex=" +
            this.pageIndex +
            "&" +
            "pageSize=" +
            this.PageSize
        )
        .then(res => {
          this.replylist = res.data.message;
          this.totalCount = res.data.totalcount;
        });
    },

    // 评论的相关代码
    postComment() {
      if (this.comment == "") {
        return;
      } else {
        this.$http
          .post(
            `http://111.230.232.110:8899/site/validate/comment/post/goods/${
              this.$route.params.id
            }`,
            {
              commenttxt: this.comment
            }
          )
          .then(res => {
            if (res) {
              this.getreplylist();
            }
          });
        this.comment = "";
      }
    },
    handleSizeChange(size) {
      this.PageSize = size;
      this.getreplylist();
    },
    // 显示第几页
    handleCurrentChange(val) {
      this.pageIndex = val;
      // 切换页码时，要获取每页显示的条数
      this.getreplylist();
    }
  },
  watch: {
    $route() {
      this.getDetail();
      this.getreplylist();
    }
  }
};
</script>

<style>
.pic-box {
  width: 395px;
  height: 320px;
}
.pic-box .el-carousel {
  width: 100%;
  height: 100%;
}
.pic-box .el-carousel__container {
  width: 100%;
  height: 100%;
}
.pic-box .el-carousel__container img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
