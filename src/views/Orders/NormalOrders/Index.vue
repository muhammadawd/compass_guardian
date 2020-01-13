<!-- =========================================================================================
    File Name: KnowledgeBase.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 sm:w-1/1 mb-base ">
        <vx-card class="text-center">
          <vs-list>
            <vs-list-header :title="$ml.get('orders')" color="primary"></vs-list-header>
            <vs-list-item v-for="item in orders" :key="item.id" :id="`row_${item.id}`"
                          :title="item.user.name + ' … ' + item.user.phone" :subtitle="item.created_at">
              <!--              <vs-button :color="getOrderStatusColor(item.status.name)"  @click="$router.push({'name':'login'})">{{$ml.get('show')}}</vs-button>-->
              <vs-chip :color="getOrderStatusColor(item.status.name)" class="product-order-status">{{
                item.status.translated.title}}
              </vs-chip>
              <vs-chip class="product-order-status">
                {{item.created_at}}
              </vs-chip>

              <template slot="avatar">
                <vs-avatar :color="getOrderStatusColor(item.status.name)"
                           :text="item.order_cost.toFixed(2).toString()"/>
              </template>
            </vs-list-item>
          </vs-list>
        </vx-card>
        <!--        <vs-list>-->
        <!--          <vs-list-header icon="supervisor_account" title="Group 1"></vs-list-header>-->
        <!--          <vs-list-item icon="check" title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>-->
        <!--          <vs-list-item icon="check" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>-->
        <!--          <vs-list-header icon="how_to_reg" title="Group 2" color="success"></vs-list-header>-->
        <!--          <vs-list-item icon="verified_user" title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>-->
        <!--          <vs-list-item icon="verified_user" title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>-->
        <!--        </vs-list>-->

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        orders: [],
      }
    },
    mounted() {
      let vm = this;
      vm.getAllOrders();
    },
    methods: {
      getOrderStatusColor(status) {
        if (status == 'prepare') return "warning"
        if (status == 'finish') return "danger"
        if (status == 'delivery') return "primary"
        return "primary"
      },
      getAllOrders() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_ORDERS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.orders = response.data.orders.data;
                return
              }
              vm.orders = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.orders = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
    },
  }
</script>

<style lang="scss">
  .vx-card .vx-card__collapsible-content .vx-card__body {
    padding: 0;
  }

  .knowledge-base-jumbotron-content {
    background-image: url('../../../assets/images/pages/data/1.jpg');
    background-size: cover;
  }
</style>
