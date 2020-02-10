<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">
            <router-link :to="{path: `/detail/${data.vendor}`}">{{data.vendor}}</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        {{data.description}}
      </v-card-text>

      <v-card-text class="program_info">
        <p>{{data.reword}}</p>
        <p>{{data.point}}</p>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn small text color="primary">submit report</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    props: {
      data: Object,
    },
  };
</script>

<style scoped>
  p {
    margin-bottom: 4px;
  }

  .col-12 {
    display: flex;
  }

  .v-card {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
  }

  .program_info {
    flex: 1 0 auto;
  }
</style>