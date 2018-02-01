<template>
	<transition name="sliderUpHideRight">
		<div class="musicdetail">
			<div class="filterbg">
			</div>
			<div class="detailcontent">
				<div class="content-header">
					<i class="back icon-back">&lt;-</i>
					<div class="musicTopDetail">
						<p class="name">小酒窝</p>
						<p class="singer">林俊杰,蔡卓妍</p>
					</div>
					<i class="share icon-share"></i>
				</div>
				<transition name="fade">
					<div class="content-wrapper" >
						<div class="cd">
							<div class="swith-line">
								<div class="triger"></div>
							</div>
							<div class="cd-content" ref="cdcontent">
								<div class="wrapper" ref="cd">
									<div class="cd-bg"></div>
									<img class="img"  alt="">
								</div>
							</div>
						</div>
						<!-- <div class="lrc" v-if="getCurrentMusic">
							{{musicCurrentLrc}}
						</div> -->
						<div class="musicDo">
							<i class="icon icon-like"></i>
							<i class="icon icon-download"></i>
							<i class="icon icon-msg"></i>
							<i class="icon icon-list-circle-small"></i>
						</div>
					</div>
				</transition>
				<transition name="fade">
					<div class="lrc-wrapper" ref="lrcwrapper" >
						<div class="volume-range">
							<range range-type="volume" ball-width="10" current-color="rgba(255,255,255,0.8)"></range>
						</div>
						<div class="lrc" ref="lrc" >
							<div class="div-lrc" ref="divlrc">
								<p> </p>
							</div>
						</div>
					</div>
				</transition>
				<div class="content-footer">
					<div class="div-range">
						<range></range>
					</div>
					<div class="musicDetailCtrl">
						<i class="playType"></i>
						<i class="prev icon-prevdetail" ></i>
						<i class="playPause" </i>
						<i class="next icon-nextdetail" ></i>
						<i class="menu icon-list-music" ></i>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props:{

	},
	data(){
		return {

		}
	},
	computed:{

	},
	methods:{

	}
}
</script>

<style>
</style>