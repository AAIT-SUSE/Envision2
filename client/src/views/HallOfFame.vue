<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <h2>名人堂 HALL OF FAME</h2>
          <el-collapse v-model="expansion" @change="handleChange">
            <el-collapse-item title="筛选策略" name="1">
              <el-form ref="form" label-width="100px">
                <el-form-item label="排序方式">
                  <el-radio-group v-model="orderPolicy">
                    <el-radio label="时间倒序"></el-radio>
                    <el-radio label="时间正序"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="按用户筛选">
                  <el-input v-model="filterText" placeholder="输入用户名" style="width: 250px"></el-input>
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
      <div class="hidden-md-and-down">
        <div class="view-side pos-fixed p-right-50">
          <div class="intro">
            <el-card shadow="hover">
              <p>Envision Hall-of-Fame 向所有用户展示在人工智能技术协会建立和发展期间对协会做出巨大贡献的个人。</p>
              <p>这些用户将被授予奖章，并无限期地展示于名人堂中。</p>
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
      </div>
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