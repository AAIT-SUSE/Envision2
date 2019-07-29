<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <h2>礼品店 GIFT SHOP</h2>
          <el-collapse v-model="expansion" @change="handleChange">
            <el-collapse-item title="筛选策略" name="1">
              <el-form ref="form" label-width="100px">
                <el-form-item label="排序方式">
                  <el-radio-group v-model="orderPolicy">
                    <el-radio label="时间倒序"></el-radio>
                    <el-radio label="时间正序"></el-radio>
                    <el-radio label="价格正序"></el-radio>
                    <el-radio label="价格倒序"></el-radio>
                    <el-radio label="实体礼品"></el-radio>
                    <el-radio label="虚拟礼品"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="按名称筛选">
                  <el-input v-model="filterText" placeholder="输入礼品关键词" style="width: 250px"></el-input>
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>

          <!-- main content goes here -->
          <div class="view-card-container">
            <el-row :gutter="20">
              <el-col :lg="8" :md="24" v-for="i in 4" :key="i">
                <gift-card style="margin: 10px 0;"></gift-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <!-- Right Panel -->
      <el-col :span="5" class="hidden-md-and-down">
        <div class="view-side pos-fixed p-right-50">
          <div class="intro">
            <el-card shadow="hover">
              <p>Envision Gift Shop 允许使用EC积分兑换虚拟或实体的礼品。这些礼品使用社团经费购置，并用于奖励和表彰社团优秀个人。</p>
              <p>获取积分的途径多种多样，尝试获取EC积分并兑换你想要的礼品。</p>
            </el-card>
          </div>

          <el-row type="flex" justify="space-between" class="control">
            <el-col>
              <el-tooltip placement="bottom" content="购物车">
                <el-button icon="envision-gouwuchefill" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="购物记录">
                <el-button icon="envision-quan" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="清空购物车">
                <el-button icon="envision-icon_trashcan" circle></el-button>
              </el-tooltip>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import GiftCard from "../components/CardGift";
  export default {
    components: {GiftCard},
    data: () => ({
      expansion: '',
      orderPolicy: '',
      filterText: '',
      tableData: [
        {
          name: '东芝32G U盘',
          quantity: '1',
          price: '800'
        }
      ]
    })
  }
</script>