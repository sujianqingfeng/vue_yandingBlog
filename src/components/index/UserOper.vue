<template>
    <md-card class="user-oper">

        <div class="md-layout user-header md-layout md-alignment-center">
         
            <img :src="info.icon?info.icon:avatar" alt="Avatar" class="avatar-style">
        
        </div>

        <div class="md-layout user-footer md-padding">
            <div class="md-layout-item md-layout md-alignment-center-left">
                <span class="font-color">{{info.username}}’s Blog</span>
            </div>

            <div class="md-layout-item md-layout md-alignment-center-right">
                <md-menu md-size="medium" md-align-trigger>
                    <md-button md-menu-trigger class="md-icon-button">
                        <md-icon>view_carousel</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item>My Item 1</md-menu-item>
                        <md-menu-item>My Item 2</md-menu-item>
                        <md-menu-item>My Item 3</md-menu-item>
                    </md-menu-content>
                </md-menu>

                <md-menu md-size="medium" md-align-trigger>
                    <md-button md-menu-trigger class="md-icon-button">
                        <md-icon>more_vert</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item>My Item 1</md-menu-item>
                        <md-menu-item>My Item 2</md-menu-item>
                        <md-menu-item>My Item 3</md-menu-item>
                    </md-menu-content>
                </md-menu>

            </div>

        </div>

    </md-card>
</template>



<script>
export default {
  name: 'userOper',
  props: {
    info: Object
  },
  data: () => ({
    avatar: require('./avatar.jpg')
  })
}
</script>

<style >
.user-header {
  height: 300px;
}

.avatar-style{
    height: 120px !important; 
    width: 120px;
    border-radius: 60px
}
</style>

