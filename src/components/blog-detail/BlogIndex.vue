<template>

    <md-button @click="show=!show" class="md-icon-button blog-index-icon">
        <md-icon>format_list_numbered</md-icon>
        <md-tooltip :md-active.sync="show" class="index-tip index-tip">
            <ul>
                <li><a>ffff</a></li>
               <li><a>ffff</a></li>
               <li><a>ffff</a></li>
            </ul>
        </md-tooltip>
    </md-button>

</template>

<script>
export default {
  name: 'blogIndex',
  data: () => ({
    show: true
  })
}
</script>

<style>
.blog-index-icon {
  position: fixed;
  left: 18px;
  top: 60px;
}

.index-tip{
    background-color: transparent !important
}

.index-tip ul{
    background-color: white;
    padding: 8px
}

.index-tip ul li a{
    color: gray;
   
}

.index-tip ul li a:hover{
    color: gray;
     text-decoration: underline
}
</style>
