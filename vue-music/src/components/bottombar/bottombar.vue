<template>
	<div class="bottom-bar">
		<div class="music-info">
			<img src="http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg" class="music-pic">
			<div class="music-detail">
				<p class="music-name">小酒窝</p>
				<p class="music-singer">林俊杰，蔡卓妍</p>
			</div>
		</div>
		<div class="playpause">
			<i class="icon-play"></i>
		</div>
		<i class="music-list icon-list-music"></i>
	</div>
</template>

<script>
</script>

<style lang="scss">
.bottom-bar{
	position: fixed;
    z-index: 9;
    background: #fff;
    bottom: 0;
    height: 46px;
    padding: 5px;
    box-sizing: border-box;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .music-info{
	    position: relative;
	    -webkit-box-flex: 1;
	    -ms-flex: 1 1 auto;
	    flex: 1 1 auto;
	    height: 100%;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    .music-pic{
	    	-webkit-box-flex: 0;
		    -ms-flex: 0 0 36px;
		    flex: 0 0 36px;
		    width: 36px;
		    height: 36px;
	    }
	    .music-detail {
	    	-webkit-box-flex: 1;
		    -ms-flex: 1 1 auto;
		    flex: 1 1 auto;
		    padding: 0 5px;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-box-orient: vertical;
		    -webkit-box-direction: normal;
		    -ms-flex-direction: column;
		    flex-direction: column;
		    -ms-flex-pack: distribute;
		    justify-content: space-around;
		    p{
		    	width: 100%;
			    margin: 0;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    overflow: hidden;
		    }
		    .music-name{
		    	font-size: 14px;
			    font-weight: 400;
			    color: #333;
			    padding: 2px 0;
		    }
		    .music-singer{
		    	color: #aaa;
			    font-size: 10px;
			    font-weight: 400;
			    padding: 2px 0;
		    }
	    }
	}
	.playpause {
		border: 2px solid #999;
	    border-radius: 50%;
	    width: 24px;
	    height: 24px;
	    position: relative;
	    i{
	    	display: block;
		    position: absolute;
		    top: 50%;
		    left: 55%;
		    -webkit-transform: translate3d(-50%, -50%, 0);
		    transform: translate3d(-50%, -50%, 0);
		    width: 22px;
		    font-size: 14px;
		    color: #333;
		    text-align: center;
	    }
	    .icon-play:before {
		    content: ">";
		}
	}
	.music-list{
		margin-left: 10px;
	    display: block;
	    -webkit-box-flex: 0;
	    -ms-flex: 0 0 36px;
	    flex: 0 0 36px;
	    width: 36px;
	    height: 100%;
	    line-height: 36px;
	    text-align: center;
	    font-size: 26px;
	    color: #999;
	    
	}
	.icon-list-music:before {
	    content: "E";
	}
}
</style>